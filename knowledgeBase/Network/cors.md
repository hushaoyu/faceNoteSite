---
title: "跨域问题与解决方案"
category: "Network"
tags: ["cors", "cross-origin", "proxy"]
difficulty: "中等"
---

# 跨域问题与解决方案

## 什么是跨域

当浏览器向不同域名、端口或协议的服务器发送请求时，会触发同源策略限制，这就是跨域。

## 同源策略

同源策略要求：
- 协议相同（http/https）
- 域名相同
- 端口相同

## 跨域解决方案

### 1. CORS（跨域资源共享）

**服务端配置**：
```javascript
// Node.js / Express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
```

**常见响应头**：
- `Access-Control-Allow-Origin`: 允许的源
- `Access-Control-Allow-Methods`: 允许的方法
- `Access-Control-Allow-Headers`: 允许的请求头
- `Access-Control-Allow-Credentials`: 是否允许携带凭证

### 2. 代理服务器

**开发环境（webpack devServer）**：
```javascript
// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
};
```

**生产环境（Nginx）**：
```nginx
server {
  listen 80;
  server_name example.com;
  
  location /api/ {
    proxy_pass http://api.example.com/;
  }
}
```

### 3. JSONP

```javascript
function handleResponse(data) {
  console.log(data);
}

const script = document.createElement('script');
script.src = 'http://api.example.com/data?callback=handleResponse';
document.body.appendChild(script);
```
**局限性**：只支持 GET 请求

### 4. WebSocket

```javascript
const ws = new WebSocket('ws://api.example.com');
ws.onmessage = (event) => {
  console.log(event.data);
};
```

### 5. postMessage

```javascript
// 主页面
window.addEventListener('message', (event) => {
  console.log(event.data);
});

// iframe
parent.postMessage('Hello', '*');
```

## 跨域方案对比

| 方案 | 适用场景 | 复杂度 |
|------|----------|--------|
| CORS | 前后端分离 | 低 |
| 代理 | 开发环境 | 低 |
| JSONP | 旧浏览器 | 中 |
| WebSocket | 实时通信 | 高 |
| postMessage | 页面间通信 | 中 |

## 最佳实践

- **开发环境**: 使用代理服务器
- **生产环境**: 使用 CORS
- **实时通信**: 使用 WebSocket