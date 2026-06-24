---
title: "元素居中的方式"
category: "CSS"
tags: ["centering", "layout", "flexbox"]
difficulty: "简单"
---

# 元素居中的方式

## 水平居中

### 1. 行内元素
```css
.parent {
  text-align: center;
}
```

### 2. 块级元素
```css
.child {
  margin: 0 auto;
  width: 200px;
}
```

### 3. Flexbox
```css
.parent {
  display: flex;
  justify-content: center;
}
```

## 垂直居中

### 1. Flexbox
```css
.parent {
  display: flex;
  align-items: center;
}
```

### 2. Grid
```css
.parent {
  display: grid;
  align-items: center;
}
```

### 3. 定位 + transform
```css
.parent {
  position: relative;
  height: 300px;
}

.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

## 水平垂直居中

### 1. Flexbox
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
```

### 2. Grid
```css
.parent {
  display: grid;
  place-items: center;
  height: 300px;
}
```

### 3. 定位 + transform
```css
.parent {
  position: relative;
  height: 300px;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 4. Table 布局
```css
.parent {
  display: table;
  height: 300px;
}

.child {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

## 对比表格

| 方法 | 兼容性 | 复杂度 | 适用场景 |
|------|--------|--------|----------|
| Flexbox | IE10+ | 低 | 现代浏览器 |
| Grid | IE11+ | 低 | 现代浏览器 |
| 定位 + transform | IE9+ | 中 | 需要支持旧浏览器 |
| Table 布局 | IE8+ | 高 | 兼容旧浏览器 |

## 最佳实践

- **现代项目**: 使用 Flexbox 或 Grid
- **需要兼容**: 使用定位 + transform
- **简单场景**: 使用 margin: 0 auto（水平居中）