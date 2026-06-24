---
title: "XSS 攻击与防护"
category: "Network"
tags: ["xss", "security", "attack"]
difficulty: "中等"
---

# XSS 攻击与防护

## 什么是 XSS

XSS（Cross-Site Scripting）是一种注入攻击，攻击者在网页中注入恶意脚本，当用户访问时脚本会在浏览器中执行。

## XSS 类型

### 1. 存储型 XSS

攻击脚本存储在服务器端数据库中：

```javascript
// 用户提交评论
<input type="text" name="comment" value="<script>alert('XSS')</script>">

// 服务器存储后，其他用户访问时执行
```

### 2. 反射型 XSS

攻击脚本通过 URL 参数传递：

```javascript
// URL: http://example.com/search?keyword=<script>alert('XSS')</script>

// 服务器直接渲染 URL 参数
<div>搜索结果: <script>alert('XSS')</script></div>
```

### 3. DOM 型 XSS

攻击脚本通过 DOM 操作执行：

```javascript
// JavaScript 直接使用 URL 参数
const keyword = new URLSearchParams(location.search).get('keyword');
document.getElementById('result').innerHTML = keyword;
```

## XSS 防护

### 1. 输入过滤

```javascript
function sanitize(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
```

### 2. 输出转义

```javascript
// 使用 textContent 代替 innerHTML
document.getElementById('result').textContent = userInput;

// React 自动转义
<div>{userInput}</div>

// Vue 自动转义
<span>{{ userInput }}</span>
```

### 3. CSP（内容安全策略）

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic'
```

### 4. 设置 HttpOnly Cookie

```javascript
document.cookie = 'session=abc123; HttpOnly';
```

### 5. 使用 DOMPurify

```javascript
import DOMPurify from 'dompurify';

const clean = DOMPurify.sanitize(userInput);
document.getElementById('content').innerHTML = clean;
```

## XSS 防护对比

| 方法 | 适用场景 | 安全性 |
|------|----------|--------|
| 输入过滤 | 用户输入 | 中 |
| 输出转义 | 页面渲染 | 高 |
| CSP | 全站防护 | 高 |
| HttpOnly | Cookie 保护 | 高 |
| DOMPurify | 富文本内容 | 高 |

## 最佳实践

1. **默认转义**: 使用框架自动转义机制
2. **验证输入**: 对用户输入进行严格验证
3. **设置 CSP**: 配置内容安全策略
4. **使用安全库**: 使用 DOMPurify 等安全库处理富文本