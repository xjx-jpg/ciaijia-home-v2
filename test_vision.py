import struct, zlib, base64, json, urllib.request

def create_png(width, height, r, g, b):
    # Create a simple RGB PNG
    def chunk(chunk_type, data):
        c = chunk_type + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)
    
    header = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0))
    
    raw = b''
    for y in range(height):
        raw += b'\x00'  # filter byte
        for x in range(width):
            raw += bytes([r, g, b])
    
    idat = chunk(b'IDAT', zlib.compress(raw))
    iend = chunk(b'IEND', b'')
    return header + ihdr + idat + iend

# Create 100x100 red image
png_data = create_png(100, 100, 220, 80, 60)
b64 = base64.b64encode(png_data).decode()

url = 'https://api.siliconflow.cn/v1/chat/completions'
headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer sk-gbczajuaobuhgflxtpzfkzmjxztdjajahttfmunfcgnudxjz'}
payload = {
    'model': 'Qwen/Qwen3-VL-32B-Instruct',
    'messages': [
        {'role': 'user', 'content': [
            {'type': 'text', 'text': '请描述这张图片的颜色和主要内容，50字以内'},
            {'type': 'image_url', 'image_url': {'url': 'data:image/png;base64,' + b64}}
        ]}
    ],
    'max_tokens': 100,
    'temperature': 0.1
}

req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers=headers, method='POST')
try:
    resp = urllib.request.urlopen(req, timeout=60)
    result = json.loads(resp.read())
    content = result['choices'][0]['message']['content']
    print('STATUS: 200 OK')
    print('RESPONSE:', content[:300])
except urllib.error.HTTPError as e:
    print('HTTP ERROR:', e.code, e.read().decode()[:400])
except Exception as e:
    print('ERROR:', e)
