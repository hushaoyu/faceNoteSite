---
title: "HTTP 协议详解"
category: "Network"
tags: ["http", "protocol", "web"]
difficulty: "中等"
---

# HTTP 协议详解

## HTTP 概述

HTTP（HyperText Transfer Protocol）是一种基于 TCP/IP 的应用层协议，用于在 Web 浏览器和服务器之间传输数据。

## HTTP 请求方法

| 方法 | 用途 | 幂等性 |
|------|------|--------|
| GET | 获取资源 | 是 |
| POST | 提交数据 | 否 |
| PUT | 更新资源 | 是 |
| DELETE | 删除资源 | 是 |
| HEAD | 获取响应头 | 是 |
| OPTIONS | 获取支持的方法 | 是 |

## HTTP 状态码

### 1xx - 信息响应
- `100 Continue`: 继续发送请求体

### 2xx - 成功
- `200 OK`: 请求成功
- `201 Created`: 资源创建成功
- `204 No Content`: 无内容

### 3xx - 重定向
- `301 Moved Permanently`: 永久重定向
- `302 Found`: 临时重定向
- `304 Not Modified`: 未修改（使用缓存）

### 4xx - 客户端错误
- `400 Bad Request`: 请求错误
- `401 Unauthorized`: 未授权
- `403 Forbidden`: 禁止访问
- `404 Not Found`: 资源未找到

### 5xx - 服务器错误
- `500 Internal Server Error`: 服务器错误
- `502 Bad Gateway`: 网关错误
- `503 Service Unavailable`: 服务不可用

## HTTP 缓存

### 强缓存
- `Expires`: 指定过期时间
- `Cache-Control`: 更灵活的缓存控制

```http
Cache-Control: max-age=3600, public
```

### 协商缓存
- `Last-Modified`: 最后修改时间
- `ETag`: 实体标签

## HTTP/2 特性

- **多路复用**: 一个连接多个请求
- **头部压缩**: HPACK 算法
- **服务器推送**: 主动推送资源
- **优先级**: 请求优先级控制