---
title: "防抖与节流"
category: "JavaScript"
tags: ["debounce", "throttle", "optimization"]
difficulty: "中等"
---

# 防抖与节流

## 概念

### 防抖（Debounce）
在事件触发后等待一段时间再执行，如果期间再次触发，则重新计时。

### 节流（Throttle）
在事件触发后立即执行，然后在一段时间内不再响应。

## 防抖实现

```javascript
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedFn = debounce(() => {
  console.log('debounced');
}, 300);
```

## 节流实现

```javascript
function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

const throttledFn = throttle(() => {
  console.log('throttled');
}, 300);
```

## 使用场景

### 防抖场景
- 搜索框输入
- 窗口 resize
- 按钮重复点击

### 节流场景
- 滚动事件
- 鼠标移动
- 高频点击

## 对比表格

| 特性 | 防抖 | 节流 |
|------|------|------|
| 触发时机 | 停止触发后 | 立即触发 |
| 执行次数 | 最后一次 | 固定间隔 |
| 适用场景 | 输入搜索 | 滚动监听 |

## Lodash 实现

```javascript
import { debounce, throttle } from 'lodash';

const fn1 = debounce(() => {}, 300);
const fn2 = throttle(() => {}, 300);
```