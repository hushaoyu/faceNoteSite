import{x as j,y as _,j as f,p as C}from"./index-CbQk0RMo.js";/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T=(n,e)=>({size:r,strokeWidth:o=2,absoluteStrokeWidth:s,color:a,class:i,...u},{attrs:d,slots:l})=>j("svg",{...x,width:r||x.width,height:r||x.height,stroke:a||x.stroke,"stroke-width":s?Number(o)*24/Number(r):o,...d,class:["lucide",`lucide-${P(n)}`],...u},[...e.map(m=>j(...m)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=T("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),M=`---
title: "Prompt Engineering 提示词工程"
category: "AI"
tags: ["prompt", "llm", "chatgpt"]
difficulty: "中等"
---

# Prompt Engineering 提示词工程

## 什么是提示词工程

提示词工程是指设计和优化输入给大语言模型（LLM）的文本提示，以获得更准确、有用和相关的输出。

## 核心原则

### 1. 清晰明确
\`\`\`
不好：写一篇关于网络的文章
好：写一篇500字左右的文章，介绍HTTP协议的基本概念和工作原理，面向初级开发者
\`\`\`

### 2. 结构化输出
\`\`\`
请按以下格式回答：
- 概念：[定义]
- 特点：[列出3-5点]
- 示例：[代码示例]
\`\`\`

### 3. 提供上下文
\`\`\`
假设你是一位资深前端工程师，正在面试一位初级开发者。
请解释什么是闭包，并给出一个实际应用场景。
\`\`\`

### 4. 设置角色
\`\`\`
请扮演一位资深架构师，解释微服务架构的优缺点。
\`\`\`

### 5. 分步骤思考
\`\`\`
请分步思考以下问题：
1. 分析问题需求
2. 列出可能的解决方案
3. 对比各方案的优缺点
4. 给出推荐方案
\`\`\`

## 常用技巧

### 1. Few-shot Learning
\`\`\`
示例1：
Q: 2+3=?
A: 5

示例2：
Q: 10*5=?
A: 50

Q: 7-4=?
A:
\`\`\`

### 2. Chain of Thought
\`\`\`
请详细解释你的思考过程：
问题：如果今天是周一，那么7天后是周几？
思考：今天是周一，1天后是周二，2天后是周三...7天后是周一。
答案：周一
\`\`\`

### 3. 约束条件
\`\`\`
请回答以下问题，要求：
- 答案不超过200字
- 使用简单易懂的语言
- 不要使用技术术语
\`\`\`

## 常见错误

- **过于笼统**: 提示不够具体，导致输出偏离预期
- **缺少上下文**: 没有提供足够的背景信息
- **矛盾指令**: 提示中包含相互矛盾的要求
- **过度复杂**: 提示过长或结构混乱`,A=`---
title: "输入 URL 后的流程"
category: "Browser"
tags: ["url", "browser", "network"]
difficulty: "中等"
---

# 输入 URL 后的流程

## 完整流程

### 1. DNS 解析
\`\`\`
1. 检查浏览器缓存
2. 检查系统缓存（hosts 文件）
3. 发送 DNS 请求到本地 DNS 服务器
4. 本地 DNS 服务器递归查询
5. 返回 IP 地址
\`\`\`

### 2. TCP 连接
\`\`\`
1. 三次握手建立连接
2. 发送 HTTP 请求
3. 服务器处理请求
4. 返回 HTTP 响应
5. 四次挥手关闭连接
\`\`\`

### 3. 浏览器渲染
\`\`\`
1. 解析 HTML → DOM 树
2. 解析 CSS → CSSOM 树
3. 合并 DOM + CSSOM → 渲染树
4. 布局（Layout）→ 计算位置和尺寸
5. 绘制（Paint）→ 绘制像素
6. 合成（Composite）→ 生成最终图像
\`\`\`

## 详细步骤

### 第一步：DNS 解析
\`\`\`javascript
// 浏览器缓存查找
// 系统缓存查找  
// 发送 DNS 查询
\`\`\`

### 第二步：TCP 连接
\`\`\`
SYN → SYN+ACK → ACK
\`\`\`

### 第三步：HTTP 请求
\`\`\`http
GET /index.html HTTP/1.1
Host: example.com
Connection: keep-alive
\`\`\`

### 第四步：服务器响应
\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1000

<html>...</html>
\`\`\`

### 第五步：浏览器渲染
\`\`\`
HTML → Tokenize → Parse → DOM
CSS → Parse → CSSOM
DOM + CSSOM → Render Tree
Layout → Paint → Composite
\`\`\`

## 优化策略

| 优化阶段 | 策略 |
|----------|------|
| DNS | DNS 预解析 |
| TCP | 连接复用、HTTP/2 |
| HTTP | 缓存、压缩 |
| 渲染 | 减少重排、懒加载 |`,B=`---
title: "前端打包优化"
category: "Build"
tags: ["optimization", "bundle", "performance"]
difficulty: "中等"
---

# 前端打包优化

## 代码分割

### 1. 动态导入

\`\`\`javascript
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
\`\`\`

### 2. 第三方库分离

\`\`\`javascript
// webpack.config.js
optimization: {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        name: 'vendor',
        chunks: 'all'
      }
    }
  }
}
\`\`\`

## 压缩优化

### 1. TerserPlugin

\`\`\`javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
};
\`\`\`

### 2. CSS 压缩

\`\`\`javascript
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};
\`\`\`

## Tree Shaking

\`\`\`javascript
// package.json
{
  "sideEffects": false
}

// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true
  }
};
\`\`\`

## 缓存优化

\`\`\`javascript
module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
\`\`\`

## 图片优化

\`\`\`javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\\.(png|jpe?g|gif|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      }
    ]
  }
};
\`\`\`

## 优化建议

| 优化项 | 效果 | 优先级 |
|--------|------|--------|
| 代码分割 | 减少首屏体积 | 高 |
| 压缩 | 减小文件大小 | 高 |
| Tree Shaking | 移除无用代码 | 中 |
| 缓存 | 提升二次加载 | 高 |
| 图片优化 | 减少资源大小 | 中 |`,E=`---
title: "Webpack Chunk 配置"
category: "Build"
tags: ["webpack", "chunk", "splitting"]
difficulty: "中等"
---

# Webpack Chunk 配置

## Chunk 概念

Chunk 是 Webpack 打包时生成的代码块，可以将不同的模块组合在一起。

## 代码分割策略

### 1. 入口分割

\`\`\`javascript
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  }
};
\`\`\`

### 2. 动态导入

\`\`\`javascript
// 方式一：import()
const module = await import('./module');

// 方式二：require.ensure()
require.ensure(['./module'], (require) => {
  const module = require('./module');
});
\`\`\`

### 3. SplitChunks

\`\`\`javascript
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\\\/]node_modules[\\\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
\`\`\`

## Chunk 命名

\`\`\`javascript
// 动态导入时命名
const module = await import(/* webpackChunkName: "module" */ './module');
\`\`\`

## 缓存策略

\`\`\`javascript
module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    assetModuleFilename: '[name].[hash][ext][query]'
  }
};
\`\`\`

## 最佳实践

1. **第三方库**: 单独打包为 vendor chunk
2. **公共代码**: 使用 splitChunks 提取
3. **懒加载**: 使用动态导入减少首屏体积
4. **缓存**: 使用 contenthash 实现长效缓存`,I=`---
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

- \`float: left/right\`
- \`position: absolute/fixed\`
- \`display: inline-block/table-cell/flex/grid\`
- \`overflow: hidden/auto/scroll\`

## 解决的问题

### 1. 清除浮动

\`\`\`css
.parent {
  overflow: hidden; /* 触发 BFC */
}

.child {
  float: left;
  width: 100px;
  height: 100px;
  background: red;
}
\`\`\`

### 2. 阻止 margin 重叠

\`\`\`css
.box {
  margin: 10px;
  overflow: hidden; /* 触发 BFC */
}
\`\`\`

### 3. 阻止元素被浮动元素覆盖

\`\`\`css
.sidebar {
  float: left;
  width: 200px;
}

.main {
  overflow: hidden; /* 触发 BFC */
}
\`\`\`

## BFC 规则

1. 内部的盒会在垂直方向上一个接一个地排列
2. 盒之间的垂直距离由 \`margin\` 决定，相邻盒的 margin 会重叠
3. 每个盒的左外边缘与包含块的左边缘接触
4. BFC 区域不会与浮动盒重叠
5. BFC 是一个独立的容器，内部元素不会影响外部`,H=`---
title: "元素居中的方式"
category: "CSS"
tags: ["centering", "layout", "flexbox"]
difficulty: "简单"
---

# 元素居中的方式

## 水平居中

### 1. 行内元素
\`\`\`css
.parent {
  text-align: center;
}
\`\`\`

### 2. 块级元素
\`\`\`css
.child {
  margin: 0 auto;
  width: 200px;
}
\`\`\`

### 3. Flexbox
\`\`\`css
.parent {
  display: flex;
  justify-content: center;
}
\`\`\`

## 垂直居中

### 1. Flexbox
\`\`\`css
.parent {
  display: flex;
  align-items: center;
}
\`\`\`

### 2. Grid
\`\`\`css
.parent {
  display: grid;
  align-items: center;
}
\`\`\`

### 3. 定位 + transform
\`\`\`css
.parent {
  position: relative;
  height: 300px;
}

.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
\`\`\`

## 水平垂直居中

### 1. Flexbox
\`\`\`css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
\`\`\`

### 2. Grid
\`\`\`css
.parent {
  display: grid;
  place-items: center;
  height: 300px;
}
\`\`\`

### 3. 定位 + transform
\`\`\`css
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
\`\`\`

### 4. Table 布局
\`\`\`css
.parent {
  display: table;
  height: 300px;
}

.child {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
\`\`\`

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
- **简单场景**: 使用 margin: 0 auto（水平居中）`,O=`---
title: "Flexbox 布局详解"
category: "CSS"
tags: ["flexbox", "layout", "responsive"]
difficulty: "简单"
---

# Flexbox 布局详解

## 基本概念

Flexbox 是一种一维布局模型，可以轻松实现水平和垂直对齐。

## 容器属性

\`\`\`css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
\`\`\`

### flex-direction
- \`row\`: 水平排列（默认）
- \`row-reverse\`: 水平反向排列
- \`column\`: 垂直排列
- \`column-reverse\`: 垂直反向排列

### justify-content
- \`flex-start\`: 左对齐
- \`flex-end\`: 右对齐
- \`center\`: 居中
- \`space-between\`: 两端对齐
- \`space-around\`: 均匀分布

### align-items
- \`flex-start\`: 顶部对齐
- \`flex-end\`: 底部对齐
- \`center\`: 居中
- \`stretch\`: 拉伸填充

## 项目属性

\`\`\`css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: flex-start;
  order: 0;
}
\`\`\`

### flex 简写
\`\`\`css
.item {
  flex: 1 1 auto;
}
\`\`\`

## 常见布局示例

### 居中布局
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

### 两端对齐
\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
\`\`\`

### 等分布局
\`\`\`css
.item {
  flex: 1;
}
\`\`\``,N=`---
title: "隐藏元素的方式"
category: "CSS"
tags: ["hide", "visibility", "display"]
difficulty: "简单"
---

# 隐藏元素的方式

## 常见方法对比

### 1. display: none
\`\`\`css
.element {
  display: none;
}
\`\`\`
- 元素从文档流中完全移除
- 不占据空间
- 子元素也被隐藏
- 无法通过 Tab 访问
- 会触发重排

### 2. visibility: hidden
\`\`\`css
.element {
  visibility: hidden;
}
\`\`\`
- 元素仍占据空间
- 子元素可以通过 \`visibility: visible\` 显示
- 无法通过 Tab 访问
- 只触发重绘

### 3. opacity: 0
\`\`\`css
.element {
  opacity: 0;
}
\`\`\`
- 元素仍占据空间
- 元素仍然可交互（可点击、可聚焦）
- 只触发重绘

### 4. position: absolute + 移出视口
\`\`\`css
.element {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
\`\`\`
- 元素从正常文档流中移除
- 不占据空间
- 可通过 Tab 访问（屏幕阅读器可读取）

### 5. clip-path
\`\`\`css
.element {
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}
\`\`\`
- 元素仍占据空间
- 元素仍然可交互

### 6. height: 0 + overflow: hidden
\`\`\`css
.element {
  height: 0;
  overflow: hidden;
}
\`\`\`
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
| 可折叠内容 | height: 0 + overflow: hidden |`,R=`---
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
\`\`\`javascript
// 不好：多次触发重排
const list = document.getElementById('list');
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = \`Item \${i}\`;
  list.appendChild(item);
}

// 好：使用 DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = \`Item \${i}\`;
  fragment.appendChild(item);
}
list.appendChild(fragment);
\`\`\`

### 2. 使用 CSS 动画代替 JavaScript
\`\`\`css
/* 使用 transform 不会触发重排 */
.element {
  transition: transform 0.3s;
}
.element:hover {
  transform: translateX(10px);
}
\`\`\`

### 3. 避免频繁读取布局属性
\`\`\`javascript
// 不好：强制同步布局
const box = document.getElementById('box');
for (let i = 0; i < 100; i++) {
  const width = box.offsetWidth; // 触发重排
  box.style.width = \`\${width + 1}px\`; // 触发重排
}

// 好：先读取后修改
const box = document.getElementById('box');
const width = box.offsetWidth;
for (let i = 0; i < 100; i++) {
  box.style.width = \`\${width + i + 1}px\`;
}
\`\`\`

### 4. 使用 will-change 提示浏览器
\`\`\`css
.element {
  will-change: transform, opacity;
}
\`\`\`

## 优化建议

| 操作类型 | 优化建议 |
|----------|----------|
| DOM 修改 | 批量操作、使用 Fragment |
| 样式修改 | 使用 transform、opacity |
| 布局查询 | 集中读取、缓存结果 |
| 动画 | 使用 CSS 动画、GPU 加速 |`,V=`---
title: "闭包的概念与应用"
category: "JavaScript"
tags: ["closure", "scope", "lexical"]
difficulty: "中等"
---

# 闭包的概念与应用

## 什么是闭包

闭包是指一个函数能够访问其词法作用域之外的变量。当内部函数引用了外部函数的变量时，就形成了闭包。

## 闭包的工作原理

\`\`\`javascript
function outer() {
  const message = 'Hello';
  
  function inner() {
    console.log(message);
  }
  
  return inner;
}

const fn = outer();
fn(); // 输出: Hello
\`\`\`

## 闭包的常见应用

### 1. 数据封装

\`\`\`javascript
function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
\`\`\`

### 2. 函数柯里化

\`\`\`javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}
\`\`\`

### 3. 模块模式

\`\`\`javascript
const module = (function() {
  const privateVar = 'secret';
  
  return {
    publicMethod() {
      return privateVar;
    }
  };
})();
\`\`\`

## 闭包的注意事项

- **内存泄漏风险**: 闭包会保留对外部变量的引用，可能导致内存泄漏
- **性能影响**: 过度使用闭包会增加内存占用
- **作用域链**: 闭包会沿作用域链查找变量，影响访问性能`,X=`---
title: "防抖与节流"
category: "JavaScript"
tags: ["debounce", "throttle", "optimization"]
difficulty: "中等"
---

# 防抖与节流

## 概念

### 防抖（Debounce）
在事件触发后等待一段时间再执行，如果期间再次触发，则重新计时。

### 节流（Throttle）
在事件触发后立即执行，然后在一段时间内不再响应。

## 防抖实现

\`\`\`javascript
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedFn = debounce(() => {
  console.log('debounced');
}, 300);
\`\`\`

## 节流实现

\`\`\`javascript
function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

const throttledFn = throttle(() => {
  console.log('throttled');
}, 300);
\`\`\`

## 使用场景

### 防抖场景
- 搜索框输入
- 窗口 resize
- 按钮重复点击

### 节流场景
- 滚动事件
- 鼠标移动
- 高频点击

## 对比表格

| 特性 | 防抖 | 节流 |
|------|------|------|
| 触发时机 | 停止触发后 | 立即触发 |
| 执行次数 | 最后一次 | 固定间隔 |
| 适用场景 | 输入搜索 | 滚动监听 |

## Lodash 实现

\`\`\`javascript
import { debounce, throttle } from 'lodash';

const fn1 = debounce(() => {}, 300);
const fn2 = throttle(() => {}, 300);
\`\`\``,D=`---
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
\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };
const shallow = Object.assign({}, obj);
shallow.b.c = 3;
console.log(obj.b.c); // 3，原对象被修改
\`\`\`

### 2. 展开运算符
\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };
shallow.b.c = 3;
console.log(obj.b.c); // 3，原对象被修改
\`\`\`

### 3. Array.slice() / Array.concat()
\`\`\`javascript
const arr = [1, 2, { a: 3 }];
const shallow = arr.slice();
shallow[2].a = 4;
console.log(arr[2].a); // 4，原数组被修改
\`\`\`

## 深拷贝方法

### 1. JSON.parse(JSON.stringify())
\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 3;
console.log(obj.b.c); // 2，原对象不受影响
\`\`\`

**局限性**：
- 无法拷贝函数
- 无法拷贝 Symbol
- 无法处理循环引用
- 日期对象会被转为字符串

### 2. 递归实现
\`\`\`javascript
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
\`\`\`

### 3. Lodash.cloneDeep()
\`\`\`javascript
import cloneDeep from 'lodash/cloneDeep';
const obj = { a: 1, b: { c: 2 } };
const deep = cloneDeep(obj);
\`\`\`

## 区别对比

| 特性 | 浅拷贝 | 深拷贝 |
|------|--------|--------|
| 第一层属性 | 新值 | 新值 |
| 嵌套对象 | 引用 | 新值 |
| 循环引用 | 不支持 | 需特殊处理 |
| 函数 | 引用 | 可拷贝 |
| Symbol | 引用 | 可拷贝 |`,F=`---
title: "事件循环与异步机制"
category: "JavaScript"
tags: ["event-loop", "async", "microtask", "macrotask"]
difficulty: "中等"
---

# 事件循环与异步机制

## 为什么 JS 是异步的

JavaScript 是单线程语言，如果所有操作都是同步的，那么耗时操作会阻塞主线程，导致页面卡顿。异步机制可以让耗时操作在后台执行，不阻塞主线程。

## 事件循环原理

### 调用栈
同步代码执行时，函数依次压入调用栈，执行完毕后弹出。

### 任务队列
异步操作完成后，回调函数进入任务队列等待执行。

### 微任务 vs 宏任务

#### 宏任务（Macrotask）
- setTimeout
- setInterval
- I/O
- requestAnimationFrame

#### 微任务（Microtask）
- Promise.then
- MutationObserver
- queueMicrotask

### 执行顺序
\`\`\`
1. 执行同步代码（调用栈）
2. 清空微任务队列
3. 执行一个宏任务
4. 清空微任务队列
5. 重复步骤 3-4
\`\`\`

## 示例

\`\`\`javascript
console.log('1'); // 同步

setTimeout(() => {
  console.log('2'); // 宏任务
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // 微任务
});

console.log('4'); // 同步

// 输出顺序: 1, 4, 3, 2
\`\`\`

## 进程与线程

### 进程
进程是操作系统分配资源的基本单位，每个进程有独立的内存空间。

### 线程
线程是 CPU 调度的基本单位，一个进程可以包含多个线程，共享进程的内存空间。

### JS 线程模型
- **主线程**: 执行 JS 代码、渲染页面
- **工作线程**: Web Worker，处理耗时计算
- **事件循环**: 管理异步操作`,J=`---
title: "前端国际化实现"
category: "JavaScript"
tags: ["i18n", "internationalization", "localization"]
difficulty: "中等"
---

# 前端国际化实现

## 什么是国际化

国际化（i18n）是指让应用支持多种语言和地区的能力。

## 实现方案

### 1. 静态资源方案

\`\`\`javascript
// locales/en.js
export default {
  greeting: 'Hello',
  welcome: 'Welcome to our app'
};

// locales/zh.js
export default {
  greeting: '你好',
  welcome: '欢迎使用我们的应用'
};
\`\`\`

### 2. 使用 i18next

\`\`\`javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello'
        }
      },
      zh: {
        translation: {
          greeting: '你好'
        }
      }
    },
    lng: 'zh',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
\`\`\`

### 3. Vue 国际化

\`\`\`javascript
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'zh',
  messages: {
    en: { greeting: 'Hello' },
    zh: { greeting: '你好' }
  }
});
\`\`\`

## 核心概念

### 语言切换
\`\`\`javascript
i18n.changeLanguage('en');
\`\`\`

### 插值
\`\`\`javascript
t('welcome', { name: 'Alice' });
// 欢迎 Alice 使用我们的应用
\`\`\`

### 复数
\`\`\`javascript
t('items', { count: 1 }); // 1 item
t('items', { count: 2 }); // 2 items
\`\`\`

## 最佳实践

| 实践 | 说明 |
|------|------|
| 分离翻译文件 | 每个语言一个文件 |
| 使用键值对 | 避免硬编码 |
| 支持回退 | 默认语言兜底 |
| 懒加载 | 按需加载语言包 |`,L=`---
title: "Node.js 能做什么"
category: "JavaScript"
tags: ["nodejs", "backend", "server"]
difficulty: "中等"
---

# Node.js 能做什么

## 核心能力

### 1. 服务器端开发
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

### 2. API 开发
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json([{ name: 'Alice' }, { name: 'Bob' }]);
});

app.listen(3000);
\`\`\`

### 3. 命令行工具
\`\`\`javascript
#!/usr/bin/env node

console.log('Hello CLI');
\`\`\`

### 4. 文件处理
\`\`\`javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data);
});
\`\`\`

### 5. 数据库操作
\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
\`\`\`

### 6. 实时通信
\`\`\`javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
\`\`\`

## 应用场景

| 场景 | 技术栈 |
|------|--------|
| Web 服务 | Express, Koa |
| API 网关 | Fastify |
| 实时通信 | Socket.io |
| 微服务 | NestJS |
| 构建工具 | Webpack, Vite |
| 爬虫 | Puppeteer |

## 优势

- 事件驱动
- 非阻塞 I/O
- 单线程但高并发
- 与前端共享代码
- 丰富的 npm 生态`,$=`---
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

\`\`\`javascript
// 旧方式
Object.defineProperty(obj, 'prop', desc);

// 新方式
Reflect.defineProperty(obj, 'prop', desc);
\`\`\`

### 2. 函数式调用
将操作符转为函数调用：

\`\`\`javascript
// 操作符方式
'key' in obj;
delete obj.key;

// 函数方式
Reflect.has(obj, 'key');
Reflect.deleteProperty(obj, 'key');
\`\`\`

### 3. 更合理的返回值
\`\`\`javascript
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
\`\`\`

## 常用方法

### 1. Reflect.get(target, propertyKey[, receiver])
\`\`\`javascript
const obj = { name: 'Alice' };
console.log(Reflect.get(obj, 'name')); // Alice
\`\`\`

### 2. Reflect.set(target, propertyKey, value[, receiver])
\`\`\`javascript
const obj = {};
Reflect.set(obj, 'name', 'Bob');
console.log(obj.name); // Bob
\`\`\`

### 3. Reflect.has(target, propertyKey)
\`\`\`javascript
const obj = { name: 'Alice' };
console.log(Reflect.has(obj, 'name')); // true
\`\`\`

### 4. Reflect.deleteProperty(target, propertyKey)
\`\`\`javascript
const obj = { name: 'Alice' };
Reflect.deleteProperty(obj, 'name');
console.log(obj.name); // undefined
\`\`\`

### 5. Reflect.defineProperty(target, propertyKey, attributes)
\`\`\`javascript
const obj = {};
Reflect.defineProperty(obj, 'name', {
  value: 'Alice',
  writable: true,
  enumerable: true,
  configurable: true
});
\`\`\`

### 6. Reflect.construct(target, args[, newTarget])
\`\`\`javascript
function Person(name) {
  this.name = name;
}
const person = Reflect.construct(Person, ['Alice']);
console.log(person.name); // Alice
\`\`\`

## 与 Proxy 的配合

\`\`\`javascript
const handler = {
  get(target, prop) {
    console.log(\`获取属性: \${prop}\`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(\`设置属性: \${prop} = \${value}\`);
    return Reflect.set(target, prop, value);
  }
};

const proxy = new Proxy({}, handler);
proxy.name = 'Alice'; // 设置属性: name = Alice
console.log(proxy.name); // 获取属性: name -> Alice
\`\`\`

## 应用场景

- **元编程**: 配合 Proxy 实现对象的拦截和自定义行为
- **框架开发**: 如 Vue 3 的响应式系统使用了 Proxy 和 Reflect
- **代码优化**: 将对象操作统一为函数式调用，便于组合和复用`,z=`---
title: "this 绑定机制"
category: "JavaScript"
tags: ["this", "bind", "call", "apply"]
difficulty: "中等"
---

# this 绑定机制

## 绑定规则

### 1. 默认绑定
\`\`\`javascript
function foo() {
  console.log(this); // window（非严格模式）/ undefined（严格模式）
}
foo();
\`\`\`

### 2. 隐式绑定
\`\`\`javascript
const obj = {
  name: 'Alice',
  greet() {
    console.log(this.name); // Alice
  }
};
obj.greet();
\`\`\`

### 3. 显式绑定

#### call()
\`\`\`javascript
function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}
greet.call({ name: 'Bob' }, 'Hello'); // Hello, Bob
\`\`\`

#### apply()
\`\`\`javascript
function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}
greet.apply({ name: 'Bob' }, ['Hello', '!']); // Hello, Bob!
\`\`\`

#### bind()
\`\`\`javascript
function greet() {
  console.log(\`Hello, \${this.name}\`);
}
const boundGreet = greet.bind({ name: 'Bob' });
boundGreet(); // Hello, Bob
\`\`\`

### 4. new 绑定
\`\`\`javascript
function Person(name) {
  this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // Alice
\`\`\`

## call、apply、bind 的区别

| 方法 | 参数传递 | 返回值 | 执行时机 |
|------|----------|--------|----------|
| call | 逐个传递 | 函数执行结果 | 立即执行 |
| apply | 数组传递 | 函数执行结果 | 立即执行 |
| bind | 逐个传递 | 新函数 | 延迟执行 |

## 手写 bind

\`\`\`javascript
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}\`);
}
const bound = greet.myBind({ name: 'Bob' }, 'Hello');
bound(); // Hello, Bob
\`\`\`

## 箭头函数的 this

箭头函数没有自己的 this，它会捕获外层作用域的 this：

\`\`\`javascript
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // undefined（外层是全局作用域）
  }
};
obj.greet();
\`\`\``,W=`---
title: "var、let、const 的区别"
category: "JavaScript"
tags: ["var", "let", "const", "scope"]
difficulty: "简单"
---

# var、let、const 的区别

## 作用域

### var - 函数作用域
\`\`\`javascript
function foo() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1，x 可以在 if 外部访问
}
foo();
\`\`\`

### let/const - 块级作用域
\`\`\`javascript
function foo() {
  if (true) {
    let x = 1;
    const y = 2;
  }
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined
}
foo();
\`\`\`

## 变量提升

### var 的变量提升
\`\`\`javascript
console.log(a); // undefined（变量提升，但未初始化）
var a = 1;
\`\`\`

### let/const 的暂时性死区
\`\`\`javascript
console.log(b); // ReferenceError（暂时性死区）
let b = 2;
\`\`\`

## 重复声明

### var 允许重复声明
\`\`\`javascript
var x = 1;
var x = 2; // 不会报错
\`\`\`

### let/const 不允许重复声明
\`\`\`javascript
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared
\`\`\`

## const 的特性

### 不可重新赋值
\`\`\`javascript
const PI = 3.14;
PI = 3.15; // TypeError: Assignment to constant variable
\`\`\`

### 对象属性可修改
\`\`\`javascript
const obj = { name: 'Alice' };
obj.name = 'Bob'; // 可以修改属性
obj = {}; // TypeError: Assignment to constant variable
\`\`\`

## for 循环中的变量

### 使用 var 的问题
\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 输出 3, 3, 3
  }, 0);
}
\`\`\`

### 使用 let 的解决方案
\`\`\`javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 输出 0, 1, 2
  }, 0);
}
\`\`\`

## 总结对比

| 特性 | var | let | const |
|------|-----|-----|-------|
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 有 | 有（暂时性死区） | 有（暂时性死区） |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许 |
| 必须初始化 | 否 | 否 | 是 |

## 最佳实践

- 使用 \`const\` 声明不需要重新赋值的变量
- 使用 \`let\` 声明需要重新赋值的变量
- 避免使用 \`var\``,G=`---
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

\`\`\`javascript
const viewportHeight = container.clientHeight;
const itemHeight = 50;
const visibleCount = Math.ceil(viewportHeight / itemHeight);
\`\`\`

### 2. 计算偏移量

\`\`\`javascript
const scrollTop = container.scrollTop;
const startIndex = Math.floor(scrollTop / itemHeight);
const endIndex = startIndex + visibleCount + 1;
\`\`\`

### 3. 渲染可见元素

\`\`\`javascript
const visibleItems = list.slice(startIndex, endIndex);
const offsetTop = startIndex * itemHeight;
\`\`\`

## 完整实现

\`\`\`javascript
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
    
    this.content.style.height = \`\${this.data.length * this.itemHeight}px\`;
    this.content.style.transform = \`translateY(\${offsetTop}px)\`;
    
    this.content.innerHTML = visibleData.map((item, index) => 
      this.renderItem(item, startIndex + index)
    ).join('');
  }

  updateData(data) {
    this.data = data;
    this.render();
  }
}
\`\`\`

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
- 聊天记录`,q=`---
title: "跨域问题与解决方案"
category: "Network"
tags: ["cors", "cross-origin", "proxy"]
difficulty: "中等"
---

# 跨域问题与解决方案

## 什么是跨域

当浏览器向不同域名、端口或协议的服务器发送请求时，会触发同源策略限制，这就是跨域。

## 同源策略

同源策略要求：
- 协议相同（http/https）
- 域名相同
- 端口相同

## 跨域解决方案

### 1. CORS（跨域资源共享）

**服务端配置**：
\`\`\`javascript
// Node.js / Express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
\`\`\`

**常见响应头**：
- \`Access-Control-Allow-Origin\`: 允许的源
- \`Access-Control-Allow-Methods\`: 允许的方法
- \`Access-Control-Allow-Headers\`: 允许的请求头
- \`Access-Control-Allow-Credentials\`: 是否允许携带凭证

### 2. 代理服务器

**开发环境（webpack devServer）**：
\`\`\`javascript
// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
};
\`\`\`

**生产环境（Nginx）**：
\`\`\`nginx
server {
  listen 80;
  server_name example.com;
  
  location /api/ {
    proxy_pass http://api.example.com/;
  }
}
\`\`\`

### 3. JSONP

\`\`\`javascript
function handleResponse(data) {
  console.log(data);
}

const script = document.createElement('script');
script.src = 'http://api.example.com/data?callback=handleResponse';
document.body.appendChild(script);
\`\`\`
**局限性**：只支持 GET 请求

### 4. WebSocket

\`\`\`javascript
const ws = new WebSocket('ws://api.example.com');
ws.onmessage = (event) => {
  console.log(event.data);
};
\`\`\`

### 5. postMessage

\`\`\`javascript
// 主页面
window.addEventListener('message', (event) => {
  console.log(event.data);
});

// iframe
parent.postMessage('Hello', '*');
\`\`\`

## 跨域方案对比

| 方案 | 适用场景 | 复杂度 |
|------|----------|--------|
| CORS | 前后端分离 | 低 |
| 代理 | 开发环境 | 低 |
| JSONP | 旧浏览器 | 中 |
| WebSocket | 实时通信 | 高 |
| postMessage | 页面间通信 | 中 |

## 最佳实践

- **开发环境**: 使用代理服务器
- **生产环境**: 使用 CORS
- **实时通信**: 使用 WebSocket`,K=`---
title: "HTTP 缓存机制"
category: "Network"
tags: ["http", "cache", "performance"]
difficulty: "中等"
---

# HTTP 缓存机制

## 缓存类型

### 1. 强缓存

#### Expires
\`\`\`http
Expires: Wed, 24 Jun 2026 12:00:00 GMT
\`\`\`
- 指定过期时间
- 受客户端时间影响

#### Cache-Control
\`\`\`http
Cache-Control: max-age=3600, public, no-cache
\`\`\`

常用指令：
- \`max-age\`: 缓存有效期（秒）
- \`public\`: 可被中间缓存代理
- \`private\`: 仅客户端缓存
- \`no-cache\`: 强制验证缓存
- \`no-store\`: 不缓存

### 2. 协商缓存

#### Last-Modified / If-Modified-Since
\`\`\`http
Last-Modified: Wed, 24 Jun 2026 10:00:00 GMT
If-Modified-Since: Wed, 24 Jun 2026 10:00:00 GMT
\`\`\`
- 基于文件修改时间
- 精度为秒

#### ETag / If-None-Match
\`\`\`http
ETag: "abc123"
If-None-Match: "abc123"
\`\`\`
- 基于文件内容哈希
- 精度更高

## 缓存流程

\`\`\`
请求资源
    ↓
检查强缓存（Cache-Control/Expires）
    ↓
[命中] → 返回本地缓存（200）
    ↓
[未命中] → 检查协商缓存（ETag/Last-Modified）
    ↓
[命中] → 返回 304，使用本地缓存
    ↓
[未命中] → 请求服务器，返回新资源（200）
\`\`\`

## 强制缓存失效

### 1. 刷新页面（F5）
- 跳过强缓存，检查协商缓存

### 2. 强制刷新（Ctrl+F5）
- 跳过所有缓存，重新请求

### 3. 设置请求头
\`\`\`javascript
fetch('/api/data', {
  cache: 'no-cache'
});
\`\`\`

## 缓存策略

### 静态资源
\`\`\`http
Cache-Control: max-age=31536000, immutable
\`\`\`

### API 接口
\`\`\`http
Cache-Control: no-cache
ETag: "abc123"
\`\`\`

### 变化频繁的资源
\`\`\`http
Cache-Control: no-cache
\`\`\`

## 最佳实践

1. **静态资源**: 设置长缓存时间 + 版本号
2. **API**: 使用协商缓存
3. **敏感数据**: 使用 \`no-store\`
4. **CDN**: 设置合理的缓存时间`,U=`---
title: "HTTP 协议详解"
category: "Network"
tags: ["http", "protocol", "web"]
difficulty: "中等"
---

# HTTP 协议详解

## HTTP 概述

HTTP（HyperText Transfer Protocol）是一种基于 TCP/IP 的应用层协议，用于在 Web 浏览器和服务器之间传输数据。

## HTTP 请求方法

| 方法 | 用途 | 幂等性 |
|------|------|--------|
| GET | 获取资源 | 是 |
| POST | 提交数据 | 否 |
| PUT | 更新资源 | 是 |
| DELETE | 删除资源 | 是 |
| HEAD | 获取响应头 | 是 |
| OPTIONS | 获取支持的方法 | 是 |

## HTTP 状态码

### 1xx - 信息响应
- \`100 Continue\`: 继续发送请求体

### 2xx - 成功
- \`200 OK\`: 请求成功
- \`201 Created\`: 资源创建成功
- \`204 No Content\`: 无内容

### 3xx - 重定向
- \`301 Moved Permanently\`: 永久重定向
- \`302 Found\`: 临时重定向
- \`304 Not Modified\`: 未修改（使用缓存）

### 4xx - 客户端错误
- \`400 Bad Request\`: 请求错误
- \`401 Unauthorized\`: 未授权
- \`403 Forbidden\`: 禁止访问
- \`404 Not Found\`: 资源未找到

### 5xx - 服务器错误
- \`500 Internal Server Error\`: 服务器错误
- \`502 Bad Gateway\`: 网关错误
- \`503 Service Unavailable\`: 服务不可用

## HTTP 缓存

### 强缓存
- \`Expires\`: 指定过期时间
- \`Cache-Control\`: 更灵活的缓存控制

\`\`\`http
Cache-Control: max-age=3600, public
\`\`\`

### 协商缓存
- \`Last-Modified\`: 最后修改时间
- \`ETag\`: 实体标签

## HTTP/2 特性

- **多路复用**: 一个连接多个请求
- **头部压缩**: HPACK 算法
- **服务器推送**: 主动推送资源
- **优先级**: 请求优先级控制`,Y=`---
title: "MCP 原理"
category: "Network"
tags: ["mcp", "tcp", "protocol"]
difficulty: "中等"
---

# MCP 原理

## 什么是 MCP

MCP（Master Control Program）是 TCP/IP 协议栈中的核心组件，负责管理网络连接和数据传输。

## TCP 三次握手

\`\`\`
客户端          服务器
  |                |
  |----SYN------->|
  |                |
  |<---SYN+ACK----|
  |                |
  |----ACK------->|
  |                |
  连接建立
\`\`\`

## TCP 四次挥手

\`\`\`
客户端          服务器
  |                |
  |----FIN------->|
  |                |
  |<---ACK--------|
  |                |
  |<---FIN--------|
  |                |
  |----ACK------->|
  |                |
  连接关闭
\`\`\`

## MCP 核心功能

### 1. 连接管理
- 建立连接（三次握手）
- 断开连接（四次挥手）
- 连接复用

### 2. 数据传输
- 分段与重组
- 可靠传输（重传机制）
- 流量控制

### 3. 拥塞控制
- 慢启动
- 拥塞避免
- 快速重传/恢复

## 状态机

\`\`\`
LISTEN -> SYN_RCVD -> ESTABLISHED
                          |
                    FIN_WAIT_1 -> FIN_WAIT_2 -> TIME_WAIT -> CLOSED
                          |
                    CLOSING -> LAST_ACK -> CLOSED
\`\`\`

## 关键参数

- **MSS**: 最大分段大小
- **MTU**: 最大传输单元
- **TTL**: 生存时间
- **窗口大小**: 流量控制`,Q=`---
title: "SSE 与轮询"
category: "Network"
tags: ["sse", "polling", "long-polling"]
difficulty: "中等"
---

# SSE 与轮询

## SSE（Server-Sent Events）

### 什么是 SSE
SSE 是一种服务器向客户端推送数据的技术，基于 HTTP 协议。

### SSE 是长连接
\`\`\`javascript
// 客户端
const eventSource = new EventSource('/api/stream');

eventSource.onmessage = (event) => {
  console.log(event.data);
};

// 服务端（Node.js）
app.get('/api/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  setInterval(() => {
    res.write(\`data: \${JSON.stringify({ time: new Date() })}\\n\\n\`);
  }, 1000);
});
\`\`\`

## 轮询

### 短轮询
\`\`\`javascript
function shortPoll() {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setTimeout(shortPoll, 1000);
    });
}
\`\`\`

### 长轮询
\`\`\`javascript
function longPoll() {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      longPoll();
    });
}
\`\`\`

## SSE 与轮询对比

| 特性 | SSE | 短轮询 | 长轮询 |
|------|-----|--------|--------|
| 连接方式 | 长连接 | 短连接 | 长连接 |
| 实时性 | 高 | 低 | 中 |
| 服务器压力 | 低 | 高 | 中 |
| 浏览器支持 | 良好 | 完美 | 完美 |
| 双向通信 | 否 | 否 | 否 |

## 使用场景

| 场景 | 推荐方式 |
|------|----------|
| 实时通知 | SSE |
| 简单数据更新 | 短轮询 |
| 低延迟要求 | 长轮询 |
| 双向通信 | WebSocket |`,Z=`---
title: "XSS 攻击与防护"
category: "Network"
tags: ["xss", "security", "attack"]
difficulty: "中等"
---

# XSS 攻击与防护

## 什么是 XSS

XSS（Cross-Site Scripting）是一种注入攻击，攻击者在网页中注入恶意脚本，当用户访问时脚本会在浏览器中执行。

## XSS 类型

### 1. 存储型 XSS

攻击脚本存储在服务器端数据库中：

\`\`\`javascript
// 用户提交评论
<input type="text" name="comment" value="<script>alert('XSS')<\/script>">

// 服务器存储后，其他用户访问时执行
\`\`\`

### 2. 反射型 XSS

攻击脚本通过 URL 参数传递：

\`\`\`javascript
// URL: http://example.com/search?keyword=<script>alert('XSS')<\/script>

// 服务器直接渲染 URL 参数
<div>搜索结果: <script>alert('XSS')<\/script></div>
\`\`\`

### 3. DOM 型 XSS

攻击脚本通过 DOM 操作执行：

\`\`\`javascript
// JavaScript 直接使用 URL 参数
const keyword = new URLSearchParams(location.search).get('keyword');
document.getElementById('result').innerHTML = keyword;
\`\`\`

## XSS 防护

### 1. 输入过滤

\`\`\`javascript
function sanitize(input) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
\`\`\`

### 2. 输出转义

\`\`\`javascript
// 使用 textContent 代替 innerHTML
document.getElementById('result').textContent = userInput;

// React 自动转义
<div>{userInput}</div>

// Vue 自动转义
<span>{{ userInput }}</span>
\`\`\`

### 3. CSP（内容安全策略）

\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic'
\`\`\`

### 4. 设置 HttpOnly Cookie

\`\`\`javascript
document.cookie = 'session=abc123; HttpOnly';
\`\`\`

### 5. 使用 DOMPurify

\`\`\`javascript
import DOMPurify from 'dompurify';

const clean = DOMPurify.sanitize(userInput);
document.getElementById('content').innerHTML = clean;
\`\`\`

## XSS 防护对比

| 方法 | 适用场景 | 安全性 |
|------|----------|--------|
| 输入过滤 | 用户输入 | 中 |
| 输出转义 | 页面渲染 | 高 |
| CSP | 全站防护 | 高 |
| HttpOnly | Cookie 保护 | 高 |
| DOMPurify | 富文本内容 | 高 |

## 最佳实践

1. **默认转义**: 使用框架自动转义机制
2. **验证输入**: 对用户输入进行严格验证
3. **设置 CSP**: 配置内容安全策略
4. **使用安全库**: 使用 DOMPurify 等安全库处理富文本`,nn=`---
title: "职业规划回答技巧"
category: "Other"
tags: ["interview", "career", "plan"]
difficulty: "简单"
---

# 职业规划回答技巧

## 回答原则

### 1. 目标明确
\`\`\`
不好：我还没有明确的规划
好：我希望在3年内成长为高级前端工程师
\`\`\`

### 2. 与公司对齐
\`\`\`
不好：我想创业
好：我希望能够在贵公司的平台上实现职业目标
\`\`\`

### 3. 分阶段规划
\`\`\`
不好：我想做技术总监
好：短期提升技术能力，中期带团队，长期做架构
\`\`\`

## 回答模板

\`\`\`
我的职业规划分为三个阶段：

短期（1-2年）：
深入学习XX技术，提升技术深度，成为团队的技术骨干。

中期（3-5年）：
积累项目管理经验，带领团队完成更大的项目，
成长为技术负责人。

长期（5年以上）：
在技术领域有更深的造诣，能够引领技术方向，
成为行业内的技术专家。

我了解到贵公司在XX领域有很强的技术实力，
希望能够加入团队，共同成长。
\`\`\`

## 常见变体

### 应届毕业生
\`\`\`
作为应届毕业生，我希望能够：

1. 第一阶段（1年）：打好基础，熟悉公司业务和技术栈
2. 第二阶段（2-3年）：独立负责模块开发，成为核心开发
3. 第三阶段（3年以上）：参与技术决策，推动技术创新

贵公司的XX技术方向正是我感兴趣的，
希望能够在这里实现我的职业目标。
\`\`\`

### 转行者
\`\`\`
我之前从事XX行业，现在希望转型技术领域。

短期（1年）：快速学习，补齐技术短板
中期（2-3年）：成为合格的前端工程师
长期（3年以上）：在技术领域深耕，实现职业价值

我相信我的XX背景能够为团队带来独特的视角。
\`\`\`

## 注意事项

| 禁忌 | 推荐 |
|------|------|
| 目标模糊 | 目标明确可量化 |
| 频繁跳槽 | 稳定性和成长并重 |
| 薪资导向 | 发展导向 |
| 不切实际 | 合理可行 |`,en=`---
title: "Git 常见操作"
category: "Other"
tags: ["git", "version-control", "workflow"]
difficulty: "简单"
---

# Git 常见操作

## 基础操作

### 1. 初始化仓库
\`\`\`bash
git init
git clone <url>
\`\`\`

### 2. 添加文件
\`\`\`bash
git add <file>
git add .
git add -A
\`\`\`

### 3. 提交
\`\`\`bash
git commit -m "commit message"
git commit -am "commit message"
git commit --amend
\`\`\`

### 4. 推送
\`\`\`bash
git push origin main
git push -u origin main
\`\`\`

## 分支操作

### 1. 创建分支
\`\`\`bash
git branch <branch-name>
git checkout -b <branch-name>
git switch -c <branch-name>
\`\`\`

### 2. 切换分支
\`\`\`bash
git checkout <branch-name>
git switch <branch-name>
\`\`\`

### 3. 合并分支
\`\`\`bash
git merge <branch-name>
git rebase <branch-name>
\`\`\`

### 4. 删除分支
\`\`\`bash
git branch -d <branch-name>
git branch -D <branch-name>
\`\`\`

## 撤销操作

### 1. 撤销工作区修改
\`\`\`bash
git checkout -- <file>
git restore <file>
\`\`\`

### 2. 撤销暂存区
\`\`\`bash
git reset HEAD <file>
git restore --staged <file>
\`\`\`

### 3. 撤销提交
\`\`\`bash
git reset --soft HEAD^
git reset --mixed HEAD^
git reset --hard HEAD^
\`\`\`

## 查看历史

\`\`\`bash
git log
git log --oneline
git log --graph
git log --all
git blame <file>
\`\`\`

## 远程操作

\`\`\`bash
git remote -v
git remote add origin <url>
git fetch origin
git pull origin main
git push origin --delete <branch-name>
\`\`\`

## 常见问题

### 1. 冲突解决
\`\`\`bash
# 查看冲突文件
git status

# 手动解决冲突后
git add <file>
git commit
\`\`\`

### 2. 丢弃本地修改
\`\`\`bash
git checkout .
git clean -fd
\`\`\`

### 3. 回退到指定版本
\`\`\`bash
git reset --hard <commit-hash>
git push -f origin main
\`\`\`

## 工作流

### Git Flow
\`\`\`bash
git checkout develop
git checkout -b feature/xxx
# 开发完成
git checkout develop
git merge feature/xxx
git branch -d feature/xxx
\`\`\`

### GitHub Flow
\`\`\`bash
git checkout -b feature/xxx
# 开发完成
git push origin feature/xxx
# 创建 Pull Request
# 合并后删除分支
\`\`\``,tn=`---
title: "离职原因回答技巧"
category: "Other"
tags: ["interview", "resign", "behavioral"]
difficulty: "简单"
---

# 离职原因回答技巧

## 回答原则

### 1. 诚实但不抱怨
\`\`\`
不好：公司管理混乱，领导能力差
好：希望寻求更大的发展空间
\`\`\`

### 2. 聚焦未来而非过去
\`\`\`
不好：前公司工资太低
好：希望在更有挑战性的环境中成长
\`\`\`

### 3. 保持积极态度
\`\`\`
不好：团队氛围很差
好：希望加入更有活力的团队
\`\`\`

## 常见离职原因

### 1. 职业发展
\`\`\`
我在当前公司已经工作了X年，学到了很多，但感觉发展空间有限。
我希望能够接触到更多新技术和新项目，提升自己的技术能力。
\`\`\`

### 2. 寻求挑战
\`\`\`
当前工作内容比较稳定，我希望能够接受更大的挑战，
在更有创新性的项目中发挥自己的价值。
\`\`\`

### 3. 公司搬迁
\`\`\`
由于公司搬迁到了距离我居住地较远的地方，
通勤时间大大增加，所以考虑换一份工作。
\`\`\`

### 4. 团队变动
\`\`\`
原来的团队核心成员陆续离开，
我希望能够加入一个更稳定的团队。
\`\`\`

### 5. 个人原因
\`\`\`
由于家庭原因，我需要换一个城市发展，
所以不得不离开当前公司。
\`\`\`

## 回答模板

\`\`\`
我在当前公司工作了X年，期间参与了XX项目，
负责XX工作，学到了很多宝贵的经验。

但考虑到职业发展，我希望能够XX，
而贵公司在XX方面正好符合我的期望，
所以希望能够加入贵公司。
\`\`\`

## 注意事项

| 禁忌 | 推荐 |
|------|------|
| 抱怨前公司 | 感谢前公司的培养 |
| 说前同事坏话 | 强调团队合作的重要性 |
| 只谈薪资 | 强调发展空间 |
| 过于负面 | 保持积极乐观 |`,on=`---
title: "自我介绍回答技巧"
category: "Other"
tags: ["interview", "self-intro", "behavioral"]
difficulty: "简单"
---

# 自我介绍回答技巧

## 经典框架

### 1. 三段式结构
\`\`\`
1. 基础信息：姓名、背景、年限
2. 核心亮点：项目经验、技术能力、成就
3. 求职动机：为什么来这家公司、职业规划
\`\`\`

### 2. STAR 法则
- **Situation**: 背景情况
- **Task**: 任务目标
- **Action**: 行动措施
- **Result**: 结果成果

## 回答示例

\`\`\`
面试官您好，我叫张三，毕业于XX大学计算机专业，
有3年前端开发经验，主要技术栈是React和TypeScript。

在上一家公司，我负责了XX电商平台的前端重构项目，
带领3人团队，从0到1搭建了基于微前端架构的系统，
将首屏加载时间优化了40%，用户体验评分提升了30%。

我对贵公司在XX领域的技术方向很感兴趣，
希望能够加入团队，在XX技术方向上继续深耕，
同时为公司创造价值。
\`\`\`

## 注意事项

### 避免的问题
- ❌ 流水账式叙述，没有重点
- ❌ 内容过于冗长，超过2分钟
- ❌ 只说职责，不说成果
- ❌ 信息虚假或夸大

### 加分项
- ✅ 量化成果（数据说话）
- ✅ 突出技术深度和广度
- ✅ 展示学习能力和主动性
- ✅ 表达对公司的了解和兴趣

## 常见变体

### 应届毕业生
\`\`\`
面试官您好，我叫李四，今年毕业于XX大学。

在校期间，我参与了XX开源项目的开发，
负责前端模块，获得了导师的好评。

我通过自学掌握了React、Vue等主流框架，
并有XX个个人项目经验，包括XX和XX。

我希望能够加入一家技术氛围浓厚的公司，
从基础做起，不断提升自己的技术能力。
\`\`\`

### 转行者
\`\`\`
面试官您好，我叫王五，之前从事XX行业，
有XX年经验，现在希望转型前端开发。

过去一年，我系统学习了HTML、CSS、JavaScript，
完成了XX个实战项目，包括XX和XX。

我具备XX行业的业务理解能力，
同时拥有扎实的技术基础和强烈的学习热情。

希望能够加入贵公司，发挥我的综合优势。
\`\`\``,an=`---
title: "Vue 组件间通信"
category: "Vue"
tags: ["component", "communication", "props"]
difficulty: "中等"
---

# Vue 组件间通信

## 父子组件通信

### 1. props / emit

**父组件传子组件（props）**：
\`\`\`javascript
// Parent.vue
<Child :name="parentName" :age="25" />

// Child.vue
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 18
    }
  }
};
\`\`\`

**子组件传父组件（emit）**：
\`\`\`javascript
// Child.vue
this.$emit('update:name', 'New Name');
this.$emit('custom-event', payload);

// Parent.vue
<Child @update:name="handleUpdate" @custom-event="handleCustom" />
\`\`\`

### 2. v-model

\`\`\`javascript
// Child.vue
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
};

// Parent.vue
<Child v-model="parentValue" />
\`\`\`

## 兄弟组件通信

### 1. 事件总线（Event Bus）

\`\`\`javascript
// bus.js
import Vue from 'vue';
export const bus = new Vue();

// ComponentA.vue
bus.$emit('message', 'Hello');

// ComponentB.vue
bus.$on('message', (msg) => {
  console.log(msg);
});
\`\`\`

### 2. 通过父组件中转

\`\`\`javascript
// Parent.vue
<ChildA @update="handleUpdate" />
<ChildB :data="sharedData" />

// ChildA.vue
this.$emit('update', data);

// ChildB.vue
props: ['data']
\`\`\`

## 跨层级通信

### 1. provide / inject

\`\`\`javascript
// Parent.vue
export default {
  provide() {
    return {
      theme: 'dark',
      user: this.user
    };
  }
};

// GrandChild.vue
export default {
  inject: ['theme', 'user']
};
\`\`\`

### 2. Vuex / Pinia

\`\`\`javascript
// store.js
import { createStore } from 'vuex';
export default createStore({
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

// Component.vue
this.$store.commit('increment');
console.log(this.$store.state.count);
\`\`\`

## 通信方式对比

| 方式 | 适用场景 | 复杂度 |
|------|----------|--------|
| props / emit | 父子组件 | 低 |
| v-model | 表单双向绑定 | 低 |
| Event Bus | 兄弟组件 | 中 |
| provide / inject | 跨层级 | 中 |
| Vuex / Pinia | 全局状态 | 高 |

## 最佳实践

- **父子通信**: 使用 \`props\` 和 \`emit\`
- **兄弟通信**: 使用 Event Bus 或父组件中转
- **跨层级**: 使用 \`provide/inject\` 或状态管理
- **全局状态**: 使用 Pinia`,rn=`---
title: "Vue3 响应式原理"
category: "Vue"
tags: ["reactivity", "proxy", "effect"]
difficulty: "高"
---

# Vue3 响应式原理

## 核心概念

### 1. reactive
创建响应式对象：

\`\`\`javascript
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'Alice'
});

state.count++; // 触发更新
\`\`\`

### 2. ref
创建响应式基本类型：

\`\`\`javascript
import { ref } from 'vue';

const count = ref(0);
count.value++; // 触发更新
\`\`\`

### 3. computed
创建计算属性：

\`\`\`javascript
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
\`\`\`

### 4. watch
监听响应式数据变化：

\`\`\`javascript
import { ref, watch } from 'vue';

const count = ref(0);
watch(count, (newValue, oldValue) => {
  console.log(\`count changed from \${oldValue} to \${newValue}\`);
});
\`\`\`

### 5. watchEffect
自动追踪依赖并执行副作用：

\`\`\`javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);
watchEffect(() => {
  console.log(\`count is \${count.value}\`);
});
\`\`\`

## 实现原理

### track - 依赖收集
\`\`\`javascript
const targetMap = new WeakMap();

function track(target, key) {
  const effect = activeEffect;
  if (effect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      depsMap = new Map();
      targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
      deps = new Set();
      depsMap.set(key, deps);
    }
    deps.add(effect);
    effect.deps.push(deps);
  }
}
\`\`\`

### trigger - 触发更新
\`\`\`javascript
function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const deps = depsMap.get(key);
  if (deps) {
    const effects = [...deps];
    effects.forEach(effect => {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect();
      }
    });
  }
}
\`\`\`

## ref 与 reactive 的区别

| 特性 | ref | reactive |
|------|-----|----------|
| 适用类型 | 基本类型、对象 | 对象 |
| 访问方式 | \`.value\` | 直接访问 |
| 深层响应式 | 需要 \`ref({})\` | 自动深层 |
| 解构赋值 | 不会丢失响应式 | 会丢失响应式 |

## 最佳实践

- **基本类型**: 使用 \`ref\`
- **对象类型**: 使用 \`reactive\`
- **复杂计算**: 使用 \`computed\`
- **数据监听**: 使用 \`watch\` 或 \`watchEffect\``,sn=`---
title: "Vue Mixins 的使用与替代方案"
category: "Vue"
tags: ["mixins", "composition", "reuse"]
difficulty: "中等"
---

# Vue Mixins 的使用与替代方案

## 什么是 Mixins

Mixins 是一种复用组件选项的方式，可以将可复用的逻辑提取到独立的对象中。

## 基本用法

\`\`\`javascript
// myMixin.js
export const myMixin = {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    console.log('mixin mounted');
  }
};

// Component.vue
import { myMixin } from './myMixin';
export default {
  mixins: [myMixin],
  mounted() {
    console.log('component mounted');
  }
};
\`\`\`

## Mixins 的问题

### 1. 命名冲突
\`\`\`javascript
// MixinA
data() {
  return { name: 'MixinA' };
}

// MixinB  
data() {
  return { name: 'MixinB' };
}

// Component - name 会被覆盖
mixins: [MixinA, MixinB]
\`\`\`

### 2. 来源不清晰
\`\`\`javascript
// 无法区分 count 来自哪里
this.count++;
\`\`\`

### 3. 隐式依赖
\`\`\`javascript
// Mixin 依赖组件中定义的属性
methods: {
  save() {
    // 假设组件有 api 方法
    this.api.save(this.data);
  }
}
\`\`\`

## Composition API 替代方案

\`\`\`javascript
// useCounter.js
import { ref } from 'vue';

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };
  
  const decrement = () => {
    count.value--;
  };
  
  return {
    count,
    increment,
    decrement
  };
}

// Component.vue
import { useCounter } from './useCounter';

export default {
  setup() {
    const { count, increment, decrement } = useCounter(0);
    
    return {
      count,
      increment,
      decrement
    };
  }
};
\`\`\`

## Mixins vs Composition API

| 特性 | Mixins | Composition API |
|------|--------|-----------------|
| 命名冲突 | 容易冲突 | 显式命名，无冲突 |
| 来源追溯 | 困难 | 清晰可追溯 |
| 依赖关系 | 隐式依赖 | 显式依赖 |
| 代码组织 | 按选项组织 | 按功能组织 |
| TypeScript | 支持有限 | 原生支持 |

## 最佳实践

- **新项目**: 使用 Composition API
- **旧项目**: 逐步迁移到 Composition API
- **简单逻辑**: 使用 Mixins（但不推荐）
- **复杂逻辑**: 使用 Composition API 的 composables`,cn=`---
title: "Vue2 与 Vue3 的区别"
category: "Vue"
tags: ["vue2", "vue3", "comparison"]
difficulty: "中等"
---

# Vue2 与 Vue3 的区别

## 响应式原理

### Vue2 - Object.defineProperty
\`\`\`javascript
function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    get() {
      Dep.target && dep.add(Dep.target);
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        value = newValue;
        dep.notify();
      }
    }
  });
}
\`\`\`
**局限性**：
- 无法检测对象新增属性
- 无法检测数组索引和长度变化
- 需要使用 \`Vue.set()\` 或 \`this.$set()\`

### Vue3 - Proxy
\`\`\`javascript
function reactive(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      if (isObject(result)) {
        return reactive(result);
      }
      return result;
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return result;
    }
  });
}
\`\`\`
**优势**：
- 可以检测对象新增属性
- 可以检测数组索引和长度变化
- 性能更好

## 组合式 API

### Vue2 - Options API
\`\`\`javascript
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  }
};
\`\`\`

### Vue3 - Composition API
\`\`\`javascript
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    
    const increment = () => {
      count.value++;
    };
    
    const doubleCount = computed(() => count.value * 2);
    
    return {
      count,
      increment,
      doubleCount
    };
  }
};
\`\`\`

## 其他区别

| 特性 | Vue2 | Vue3 |
|------|------|------|
| 生命周期 | beforeCreate, created | setup() |
| 模板根节点 | 只能有一个根节点 | 支持多个根节点 |
| 碎片 | 需要额外包裹 | 原生支持 |
| 响应式 | Object.defineProperty | Proxy |
| 性能 | 中等 | 更好 |
| TypeScript | 支持有限 | 原生支持 |

## 迁移建议

1. 逐步迁移，使用 \`@vue/composition-api\` 兼容包
2. 优先迁移状态管理和复杂逻辑
3. 注意生命周期钩子的变化
4. 更新第三方依赖库`,ln=`---
title: "面试题目录"
description: "前端面试知识库目录，方便查找和定位"
version: "1.0.0"
updatedAt: "2026-06-24"
---

# 面试题目录

欢迎来到前端面试知识库！本目录提供完整的知识体系导航，帮助你快速定位所需内容。

---

## 目录结构

\`\`\`
knowledgeBase/
├── JavaScript/    # JavaScript/TypeScript 核心知识
├── CSS/           # CSS/样式相关知识
├── Network/       # 计算机网络相关知识
├── Build/         # 构建打包相关知识
├── React/         # React 框架相关知识
├── Vue/           # Vue 框架相关知识
├── SystemDesign/  # 系统设计相关知识
├── Algorithms/    # 算法与数据结构
├── Architecture/  # 架构设计相关知识
├── Browser/       # 浏览器原理相关知识
├── Security/      # 安全相关知识
├── Performance/   # 性能优化相关知识
├── AI/            # AI 相关知识（大模型、Prompt Engineering）
└── Other/         # 主观题（自我介绍、职业规划等）
\`\`\`

---

## 分类导航

### JavaScript/TypeScript

| 文档 | 难度 | 标签 |
|------|------|------|
| [闭包的概念与应用](JavaScript/closure.md) | 中等 | closure, scope, lexical |
| [深拷贝与浅拷贝](JavaScript/deep-shallow-copy.md) | 中等 | copy, deep, shallow |
| [this 绑定机制](JavaScript/this-binding.md) | 中等 | this, bind, call, apply |
| [var、let、const 的区别](JavaScript/var-let-const.md) | 简单 | var, let, const, scope |
| [Reflect 对象详解](JavaScript/reflect.md) | 中等 | reflect, proxy, meta-programming |
| [防抖与节流](JavaScript/debounce-throttle.md) | 中等 | debounce, throttle, optimization |
| [事件循环与异步机制](JavaScript/event-loop.md) | 中等 | event-loop, async, microtask, macrotask |
| [虚拟列表实现](JavaScript/virtual-list.md) | 高 | virtual-list, performance, scroll |
| [Node.js 能做什么](JavaScript/nodejs-capabilities.md) | 中等 | nodejs, backend, server |
| [前端国际化实现](JavaScript/i18n.md) | 中等 | i18n, internationalization, localization |

### CSS

| 文档 | 难度 | 标签 |
|------|------|------|
| [Flexbox 布局详解](CSS/flexbox-layout.md) | 简单 | flexbox, layout, responsive |
| [BFC 块级格式化上下文](CSS/bfc.md) | 中等 | bfc, layout, float |
| [重排与重绘](CSS/reflow-repaint.md) | 中等 | reflow, repaint, performance |
| [隐藏元素的方式](CSS/hide-element.md) | 简单 | hide, visibility, display |
| [元素居中的方式](CSS/element-centering.md) | 简单 | centering, layout, flexbox |

### Network

| 文档 | 难度 | 标签 |
|------|------|------|
| [HTTP 协议详解](Network/http-protocol.md) | 中等 | http, protocol, web |
| [HTTP 缓存机制](Network/http-cache.md) | 中等 | http, cache, performance |
| [跨域问题与解决方案](Network/cors.md) | 中等 | cors, cross-origin, proxy |
| [XSS 攻击与防护](Network/xss-attack.md) | 中等 | xss, security, attack |
| [SSE 与轮询](Network/sse-polling.md) | 中等 | sse, polling, long-polling |
| [MCP 原理](Network/mcp-principle.md) | 中等 | mcp, tcp, protocol |

### Build

| 文档 | 难度 | 标签 |
|------|------|------|
| [Webpack Chunk 配置](Build/webpack-chunk.md) | 中等 | webpack, chunk, splitting |
| [前端打包优化](Build/build-optimization.md) | 中等 | optimization, bundle, performance |

### React

| 文档 | 难度 | 标签 |
|------|------|------|

### Vue

| 文档 | 难度 | 标签 |
|------|------|------|
| [Vue2 与 Vue3 的区别](Vue/vue2-vs-vue3.md) | 中等 | vue2, vue3, comparison |
| [Vue3 响应式原理](Vue/reactivity-principle.md) | 高 | reactivity, proxy, effect |
| [Vue 组件间通信](Vue/component-communication.md) | 中等 | component, communication, props |
| [Vue Mixins 的使用与替代方案](Vue/vue-mixins.md) | 中等 | mixins, composition, reuse |

### SystemDesign

| 文档 | 难度 | 标签 |
|------|------|------|

### Algorithms

| 文档 | 难度 | 标签 |
|------|------|------|

### Architecture

| 文档 | 难度 | 标签 |
|------|------|------|

### Browser

| 文档 | 难度 | 标签 |
|------|------|------|
| [输入 URL 后的流程](Browser/url-lifecycle.md) | 中等 | url, browser, network |

### Security

| 文档 | 难度 | 标签 |
|------|------|------|

### Performance

| 文档 | 难度 | 标签 |
|------|------|------|

### AI

| 文档 | 难度 | 标签 |
|------|------|------|
| [Prompt Engineering 提示词工程](AI/prompt-engineering.md) | 中等 | prompt, llm, chatgpt |

### Other

| 文档 | 难度 | 标签 |
|------|------|------|
| [自我介绍回答技巧](Other/self-introduction.md) | 简单 | interview, self-intro, behavioral |
| [离职原因回答技巧](Other/resign-reasons.md) | 简单 | interview, resign, behavioral |
| [职业规划回答技巧](Other/career-plan.md) | 简单 | interview, career, plan |
| [Git 常见操作](Other/git-operations.md) | 简单 | git, version-control, workflow |

---

## 难度等级说明

- **简单**: 基础概念，适合入门和复习
- **中等**: 核心知识点，面试高频题
- **高**: 进阶内容，考察深度和广度

---

## 更新日志

- **2026-06-24**: 识别 todo/images 下的图片，创建大量知识库文档，包括 JavaScript、CSS、Vue、Network、Build、Other 等分类
`,pn=/^---\s*\n([\s\S]*?)\n---\s*\n/;function un(n){const e={};return n.split(`
`).forEach(o=>{const s=o.match(/^(\w+):\s*(.+)$/);if(s){const a=s[1];let i=s[2].trim();i.startsWith('"')&&i.endsWith('"')?i=i.slice(1,-1):i.startsWith("[")&&i.endsWith("]")&&(i=JSON.parse(i)),e[a]=i}}),e}function dn(n){const e=n.match(pn);let r={title:"",category:"",tags:[],difficulty:"medium",filePath:"",lastModified:""},o=n;if(e){const a=un(e[1]);r={title:a.title||"",category:a.category||"",tags:a.tags||[],difficulty:a.difficulty||"medium",filePath:"",lastModified:""},o=n.slice(e[0].length)}const s=mn(o);return{meta:r,content:o,toc:s}}function mn(n){const e=/^(#{2,3})\s+(.+)$/gm,r=[];let o;for(;(o=e.exec(n))!==null;){const s=o[1].length,a=o[2].trim(),i=a.toLowerCase().replace(/[^a-z0-9]+/g,"-");r.push({id:i,text:a,level:s})}return r}function gn(n){const e=n.split(`
`),r=[];let o="";return e.forEach(s=>{const a=s.match(/^###\s+(.+)$/);if(a){o=a[1];return}const i=s.match(/^\|\s*\[(.+?)\]\((.+?)\)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/);if(i){const u=i[1],d=i[2],l=i[3].trim(),h={简单:"easy",中等:"medium",高:"hard"}[l]||"medium",v=i[4].split(",").map(t=>t.trim()).filter(Boolean);r.push({title:u,category:o,tags:v,difficulty:h,filePath:d,lastModified:""})}}),r}function fn(n,e,r){if(!e.trim())return[];const o=e.toLowerCase(),s=[];return n.forEach(a=>{let i=0;const u=[];a.title.toLowerCase().includes(o)&&(i+=50,u.push({text:a.title,highlight:S(a.title,o)})),a.tags.forEach(l=>{l.toLowerCase().includes(o)&&(i+=20,u.push({text:l,highlight:S(l,o)}))});const d=r.get(a.filePath);if(d){const l=d.toLowerCase();if(l.includes(o)){i+=30;const m=l.indexOf(o),h=Math.max(0,m-30),v=Math.min(d.length,m+o.length+30),t=d.slice(h,v);u.push({text:t,highlight:S(t,o)})}}i>0&&s.push({document:a,matches:u,score:i})}),s.sort((a,i)=>i.score-a.score)}function S(n,e){const r=new RegExp(`(${e})`,"gi");return n.replace(r,'<mark class="bg-accent-500 text-white px-0.5 rounded">$1</mark>')}const w="knowledge_base_favorites";function b(){try{const n=localStorage.getItem(w);return n?JSON.parse(n):[]}catch{return[]}}function hn(n){const e=b();e.some(o=>o.filePath===n.filePath)||(e.push(n),localStorage.setItem(w,JSON.stringify(e)))}function vn(n){const e=b().filter(r=>r.filePath!==n);localStorage.setItem(w,JSON.stringify(e))}function k(n){return b().some(e=>e.filePath===n)}const xn=_("knowledge",()=>{const n=f([]),e=f(new Map),r=f(null),o=f(null),s=f([]),a=f(!1),i=C(()=>{const t=new Map;n.value.forEach(c=>{t.set(c.category,(t.get(c.category)||0)+1)});const p={"JavaScript/TypeScript":"Code",CSS:"Palette",Vue:"Box",React:"Atom",Network:"Globe",Browser:"Monitor",Build:"Package",Other:"FileQuestion",AI:"Brain",Security:"Shield",Performance:"Zap",SystemDesign:"Network",Algorithms:"Binary",Architecture:"Layers"};return Array.from(t.entries()).map(([c,g])=>({name:c,label:c,icon:p[c]||"FileText",count:g}))}),u=C(()=>{let t=n.value;return r.value&&(t=t.filter(p=>p.category===r.value)),o.value&&(t=t.filter(p=>p.difficulty===o.value)),t.sort((p,c)=>p.title.localeCompare(c.title))});async function d(){a.value=!0;try{const t=Object.assign({"../knowledgeBase/AI/prompt-engineering.md":M,"../knowledgeBase/Browser/url-lifecycle.md":A,"../knowledgeBase/Build/build-optimization.md":B,"../knowledgeBase/Build/webpack-chunk.md":E,"../knowledgeBase/CSS/bfc.md":I,"../knowledgeBase/CSS/element-centering.md":H,"../knowledgeBase/CSS/flexbox-layout.md":O,"../knowledgeBase/CSS/hide-element.md":N,"../knowledgeBase/CSS/reflow-repaint.md":R,"../knowledgeBase/JavaScript/closure.md":V,"../knowledgeBase/JavaScript/debounce-throttle.md":X,"../knowledgeBase/JavaScript/deep-shallow-copy.md":D,"../knowledgeBase/JavaScript/event-loop.md":F,"../knowledgeBase/JavaScript/i18n.md":J,"../knowledgeBase/JavaScript/nodejs-capabilities.md":L,"../knowledgeBase/JavaScript/reflect.md":$,"../knowledgeBase/JavaScript/this-binding.md":z,"../knowledgeBase/JavaScript/var-let-const.md":W,"../knowledgeBase/JavaScript/virtual-list.md":G,"../knowledgeBase/Network/cors.md":q,"../knowledgeBase/Network/http-cache.md":K,"../knowledgeBase/Network/http-protocol.md":U,"../knowledgeBase/Network/mcp-principle.md":Y,"../knowledgeBase/Network/sse-polling.md":Q,"../knowledgeBase/Network/xss-attack.md":Z,"../knowledgeBase/Other/career-plan.md":nn,"../knowledgeBase/Other/git-operations.md":en,"../knowledgeBase/Other/resign-reasons.md":tn,"../knowledgeBase/Other/self-introduction.md":on,"../knowledgeBase/Vue/component-communication.md":an,"../knowledgeBase/Vue/reactivity-principle.md":rn,"../knowledgeBase/Vue/vue-mixins.md":sn,"../knowledgeBase/Vue/vue2-vs-vue3.md":cn,"../knowledgeBase/index.md":ln}),p=t["../knowledgeBase/index.md"]||"";n.value=gn(p),n.value.forEach(c=>{const g=`../knowledgeBase/${c.filePath}`,y=t[g];y?e.value.set(c.filePath,y):e.value.set(c.filePath,"")}),s.value=b()}catch(t){console.error("Failed to load documents:",t)}finally{a.value=!1}}function l(t){const p=e.value.get(t);if(!p)return null;const c=dn(p);c.meta.filePath=t;const g=n.value.find(y=>y.filePath===t);return g&&(c.meta.category=g.category,c.meta.lastModified=g.lastModified),c}function m(t){return fn(n.value,t,e.value)}function h(t){k(t.filePath)?vn(t.filePath):hn(t),s.value=b()}function v(t){return k(t)}return{documents:n,contentMap:e,currentCategory:r,currentDifficulty:o,favorites:s,isLoading:a,categories:i,filteredDocuments:u,loadDocuments:d,getDocumentContent:l,search:m,toggleFavorite:h,isDocFavorite:v}});export{yn as H,T as c,xn as u};
