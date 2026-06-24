---
title: "this 绑定机制"
category: "JavaScript"
tags: ["this", "bind", "call", "apply"]
difficulty: "中等"
---

# this 绑定机制

## 绑定规则

### 1. 默认绑定
```javascript
function foo() {
  console.log(this); // window（非严格模式）/ undefined（严格模式）
}
foo();
```

### 2. 隐式绑定
```javascript
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name); // Alice
  }
};
obj.greet();
```

### 3. 显式绑定

#### call()
```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
greet.call({ name: 'Bob' }, 'Hello'); // Hello, Bob
```

#### apply()
```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
greet.apply({ name: 'Bob' }, ['Hello', '!']); // Hello, Bob!
```

#### bind()
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const boundGreet = greet.bind({ name: 'Bob' });
boundGreet(); // Hello, Bob
```

### 4. new 绑定
```javascript
function Person(name) {
  this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // Alice
```

## call、apply、bind 的区别

| 方法 | 参数传递 | 返回值 | 执行时机 |
|------|----------|--------|----------|
| call | 逐个传递 | 函数执行结果 | 立即执行 |
| apply | 数组传递 | 函数执行结果 | 立即执行 |
| bind | 逐个传递 | 新函数 | 延迟执行 |

## 手写 bind

```javascript
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
const bound = greet.myBind({ name: 'Bob' }, 'Hello');
bound(); // Hello, Bob
```

## 箭头函数的 this

箭头函数没有自己的 this，它会捕获外层作用域的 this：

```javascript
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // undefined（外层是全局作用域）
  }
};
obj.greet();
```