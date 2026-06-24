---
title: "事件循环与异步机制"
category: "JavaScript"
tags: ["event-loop", "async", "microtask", "macrotask"]
difficulty: "中等"
---

# 事件循环与异步机制

## 为什么 JS 是异步的

JavaScript 是单线程语言，如果所有操作都是同步的，那么耗时操作会阻塞主线程，导致页面卡顿。异步机制可以让耗时操作在后台执行，不阻塞主线程。

## 事件循环原理

### 调用栈
同步代码执行时，函数依次压入调用栈，执行完毕后弹出。

### 任务队列
异步操作完成后，回调函数进入任务队列等待执行。

### 微任务 vs 宏任务

#### 宏任务（Macrotask）
- setTimeout
- setInterval
- I/O
- requestAnimationFrame

#### 微任务（Microtask）
- Promise.then
- MutationObserver
- queueMicrotask

### 执行顺序
```
1. 执行同步代码（调用栈）
2. 清空微任务队列
3. 执行一个宏任务
4. 清空微任务队列
5. 重复步骤 3-4
```

## 示例

```javascript
console.log('1'); // 同步

setTimeout(() => {
  console.log('2'); // 宏任务
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // 微任务
});

console.log('4'); // 同步

// 输出顺序: 1, 4, 3, 2
```

## 进程与线程

### 进程
进程是操作系统分配资源的基本单位，每个进程有独立的内存空间。

### 线程
线程是 CPU 调度的基本单位，一个进程可以包含多个线程，共享进程的内存空间。

### JS 线程模型
- **主线程**: 执行 JS 代码、渲染页面
- **工作线程**: Web Worker，处理耗时计算
- **事件循环**: 管理异步操作