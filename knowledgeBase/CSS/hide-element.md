---
title: "隐藏元素的方式"
category: "CSS"
tags: ["hide", "visibility", "display"]
difficulty: "简单"
---

# 隐藏元素的方式

## 常见方法对比

### 1. display: none
```css
.element {
  display: none;
}
```
- 元素从文档流中完全移除
- 不占据空间
- 子元素也被隐藏
- 无法通过 Tab 访问
- 会触发重排

### 2. visibility: hidden
```css
.element {
  visibility: hidden;
}
```
- 元素仍占据空间
- 子元素可以通过 `visibility: visible` 显示
- 无法通过 Tab 访问
- 只触发重绘

### 3. opacity: 0
```css
.element {
  opacity: 0;
}
```
- 元素仍占据空间
- 元素仍然可交互（可点击、可聚焦）
- 只触发重绘

### 4. position: absolute + 移出视口
```css
.element {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
```
- 元素从正常文档流中移除
- 不占据空间
- 可通过 Tab 访问（屏幕阅读器可读取）

### 5. clip-path
```css
.element {
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}
```
- 元素仍占据空间
- 元素仍然可交互

### 6. height: 0 + overflow: hidden
```css
.element {
  height: 0;
  overflow: hidden;
}
```
- 元素不占据空间
- 过渡动画时可以平滑展开

## 对比表格

| 方法 | 占据空间 | 可交互 | 屏幕阅读器 | 性能影响 |
|------|----------|--------|------------|----------|
| display: none | 否 | 否 | 否 | 重排 |
| visibility: hidden | 是 | 否 | 否 | 重绘 |
| opacity: 0 | 是 | 是 | 是 | 重绘 |
| position: absolute + 移出 | 否 | 是 | 是 | 无 |
| clip-path | 是 | 是 | 是 | 重绘 |
| height: 0 + overflow | 否 | 否 | 否 | 重排 |

## 使用场景

| 场景 | 推荐方法 |
|------|----------|
| 完全移除元素 | display: none |
| 保留布局空间 | visibility: hidden |
| 动画效果 | opacity: 0 或 clip-path |
| 可访问性隐藏 | position: absolute + 移出 |
| 可折叠内容 | height: 0 + overflow: hidden |