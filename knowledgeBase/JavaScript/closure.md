---
title: "闭包的概念与应用"
category: "JavaScript"
tags: ["closure", "scope", "lexical"]
difficulty: "中等"
---

# 闭包的概念与应用

## 什么是闭包

闭包是指一个函数能够访问其词法作用域之外的变量。当内部函数引用了外部函数的变量时，就形成了闭包。

## 闭包的工作原理

```javascript
function outer() {
  const message = 'Hello';
  
  function inner() {
    console.log(message);
  }
  
  return inner;
}

const fn = outer();
fn(); // 输出: Hello
```

## 闭包的常见应用

### 1. 数据封装

```javascript
function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
```

### 2. 函数柯里化

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}
```

### 3. 模块模式

```javascript
const module = (function() {
  const privateVar = 'secret';
  
  return {
    publicMethod() {
      return privateVar;
    }
  };
})();
```

## 闭包的注意事项

- **内存泄漏风险**: 闭包会保留对外部变量的引用，可能导致内存泄漏
- **性能影响**: 过度使用闭包会增加内存占用
- **作用域链**: 闭包会沿作用域链查找变量，影响访问性能