---
title: "Node.js 能做什么"
category: "JavaScript"
tags: ["nodejs", "backend", "server"]
difficulty: "中等"
---

# Node.js 能做什么

## 核心能力

### 1. 服务器端开发
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### 2. API 开发
```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json([{ name: 'Alice' }, { name: 'Bob' }]);
});

app.listen(3000);
```

### 3. 命令行工具
```javascript
#!/usr/bin/env node

console.log('Hello CLI');
```

### 4. 文件处理
```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});
```

### 5. 数据库操作
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
```

### 6. 实时通信
```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
```

## 应用场景

| 场景 | 技术栈 |
|------|--------|
| Web 服务 | Express, Koa |
| API 网关 | Fastify |
| 实时通信 | Socket.io |
| 微服务 | NestJS |
| 构建工具 | Webpack, Vite |
| 爬虫 | Puppeteer |

## 优势

- 事件驱动
- 非阻塞 I/O
- 单线程但高并发
- 与前端共享代码
- 丰富的 npm 生态