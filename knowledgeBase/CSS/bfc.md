---
title: "BFC 块级格式化上下文"
category: "CSS"
tags: ["bfc", "layout", "float"]
difficulty: "中等"
---

# BFC 块级格式化上下文

## 什么是 BFC

BFC（Block Formatting Context）是块级格式化上下文，是一个独立的渲染区域，内部元素的布局不会影响外部元素。

## 触发条件

满足以下任一条件即可触发 BFC：

- `float: left/right`
- `position: absolute/fixed`
- `display: inline-block/table-cell/flex/grid`
- `overflow: hidden/auto/scroll`

## 解决的问题

### 1. 清除浮动

```css
.parent {
  overflow: hidden; /* 触发 BFC */
}

.child {
  float: left;
  width: 100px;
  height: 100px;
  background: red;
}
```

### 2. 阻止 margin 重叠

```css
.box {
  margin: 10px;
  overflow: hidden; /* 触发 BFC */
}
```

### 3. 阻止元素被浮动元素覆盖

```css
.sidebar {
  float: left;
  width: 200px;
}

.main {
  overflow: hidden; /* 触发 BFC */
}
```

## BFC 规则

1. 内部的盒会在垂直方向上一个接一个地排列
2. 盒之间的垂直距离由 `margin` 决定，相邻盒的 margin 会重叠
3. 每个盒的左外边缘与包含块的左边缘接触
4. BFC 区域不会与浮动盒重叠
5. BFC 是一个独立的容器，内部元素不会影响外部