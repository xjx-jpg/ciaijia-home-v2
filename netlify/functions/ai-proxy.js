// Netlify Serverless Function - AI API Proxy
// 隐藏 API 密钥，防止前端泄露，加调用频率限制

// 调用频率限制（简易内存版，生产环境建议用 Redis）
var rateMap = {};

// 清理过期记录，每10分钟
setInterval(function() {
  var now = Date.now();
  for (var k in rateMap) {
    if (now - rateMap[k].time > 600000) delete rateMap[k];
  }
}, 600000);

exports.handler = async function(event) {
  // 只允许 POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // CORS 预检
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    };
  }

  // --- 频率限制 ---
  var ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';
  var now = Date.now();
  if (!rateMap[ip]) rateMap[ip] = { count: 0, time: now };
  if (now - rateMap[ip].time > 60000) { rateMap[ip] = { count: 0, time: now }; }
  rateMap[ip].count++;

  // 每分钟最多 10 次
  if (rateMap[ip].count > 10) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: '请求太频繁，请稍后再试' }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  }

  // 解析请求体
  var body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: '请求格式错误' }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  }

  // 从环境变量获取真实 API 密钥
  var apiKey = process.env.SILICONFLOW_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '服务未配置密钥' }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  }

  try {
    var response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(body)
    });

    var data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'API 请求失败: ' + err.message }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  }
};
