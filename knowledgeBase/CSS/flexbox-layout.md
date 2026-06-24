---
title: "Flexbox 布局详解"
category: "CSS"
tags: ["flexbox", "layout", "responsive"]
difficulty: "简单"
---

# Flexbox 布局详解

## 基本概念

Flexbox 是一种一维布局模型，可以轻松实现水平和垂直对齐。

## 容器属性

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
```

### flex-direction
- `row`: 水平排列（默认）
- `row-reverse`: 水平反向排列
- `column`: 垂直排列
- `column-reverse`: 垂直反向排列

### justify-content
- `flex-start`: 左对齐
- `flex-end`: 右对齐
- `center`: 居中
- `space-between`: 两端对齐
- `space-around`: 均匀分布

### align-items
- `flex-start`: 顶部对齐
- `flex-end`: 底部对齐
- `center`: 居中
- `stretch`: 拉伸填充

## 项目属性

```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: flex-start;
  order: 0;
}
```

### flex 简写
```css
.item {
  flex: 1 1 auto;
}
```

## 常见布局示例

### 居中布局
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 两端对齐
```css
.container {
  display: flex;
  justify-content: space-between;
}
```

### 等分布局
```css
.item {
  flex: 1;
}
```