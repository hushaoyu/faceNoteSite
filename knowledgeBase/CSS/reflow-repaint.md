---
title: "重排与重绘"
category: "CSS"
tags: ["reflow", "repaint", "performance"]
difficulty: "中等"
---

# 重排与重绘

## 概念

### 重排（Reflow）
当元素的几何属性（位置、尺寸）发生变化时，浏览器需要重新计算布局，这个过程称为重排。

### 重绘（Repaint）
当元素的样式发生变化但不影响布局时，浏览器只需更新像素，这个过程称为重绘。

## 触发条件

### 触发重排的操作
- 添加/删除 DOM 元素
- 改变元素尺寸（width、height）
- 改变元素位置（top、left）
- 改变浏览器窗口大小
- 改变字体大小

### 触发重绘的操作
- 改变背景颜色
- 改变文字颜色
- 改变 visibility
- 改变 outline

## 性能优化策略

### 1. 批量修改 DOM
```javascript
// 不好：多次触发重排
const list = document.getElementById('list');
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Item ${i}`;
  list.appendChild(item);
}

// 好：使用 DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}
list.appendChild(fragment);
```

### 2. 使用 CSS 动画代替 JavaScript
```css
/* 使用 transform 不会触发重排 */
.element {
  transition: transform 0.3s;
}
.element:hover {
  transform: translateX(10px);
}
```

### 3. 避免频繁读取布局属性
```javascript
// 不好：强制同步布局
const box = document.getElementById('box');
for (let i = 0; i < 100; i++) {
  const width = box.offsetWidth; // 触发重排
  box.style.width = `${width + 1}px`; // 触发重排
}

// 好：先读取后修改
const box = document.getElementById('box');
const width = box.offsetWidth;
for (let i = 0; i < 100; i++) {
  box.style.width = `${width + i + 1}px`;
}
```

### 4. 使用 will-change 提示浏览器
```css
.element {
  will-change: transform, opacity;
}
```

## 优化建议

| 操作类型 | 优化建议 |
|----------|----------|
| DOM 修改 | 批量操作、使用 Fragment |
| 样式修改 | 使用 transform、opacity |
| 布局查询 | 集中读取、缓存结果 |
| 动画 | 使用 CSS 动画、GPU 加速 |