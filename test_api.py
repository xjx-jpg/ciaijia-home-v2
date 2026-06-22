import base64, json, urllib.request, urllib.parse

# minimal valid PNG (1x1 white pixel)
png = bytes([
    137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,
    0,0,0,1,0,0,0,1,8,2,0,0,0,144,119,83,222,
    0,0,0,12,73,68,65,84,8,215,99,248,207,192,0,0,
    0,2,0,1,227,68,166,41,0,0,0,0,73,69,78,68,174,66,96,130
])
b64 = base64.b64encode(png).decode()

url = 'https://api.siliconflow.cn/v1/chat/completions'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk-gbczajuaobuhgflxtpzfkzmjxztdjajahttfmunfcgnudxjz'
}
payload = {
    'model': 'Qwen/Qwen3-VL-32B-Instruct',
    'messages': [
        {'role': 'user', 'content': [
            {'type': 'text', 'text': '这张图片是什么颜色？'},
            {'type': 'image_url', 'image_url': {'url': 'data:image/png;base64,' + b64}}
        ]}
    ],
    'max_tokens': 100
}

req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers=headers, method='POST')
try:
    resp = urllib.request.urlopen(req, timeout=30)
    print('STATUS:', resp.status)
    result = json.loads(resp.read())
    content = result['choices'][0]['message']['content']
    print('RESPONSE:', content[:200])
    print('VISION OK')
except urllib.error.HTTPError as e:
    print('HTTP ERROR:', e.code, e.read().decode()[:300])
except Exception as e:
    print('ERROR:', e)
