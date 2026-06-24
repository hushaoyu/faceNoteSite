---
title: "var、let、const 的区别"
category: "JavaScript"
tags: ["var", "let", "const", "scope"]
difficulty: "简单"
---

# var、let、const 的区别

## 作用域

### var - 函数作用域
```javascript
function foo() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1，x 可以在 if 外部访问
}
foo();
```

### let/const - 块级作用域
```javascript
function foo() {
  if (true) {
    let x = 1;
    const y = 2;
  }
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined
}
foo();
```

## 变量提升

### var 的变量提升
```javascript
console.log(a); // undefined（变量提升，但未初始化）
var a = 1;
```

### let/const 的暂时性死区
```javascript
console.log(b); // ReferenceError（暂时性死区）
let b = 2;
```

## 重复声明

### var 允许重复声明
```javascript
var x = 1;
var x = 2; // 不会报错
```

### let/const 不允许重复声明
```javascript
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared
```

## const 的特性

### 不可重新赋值
```javascript
const PI = 3.14;
PI = 3.15; // TypeError: Assignment to constant variable
```

### 对象属性可修改
```javascript
const obj = { name: 'Alice' };
obj.name = 'Bob'; // 可以修改属性
obj = {}; // TypeError: Assignment to constant variable
```

## for 循环中的变量

### 使用 var 的问题
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 输出 3, 3, 3
  }, 0);
}
```

### 使用 let 的解决方案
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 输出 0, 1, 2
  }, 0);
}
```

## 总结对比

| 特性 | var | let | const |
|------|-----|-----|-------|
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 有 | 有（暂时性死区） | 有（暂时性死区） |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许 |
| 必须初始化 | 否 | 否 | 是 |

## 最佳实践

- 使用 `const` 声明不需要重新赋值的变量
- 使用 `let` 声明需要重新赋值的变量
- 避免使用 `var`