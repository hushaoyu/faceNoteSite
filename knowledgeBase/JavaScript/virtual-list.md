---
title: "虚拟列表实现"
category: "JavaScript"
tags: ["virtual-list", "performance", "scroll"]
difficulty: "高"
---

# 虚拟列表实现

## 什么是虚拟列表

虚拟列表是一种优化长列表渲染性能的技术，只渲染可见区域的元素，而不是全部渲染。

## 核心原理

1. 计算可见区域的范围
2. 只渲染可见范围内的元素
3. 通过 padding 模拟滚动条
4. 根据滚动位置动态更新可见元素

## 实现步骤

### 1. 计算可见区域

```javascript
const viewportHeight = container.clientHeight;
const itemHeight = 50;
const visibleCount = Math.ceil(viewportHeight / itemHeight);
```

### 2. 计算偏移量

```javascript
const scrollTop = container.scrollTop;
const startIndex = Math.floor(scrollTop / itemHeight);
const endIndex = startIndex + visibleCount + 1;
```

### 3. 渲染可见元素

```javascript
const visibleItems = list.slice(startIndex, endIndex);
const offsetTop = startIndex * itemHeight;
```

## 完整实现

```javascript
class VirtualList {
  constructor(options) {
    this.container = options.container;
    this.itemHeight = options.itemHeight;
    this.renderItem = options.renderItem;
    this.data = options.data;
    this.init();
  }

  init() {
    this.listContainer = document.createElement('div');
    this.listContainer.style.position = 'relative';
    this.listContainer.style.height = '100%';
    this.listContainer.style.overflow = 'auto';
    
    this.content = document.createElement('div');
    
    this.listContainer.appendChild(this.content);
    this.container.appendChild(this.listContainer);
    
    this.listContainer.addEventListener('scroll', this.handleScroll);
    this.render();
  }

  handleScroll = () => {
    this.render();
  };

  render() {
    const scrollTop = this.listContainer.scrollTop;
    const viewportHeight = this.listContainer.clientHeight;
    
    const startIndex = Math.floor(scrollTop / this.itemHeight);
    const endIndex = startIndex + Math.ceil(viewportHeight / this.itemHeight) + 1;
    
    const visibleData = this.data.slice(startIndex, endIndex);
    const offsetTop = startIndex * this.itemHeight;
    
    this.content.style.height = `${this.data.length * this.itemHeight}px`;
    this.content.style.transform = `translateY(${offsetTop}px)`;
    
    this.content.innerHTML = visibleData.map((item, index) => 
      this.renderItem(item, startIndex + index)
    ).join('');
  }

  updateData(data) {
    this.data = data;
    this.render();
  }
}
```

## 优化策略

| 优化项 | 方法 |
|--------|------|
| 固定高度 | 使用固定 itemHeight |
| 动态高度 | 计算实际高度缓存 |
| 滚动节流 | 使用 throttle |
| GPU加速 | 使用 transform |

## 使用场景

- 大数据列表
- 表格渲染
- 聊天记录