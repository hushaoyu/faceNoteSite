---
title: "Reflect 对象详解"
category: "JavaScript"
tags: ["reflect", "proxy", "meta-programming"]
difficulty: "中等"
---

# Reflect 对象详解

## 什么是 Reflect

Reflect 是 ES6 引入的内置对象，提供了一系列用于操作对象的方法，这些方法与 Proxy handler 的方法相对应。

## 解决的问题

### 1. 统一的对象操作 API
将分散在 Object、Function 等对象上的方法集中到 Reflect 上：

```javascript
// 旧方式
Object.defineProperty(obj, 'prop', desc);

// 新方式
Reflect.defineProperty(obj, 'prop', desc);
```

### 2. 函数式调用
将操作符转为函数调用：

```javascript
// 操作符方式
'key' in obj;
delete obj.key;

// 函数方式
Reflect.has(obj, 'key');
Reflect.deleteProperty(obj, 'key');
```

### 3. 更合理的返回值
```javascript
// Object.defineProperty 失败时抛出异常
try {
  Object.defineProperty(obj, 'prop', desc);
} catch (e) {
  console.log('操作失败');
}

// Reflect.defineProperty 返回布尔值
if (Reflect.defineProperty(obj, 'prop', desc)) {
  console.log('操作成功');
} else {
  console.log('操作失败');
}
```

## 常用方法

### 1. Reflect.get(target, propertyKey[, receiver])
```javascript
const obj = { name: 'Alice' };
console.log(Reflect.get(obj, 'name')); // Alice
```

### 2. Reflect.set(target, propertyKey, value[, receiver])
```javascript
const obj = {};
Reflect.set(obj, 'name', 'Bob');
console.log(obj.name); // Bob
```

### 3. Reflect.has(target, propertyKey)
```javascript
const obj = { name: 'Alice' };
console.log(Reflect.has(obj, 'name')); // true
```

### 4. Reflect.deleteProperty(target, propertyKey)
```javascript
const obj = { name: 'Alice' };
Reflect.deleteProperty(obj, 'name');
console.log(obj.name); // undefined
```

### 5. Reflect.defineProperty(target, propertyKey, attributes)
```javascript
const obj = {};
Reflect.defineProperty(obj, 'name', {
  value: 'Alice',
  writable: true,
  enumerable: true,
  configurable: true
});
```

### 6. Reflect.construct(target, args[, newTarget])
```javascript
function Person(name) {
  this.name = name;
}
const person = Reflect.construct(Person, ['Alice']);
console.log(person.name); // Alice
```

## 与 Proxy 的配合

```javascript
const handler = {
  get(target, prop) {
    console.log(`获取属性: ${prop}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(`设置属性: ${prop} = ${value}`);
    return Reflect.set(target, prop, value);
  }
};

const proxy = new Proxy({}, handler);
proxy.name = 'Alice'; // 设置属性: name = Alice
console.log(proxy.name); // 获取属性: name -> Alice
```

## 应用场景

- **元编程**: 配合 Proxy 实现对象的拦截和自定义行为
- **框架开发**: 如 Vue 3 的响应式系统使用了 Proxy 和 Reflect
- **代码优化**: 将对象操作统一为函数式调用，便于组合和复用