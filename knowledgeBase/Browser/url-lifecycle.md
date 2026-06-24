---
title: "输入 URL 后的流程"
category: "Browser"
tags: ["url", "browser", "network"]
difficulty: "中等"
---

# 输入 URL 后的流程

## 完整流程

### 1. DNS 解析
```
1. 检查浏览器缓存
2. 检查系统缓存（hosts 文件）
3. 发送 DNS 请求到本地 DNS 服务器
4. 本地 DNS 服务器递归查询
5. 返回 IP 地址
```

### 2. TCP 连接
```
1. 三次握手建立连接
2. 发送 HTTP 请求
3. 服务器处理请求
4. 返回 HTTP 响应
5. 四次挥手关闭连接
```

### 3. 浏览器渲染
```
1. 解析 HTML → DOM 树
2. 解析 CSS → CSSOM 树
3. 合并 DOM + CSSOM → 渲染树
4. 布局（Layout）→ 计算位置和尺寸
5. 绘制（Paint）→ 绘制像素
6. 合成（Composite）→ 生成最终图像
```

## 详细步骤

### 第一步：DNS 解析
```javascript
// 浏览器缓存查找
// 系统缓存查找  
// 发送 DNS 查询
```

### 第二步：TCP 连接
```
SYN → SYN+ACK → ACK
```

### 第三步：HTTP 请求
```http
GET /index.html HTTP/1.1
Host: example.com
Connection: keep-alive
```

### 第四步：服务器响应
```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1000

<html>...</html>
```

### 第五步：浏览器渲染
```
HTML → Tokenize → Parse → DOM
CSS → Parse → CSSOM
DOM + CSSOM → Render Tree
Layout → Paint → Composite
```

## 优化策略

| 优化阶段 | 策略 |
|----------|------|
| DNS | DNS 预解析 |
| TCP | 连接复用、HTTP/2 |
| HTTP | 缓存、压缩 |
| 渲染 | 减少重排、懒加载 |