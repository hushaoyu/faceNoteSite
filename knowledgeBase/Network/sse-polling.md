---
title: "SSE 与轮询"
category: "Network"
tags: ["sse", "polling", "long-polling"]
difficulty: "中等"
---

# SSE 与轮询

## SSE（Server-Sent Events）

### 什么是 SSE
SSE 是一种服务器向客户端推送数据的技术，基于 HTTP 协议。

### SSE 是长连接
```javascript
// 客户端
const eventSource = new EventSource('/api/stream');

eventSource.onmessage = (event) => {
  console.log(event.data);
};

// 服务端（Node.js）
app.get('/api/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  setInterval(() => {
    res.write(`data: ${JSON.stringify({ time: new Date() })}\n\n`);
  }, 1000);
});
```

## 轮询

### 短轮询
```javascript
function shortPoll() {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setTimeout(shortPoll, 1000);
    });
}
```

### 长轮询
```javascript
function longPoll() {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      longPoll();
    });
}
```

## SSE 与轮询对比

| 特性 | SSE | 短轮询 | 长轮询 |
|------|-----|--------|--------|
| 连接方式 | 长连接 | 短连接 | 长连接 |
| 实时性 | 高 | 低 | 中 |
| 服务器压力 | 低 | 高 | 中 |
| 浏览器支持 | 良好 | 完美 | 完美 |
| 双向通信 | 否 | 否 | 否 |

## 使用场景

| 场景 | 推荐方式 |
|------|----------|
| 实时通知 | SSE |
| 简单数据更新 | 短轮询 |
| 低延迟要求 | 长轮询 |
| 双向通信 | WebSocket |