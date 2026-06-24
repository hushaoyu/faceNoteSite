---
title: "HTTP 缓存机制"
category: "Network"
tags: ["http", "cache", "performance"]
difficulty: "中等"
---

# HTTP 缓存机制

## 缓存类型

### 1. 强缓存

#### Expires
```http
Expires: Wed, 24 Jun 2026 12:00:00 GMT
```
- 指定过期时间
- 受客户端时间影响

#### Cache-Control
```http
Cache-Control: max-age=3600, public, no-cache
```

常用指令：
- `max-age`: 缓存有效期（秒）
- `public`: 可被中间缓存代理
- `private`: 仅客户端缓存
- `no-cache`: 强制验证缓存
- `no-store`: 不缓存

### 2. 协商缓存

#### Last-Modified / If-Modified-Since
```http
Last-Modified: Wed, 24 Jun 2026 10:00:00 GMT
If-Modified-Since: Wed, 24 Jun 2026 10:00:00 GMT
```
- 基于文件修改时间
- 精度为秒

#### ETag / If-None-Match
```http
ETag: "abc123"
If-None-Match: "abc123"
```
- 基于文件内容哈希
- 精度更高

## 缓存流程

```
请求资源
    ↓
检查强缓存（Cache-Control/Expires）
    ↓
[命中] → 返回本地缓存（200）
    ↓
[未命中] → 检查协商缓存（ETag/Last-Modified）
    ↓
[命中] → 返回 304，使用本地缓存
    ↓
[未命中] → 请求服务器，返回新资源（200）
```

## 强制缓存失效

### 1. 刷新页面（F5）
- 跳过强缓存，检查协商缓存

### 2. 强制刷新（Ctrl+F5）
- 跳过所有缓存，重新请求

### 3. 设置请求头
```javascript
fetch('/api/data', {
  cache: 'no-cache'
});
```

## 缓存策略

### 静态资源
```http
Cache-Control: max-age=31536000, immutable
```

### API 接口
```http
Cache-Control: no-cache
ETag: "abc123"
```

### 变化频繁的资源
```http
Cache-Control: no-cache
```

## 最佳实践

1. **静态资源**: 设置长缓存时间 + 版本号
2. **API**: 使用协商缓存
3. **敏感数据**: 使用 `no-store`
4. **CDN**: 设置合理的缓存时间