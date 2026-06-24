---
title: "深拷贝与浅拷贝"
category: "JavaScript"
tags: ["copy", "deep", "shallow"]
difficulty: "中等"
---

# 深拷贝与浅拷贝

## 概念

### 浅拷贝
只复制第一层属性，嵌套对象仍然是引用关系。

### 深拷贝
递归复制所有层级的属性，嵌套对象也是全新的副本。

## 浅拷贝方法

### 1. Object.assign()
```javascript
const obj = { a: 1, b: { c: 2 } };
const shallow = Object.assign({}, obj);
shallow.b.c = 3;
console.log(obj.b.c); // 3，原对象被修改
```

### 2. 展开运算符
```javascript
const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3，原对象被修改
```

### 3. Array.slice() / Array.concat()
```javascript
const arr = [1, 2, { a: 3 }];
const shallow = arr.slice();
shallow[2].a = 4;
console.log(arr[2].a); // 4，原数组被修改
```

## 深拷贝方法

### 1. JSON.parse(JSON.stringify())
```javascript
const obj = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 3;
console.log(obj.b.c); // 2，原对象不受影响
```

**局限性**：
- 无法拷贝函数
- 无法拷贝 Symbol
- 无法处理循环引用
- 日期对象会被转为字符串

### 2. 递归实现
```javascript
function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}
```

### 3. Lodash.cloneDeep()
```javascript
import cloneDeep from 'lodash/cloneDeep';
const obj = { a: 1, b: { c: 2 } };
const deep = cloneDeep(obj);
```

## 区别对比

| 特性 | 浅拷贝 | 深拷贝 |
|------|--------|--------|
| 第一层属性 | 新值 | 新值 |
| 嵌套对象 | 引用 | 新值 |
| 循环引用 | 不支持 | 需特殊处理 |
| 函数 | 引用 | 可拷贝 |
| Symbol | 引用 | 可拷贝 |