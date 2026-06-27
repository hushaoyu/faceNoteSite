import{y as _,z as E,j as h,q as P}from"./index-BMlmnkQQ.js";/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O=(n,r)=>({size:t,strokeWidth:e=2,absoluteStrokeWidth:s,color:i,class:o,...d},{attrs:p,slots:u})=>_("svg",{...w,width:t||w.width,height:t||w.height,stroke:i||w.stroke,"stroke-width":s?Number(e)*24/Number(t):e,...p,class:["lucide",`lucide-${I(n)}`],...d},[...r.map(g=>_(...g)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=O("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),H=`---\r
title: "Prompt Engineering 提示词工程"\r
category: "AI"\r
tags: ["prompt", "llm", "chatgpt"]\r
difficulty: "中等"\r
---\r
\r
# Prompt Engineering 提示词工程\r
\r
## 什么是提示词工程\r
\r
提示词工程是指设计和优化输入给大语言模型（LLM）的文本提示，以获得更准确、有用和相关的输出。\r
\r
## 核心原则\r
\r
### 1. 清晰明确\r
\`\`\`\r
不好：写一篇关于网络的文章\r
好：写一篇500字左右的文章，介绍HTTP协议的基本概念和工作原理，面向初级开发者\r
\`\`\`\r
\r
### 2. 结构化输出\r
\`\`\`\r
请按以下格式回答：\r
- 概念：[定义]\r
- 特点：[列出3-5点]\r
- 示例：[代码示例]\r
\`\`\`\r
\r
### 3. 提供上下文\r
\`\`\`\r
假设你是一位资深前端工程师，正在面试一位初级开发者。\r
请解释什么是闭包，并给出一个实际应用场景。\r
\`\`\`\r
\r
### 4. 设置角色\r
\`\`\`\r
请扮演一位资深架构师，解释微服务架构的优缺点。\r
\`\`\`\r
\r
### 5. 分步骤思考\r
\`\`\`\r
请分步思考以下问题：\r
1. 分析问题需求\r
2. 列出可能的解决方案\r
3. 对比各方案的优缺点\r
4. 给出推荐方案\r
\`\`\`\r
\r
## 常用技巧\r
\r
### 1. Few-shot Learning\r
\`\`\`\r
示例1：\r
Q: 2+3=?\r
A: 5\r
\r
示例2：\r
Q: 10*5=?\r
A: 50\r
\r
Q: 7-4=?\r
A:\r
\`\`\`\r
\r
### 2. Chain of Thought\r
\`\`\`\r
请详细解释你的思考过程：\r
问题：如果今天是周一，那么7天后是周几？\r
思考：今天是周一，1天后是周二，2天后是周三...7天后是周一。\r
答案：周一\r
\`\`\`\r
\r
### 3. 约束条件\r
\`\`\`\r
请回答以下问题，要求：\r
- 答案不超过200字\r
- 使用简单易懂的语言\r
- 不要使用技术术语\r
\`\`\`\r
\r
## 常见错误\r
\r
- **过于笼统**: 提示不够具体，导致输出偏离预期\r
- **缺少上下文**: 没有提供足够的背景信息\r
- **矛盾指令**: 提示中包含相互矛盾的要求\r
- **过度复杂**: 提示过长或结构混乱`,R=`---\r
title: "输入 URL 后的流程"\r
category: "Browser"\r
tags: ["url", "browser", "network"]\r
difficulty: "中等"\r
---\r
\r
# 输入 URL 后的流程\r
\r
## 完整流程\r
\r
### 1. DNS 解析\r
\`\`\`\r
1. 检查浏览器缓存\r
2. 检查系统缓存（hosts 文件）\r
3. 发送 DNS 请求到本地 DNS 服务器\r
4. 本地 DNS 服务器递归查询\r
5. 返回 IP 地址\r
\`\`\`\r
\r
### 2. TCP 连接\r
\`\`\`\r
1. 三次握手建立连接\r
2. 发送 HTTP 请求\r
3. 服务器处理请求\r
4. 返回 HTTP 响应\r
5. 四次挥手关闭连接\r
\`\`\`\r
\r
### 3. 浏览器渲染\r
\`\`\`\r
1. 解析 HTML → DOM 树\r
2. 解析 CSS → CSSOM 树\r
3. 合并 DOM + CSSOM → 渲染树\r
4. 布局（Layout）→ 计算位置和尺寸\r
5. 绘制（Paint）→ 绘制像素\r
6. 合成（Composite）→ 生成最终图像\r
\`\`\`\r
\r
## 详细步骤\r
\r
### 第一步：DNS 解析\r
\`\`\`javascript\r
// 浏览器缓存查找\r
// 系统缓存查找  \r
// 发送 DNS 查询\r
\`\`\`\r
\r
### 第二步：TCP 连接\r
\`\`\`\r
SYN → SYN+ACK → ACK\r
\`\`\`\r
\r
### 第三步：HTTP 请求\r
\`\`\`http\r
GET /index.html HTTP/1.1\r
Host: example.com\r
Connection: keep-alive\r
\`\`\`\r
\r
### 第四步：服务器响应\r
\`\`\`http\r
HTTP/1.1 200 OK\r
Content-Type: text/html\r
Content-Length: 1000\r
\r
<html>...</html>\r
\`\`\`\r
\r
### 第五步：浏览器渲染\r
\`\`\`\r
HTML → Tokenize → Parse → DOM\r
CSS → Parse → CSSOM\r
DOM + CSSOM → Render Tree\r
Layout → Paint → Composite\r
\`\`\`\r
\r
## 优化策略\r
\r
| 优化阶段 | 策略 |\r
|----------|------|\r
| DNS | DNS 预解析 |\r
| TCP | 连接复用、HTTP/2 |\r
| HTTP | 缓存、压缩 |\r
| 渲染 | 减少重排、懒加载 |`,N=`---\r
title: "前端打包优化"\r
category: "Build"\r
tags: ["optimization", "bundle", "performance"]\r
difficulty: "中等"\r
---\r
\r
# 前端打包优化\r
\r
## 代码分割\r
\r
### 1. 动态导入\r
\r
\`\`\`javascript\r
const Home = React.lazy(() => import('./Home'));\r
const About = React.lazy(() => import('./About'));\r
\`\`\`\r
\r
### 2. 第三方库分离\r
\r
\`\`\`javascript\r
// webpack.config.js\r
optimization: {\r
  splitChunks: {\r
    cacheGroups: {\r
      vendor: {\r
        test: /node_modules/,\r
        name: 'vendor',\r
        chunks: 'all'\r
      }\r
    }\r
  }\r
}\r
\`\`\`\r
\r
## 压缩优化\r
\r
### 1. TerserPlugin\r
\r
\`\`\`javascript\r
const TerserPlugin = require('terser-webpack-plugin');\r
\r
module.exports = {\r
  optimization: {\r
    minimizer: [\r
      new TerserPlugin({\r
        parallel: true,\r
        terserOptions: {\r
          compress: {\r
            drop_console: true\r
          }\r
        }\r
      })\r
    ]\r
  }\r
};\r
\`\`\`\r
\r
### 2. CSS 压缩\r
\r
\`\`\`javascript\r
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\r
\r
module.exports = {\r
  optimization: {\r
    minimizer: [new CssMinimizerPlugin()]\r
  }\r
};\r
\`\`\`\r
\r
## Tree Shaking\r
\r
\`\`\`javascript\r
// package.json\r
{\r
  "sideEffects": false\r
}\r
\r
// webpack.config.js\r
module.exports = {\r
  optimization: {\r
    usedExports: true\r
  }\r
};\r
\`\`\`\r
\r
## 缓存优化\r
\r
\`\`\`javascript\r
module.exports = {\r
  output: {\r
    filename: '[name].[contenthash].js',\r
    chunkFilename: '[name].[contenthash].chunk.js'\r
  },\r
  optimization: {\r
    runtimeChunk: 'single'\r
  }\r
};\r
\`\`\`\r
\r
## 图片优化\r
\r
\`\`\`javascript\r
module.exports = {\r
  module: {\r
    rules: [\r
      {\r
        test: /\\.(png|jpe?g|gif|webp)$/i,\r
        type: 'asset',\r
        parser: {\r
          dataUrlCondition: {\r
            maxSize: 8 * 1024\r
          }\r
        }\r
      }\r
    ]\r
  }\r
};\r
\`\`\`\r
\r
## 优化建议\r
\r
| 优化项 | 效果 | 优先级 |\r
|--------|------|--------|\r
| 代码分割 | 减少首屏体积 | 高 |\r
| 压缩 | 减小文件大小 | 高 |\r
| Tree Shaking | 移除无用代码 | 中 |\r
| 缓存 | 提升二次加载 | 高 |\r
| 图片优化 | 减少资源大小 | 中 |`,V=`---\r
title: "Webpack Chunk 配置"\r
category: "Build"\r
tags: ["webpack", "chunk", "splitting"]\r
difficulty: "中等"\r
---\r
\r
# Webpack Chunk 配置\r
\r
## Chunk 概念\r
\r
Chunk 是 Webpack 打包时生成的代码块，可以将不同的模块组合在一起。\r
\r
## 代码分割策略\r
\r
### 1. 入口分割\r
\r
\`\`\`javascript\r
module.exports = {\r
  entry: {\r
    main: './src/index.js',\r
    vendor: './src/vendor.js'\r
  },\r
  output: {\r
    filename: '[name].[contenthash].js',\r
    chunkFilename: '[name].[contenthash].chunk.js'\r
  }\r
};\r
\`\`\`\r
\r
### 2. 动态导入\r
\r
\`\`\`javascript\r
// 方式一：import()\r
const module = await import('./module');\r
\r
// 方式二：require.ensure()\r
require.ensure(['./module'], (require) => {\r
  const module = require('./module');\r
});\r
\`\`\`\r
\r
### 3. SplitChunks\r
\r
\`\`\`javascript\r
module.exports = {\r
  optimization: {\r
    splitChunks: {\r
      chunks: 'all',\r
      minSize: 20000,\r
      minRemainingSize: 0,\r
      minChunks: 1,\r
      maxAsyncRequests: 30,\r
      maxInitialRequests: 30,\r
      enforceSizeThreshold: 50000,\r
      cacheGroups: {\r
        defaultVendors: {\r
          test: /[\\\\/]node_modules[\\\\/]/,\r
          priority: -10,\r
          reuseExistingChunk: true\r
        },\r
        default: {\r
          minChunks: 2,\r
          priority: -20,\r
          reuseExistingChunk: true\r
        }\r
      }\r
    }\r
  }\r
};\r
\`\`\`\r
\r
## Chunk 命名\r
\r
\`\`\`javascript\r
// 动态导入时命名\r
const module = await import(/* webpackChunkName: "module" */ './module');\r
\`\`\`\r
\r
## 缓存策略\r
\r
\`\`\`javascript\r
module.exports = {\r
  output: {\r
    filename: '[name].[contenthash].js',\r
    chunkFilename: '[name].[contenthash].chunk.js',\r
    assetModuleFilename: '[name].[hash][ext][query]'\r
  }\r
};\r
\`\`\`\r
\r
## 最佳实践\r
\r
1. **第三方库**: 单独打包为 vendor chunk\r
2. **公共代码**: 使用 splitChunks 提取\r
3. **懒加载**: 使用动态导入减少首屏体积\r
4. **缓存**: 使用 contenthash 实现长效缓存`,D=`---\r
title: "BFC 块级格式化上下文"\r
category: "CSS"\r
tags: ["bfc", "layout", "float"]\r
difficulty: "中等"\r
---\r
\r
# BFC 块级格式化上下文\r
\r
## 什么是 BFC\r
\r
BFC（Block Formatting Context）是块级格式化上下文，是一个独立的渲染区域，内部元素的布局不会影响外部元素。\r
\r
## 触发条件\r
\r
满足以下任一条件即可触发 BFC：\r
\r
- \`float: left/right\`\r
- \`position: absolute/fixed\`\r
- \`display: inline-block/table-cell/flex/grid\`\r
- \`overflow: hidden/auto/scroll\`\r
\r
## 解决的问题\r
\r
### 1. 清除浮动\r
\r
\`\`\`css\r
.parent {\r
  overflow: hidden; /* 触发 BFC */\r
}\r
\r
.child {\r
  float: left;\r
  width: 100px;\r
  height: 100px;\r
  background: red;\r
}\r
\`\`\`\r
\r
### 2. 阻止 margin 重叠\r
\r
\`\`\`css\r
.box {\r
  margin: 10px;\r
  overflow: hidden; /* 触发 BFC */\r
}\r
\`\`\`\r
\r
### 3. 阻止元素被浮动元素覆盖\r
\r
\`\`\`css\r
.sidebar {\r
  float: left;\r
  width: 200px;\r
}\r
\r
.main {\r
  overflow: hidden; /* 触发 BFC */\r
}\r
\`\`\`\r
\r
## BFC 规则\r
\r
1. 内部的盒会在垂直方向上一个接一个地排列\r
2. 盒之间的垂直距离由 \`margin\` 决定，相邻盒的 margin 会重叠\r
3. 每个盒的左外边缘与包含块的左边缘接触\r
4. BFC 区域不会与浮动盒重叠\r
5. BFC 是一个独立的容器，内部元素不会影响外部`,X=`---\r
title: "元素居中的方式"\r
category: "CSS"\r
tags: ["centering", "layout", "flexbox"]\r
difficulty: "简单"\r
---\r
\r
# 元素居中的方式\r
\r
## 水平居中\r
\r
### 1. 行内元素\r
\`\`\`css\r
.parent {\r
  text-align: center;\r
}\r
\`\`\`\r
\r
### 2. 块级元素\r
\`\`\`css\r
.child {\r
  margin: 0 auto;\r
  width: 200px;\r
}\r
\`\`\`\r
\r
### 3. Flexbox\r
\`\`\`css\r
.parent {\r
  display: flex;\r
  justify-content: center;\r
}\r
\`\`\`\r
\r
## 垂直居中\r
\r
### 1. Flexbox\r
\`\`\`css\r
.parent {\r
  display: flex;\r
  align-items: center;\r
}\r
\`\`\`\r
\r
### 2. Grid\r
\`\`\`css\r
.parent {\r
  display: grid;\r
  align-items: center;\r
}\r
\`\`\`\r
\r
### 3. 定位 + transform\r
\`\`\`css\r
.parent {\r
  position: relative;\r
  height: 300px;\r
}\r
\r
.child {\r
  position: absolute;\r
  top: 50%;\r
  transform: translateY(-50%);\r
}\r
\`\`\`\r
\r
## 水平垂直居中\r
\r
### 1. Flexbox\r
\`\`\`css\r
.parent {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  height: 300px;\r
}\r
\`\`\`\r
\r
### 2. Grid\r
\`\`\`css\r
.parent {\r
  display: grid;\r
  place-items: center;\r
  height: 300px;\r
}\r
\`\`\`\r
\r
### 3. 定位 + transform\r
\`\`\`css\r
.parent {\r
  position: relative;\r
  height: 300px;\r
}\r
\r
.child {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
}\r
\`\`\`\r
\r
### 4. Table 布局\r
\`\`\`css\r
.parent {\r
  display: table;\r
  height: 300px;\r
}\r
\r
.child {\r
  display: table-cell;\r
  text-align: center;\r
  vertical-align: middle;\r
}\r
\`\`\`\r
\r
## 对比表格\r
\r
| 方法 | 兼容性 | 复杂度 | 适用场景 |\r
|------|--------|--------|----------|\r
| Flexbox | IE10+ | 低 | 现代浏览器 |\r
| Grid | IE11+ | 低 | 现代浏览器 |\r
| 定位 + transform | IE9+ | 中 | 需要支持旧浏览器 |\r
| Table 布局 | IE8+ | 高 | 兼容旧浏览器 |\r
\r
## 最佳实践\r
\r
- **现代项目**: 使用 Flexbox 或 Grid\r
- **需要兼容**: 使用定位 + transform\r
- **简单场景**: 使用 margin: 0 auto（水平居中）`,F=`---\r
title: "Flexbox 布局详解"\r
category: "CSS"\r
tags: ["flexbox", "layout", "responsive"]\r
difficulty: "简单"\r
---\r
\r
# Flexbox 布局详解\r
\r
## 基本概念\r
\r
Flexbox 是一种一维布局模型，可以轻松实现水平和垂直对齐。\r
\r
## 容器属性\r
\r
\`\`\`css\r
.container {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: center;\r
  align-items: center;\r
  flex-wrap: wrap;\r
  gap: 10px;\r
}\r
\`\`\`\r
\r
### flex-direction\r
- \`row\`: 水平排列（默认）\r
- \`row-reverse\`: 水平反向排列\r
- \`column\`: 垂直排列\r
- \`column-reverse\`: 垂直反向排列\r
\r
### justify-content\r
- \`flex-start\`: 左对齐\r
- \`flex-end\`: 右对齐\r
- \`center\`: 居中\r
- \`space-between\`: 两端对齐\r
- \`space-around\`: 均匀分布\r
\r
### align-items\r
- \`flex-start\`: 顶部对齐\r
- \`flex-end\`: 底部对齐\r
- \`center\`: 居中\r
- \`stretch\`: 拉伸填充\r
\r
## 项目属性\r
\r
\`\`\`css\r
.item {\r
  flex-grow: 1;\r
  flex-shrink: 1;\r
  flex-basis: auto;\r
  align-self: flex-start;\r
  order: 0;\r
}\r
\`\`\`\r
\r
### flex 简写\r
\`\`\`css\r
.item {\r
  flex: 1 1 auto;\r
}\r
\`\`\`\r
\r
## 常见布局示例\r
\r
### 居中布局\r
\`\`\`css\r
.container {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\`\`\`\r
\r
### 两端对齐\r
\`\`\`css\r
.container {\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\`\`\`\r
\r
### 等分布局\r
\`\`\`css\r
.item {\r
  flex: 1;\r
}\r
\`\`\``,J=`---\r
title: "隐藏元素的方式"\r
category: "CSS"\r
tags: ["hide", "visibility", "display"]\r
difficulty: "简单"\r
---\r
\r
# 隐藏元素的方式\r
\r
## 常见方法对比\r
\r
### 1. display: none\r
\`\`\`css\r
.element {\r
  display: none;\r
}\r
\`\`\`\r
- 元素从文档流中完全移除\r
- 不占据空间\r
- 子元素也被隐藏\r
- 无法通过 Tab 访问\r
- 会触发重排\r
\r
### 2. visibility: hidden\r
\`\`\`css\r
.element {\r
  visibility: hidden;\r
}\r
\`\`\`\r
- 元素仍占据空间\r
- 子元素可以通过 \`visibility: visible\` 显示\r
- 无法通过 Tab 访问\r
- 只触发重绘\r
\r
### 3. opacity: 0\r
\`\`\`css\r
.element {\r
  opacity: 0;\r
}\r
\`\`\`\r
- 元素仍占据空间\r
- 元素仍然可交互（可点击、可聚焦）\r
- 只触发重绘\r
\r
### 4. position: absolute + 移出视口\r
\`\`\`css\r
.element {\r
  position: absolute;\r
  left: -9999px;\r
  top: -9999px;\r
}\r
\`\`\`\r
- 元素从正常文档流中移除\r
- 不占据空间\r
- 可通过 Tab 访问（屏幕阅读器可读取）\r
\r
### 5. clip-path\r
\`\`\`css\r
.element {\r
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r
}\r
\`\`\`\r
- 元素仍占据空间\r
- 元素仍然可交互\r
\r
### 6. height: 0 + overflow: hidden\r
\`\`\`css\r
.element {\r
  height: 0;\r
  overflow: hidden;\r
}\r
\`\`\`\r
- 元素不占据空间\r
- 过渡动画时可以平滑展开\r
\r
## 对比表格\r
\r
| 方法 | 占据空间 | 可交互 | 屏幕阅读器 | 性能影响 |\r
|------|----------|--------|------------|----------|\r
| display: none | 否 | 否 | 否 | 重排 |\r
| visibility: hidden | 是 | 否 | 否 | 重绘 |\r
| opacity: 0 | 是 | 是 | 是 | 重绘 |\r
| position: absolute + 移出 | 否 | 是 | 是 | 无 |\r
| clip-path | 是 | 是 | 是 | 重绘 |\r
| height: 0 + overflow | 否 | 否 | 否 | 重排 |\r
\r
## 使用场景\r
\r
| 场景 | 推荐方法 |\r
|------|----------|\r
| 完全移除元素 | display: none |\r
| 保留布局空间 | visibility: hidden |\r
| 动画效果 | opacity: 0 或 clip-path |\r
| 可访问性隐藏 | position: absolute + 移出 |\r
| 可折叠内容 | height: 0 + overflow: hidden |`,L=`---\r
title: "重排与重绘"\r
category: "CSS"\r
tags: ["reflow", "repaint", "performance"]\r
difficulty: "中等"\r
---\r
\r
# 重排与重绘\r
\r
## 概念\r
\r
### 重排（Reflow）\r
当元素的几何属性（位置、尺寸）发生变化时，浏览器需要重新计算布局，这个过程称为重排。\r
\r
### 重绘（Repaint）\r
当元素的样式发生变化但不影响布局时，浏览器只需更新像素，这个过程称为重绘。\r
\r
## 触发条件\r
\r
### 触发重排的操作\r
- 添加/删除 DOM 元素\r
- 改变元素尺寸（width、height）\r
- 改变元素位置（top、left）\r
- 改变浏览器窗口大小\r
- 改变字体大小\r
\r
### 触发重绘的操作\r
- 改变背景颜色\r
- 改变文字颜色\r
- 改变 visibility\r
- 改变 outline\r
\r
## 性能优化策略\r
\r
### 1. 批量修改 DOM\r
\`\`\`javascript\r
// 不好：多次触发重排\r
const list = document.getElementById('list');\r
for (let i = 0; i < 100; i++) {\r
  const item = document.createElement('li');\r
  item.textContent = \`Item \${i}\`;\r
  list.appendChild(item);\r
}\r
\r
// 好：使用 DocumentFragment\r
const fragment = document.createDocumentFragment();\r
for (let i = 0; i < 100; i++) {\r
  const item = document.createElement('li');\r
  item.textContent = \`Item \${i}\`;\r
  fragment.appendChild(item);\r
}\r
list.appendChild(fragment);\r
\`\`\`\r
\r
### 2. 使用 CSS 动画代替 JavaScript\r
\`\`\`css\r
/* 使用 transform 不会触发重排 */\r
.element {\r
  transition: transform 0.3s;\r
}\r
.element:hover {\r
  transform: translateX(10px);\r
}\r
\`\`\`\r
\r
### 3. 避免频繁读取布局属性\r
\`\`\`javascript\r
// 不好：强制同步布局\r
const box = document.getElementById('box');\r
for (let i = 0; i < 100; i++) {\r
  const width = box.offsetWidth; // 触发重排\r
  box.style.width = \`\${width + 1}px\`; // 触发重排\r
}\r
\r
// 好：先读取后修改\r
const box = document.getElementById('box');\r
const width = box.offsetWidth;\r
for (let i = 0; i < 100; i++) {\r
  box.style.width = \`\${width + i + 1}px\`;\r
}\r
\`\`\`\r
\r
### 4. 使用 will-change 提示浏览器\r
\`\`\`css\r
.element {\r
  will-change: transform, opacity;\r
}\r
\`\`\`\r
\r
## 优化建议\r
\r
| 操作类型 | 优化建议 |\r
|----------|----------|\r
| DOM 修改 | 批量操作、使用 Fragment |\r
| 样式修改 | 使用 transform、opacity |\r
| 布局查询 | 集中读取、缓存结果 |\r
| 动画 | 使用 CSS 动画、GPU 加速 |`,$=`---\r
title: "闭包的概念与应用"\r
category: "JavaScript"\r
tags: ["closure", "scope", "lexical"]\r
difficulty: "中等"\r
---\r
\r
# 闭包的概念与应用\r
\r
## 什么是闭包\r
\r
闭包是指一个函数能够访问其词法作用域之外的变量。当内部函数引用了外部函数的变量时，就形成了闭包。\r
\r
## 闭包的工作原理\r
\r
\`\`\`javascript\r
function outer() {\r
  const message = 'Hello';\r
  \r
  function inner() {\r
    console.log(message);\r
  }\r
  \r
  return inner;\r
}\r
\r
const fn = outer();\r
fn(); // 输出: Hello\r
\`\`\`\r
\r
## 闭包的常见应用\r
\r
### 1. 数据封装\r
\r
\`\`\`javascript\r
function createCounter() {\r
  let count = 0;\r
  \r
  return {\r
    increment() {\r
      count++;\r
      return count;\r
    },\r
    getCount() {\r
      return count;\r
    }\r
  };\r
}\r
\r
const counter = createCounter();\r
\`\`\`\r
\r
### 2. 函数柯里化\r
\r
\`\`\`javascript\r
function curry(fn) {\r
  return function curried(...args) {\r
    if (args.length >= fn.length) {\r
      return fn(...args);\r
    }\r
    return function(...moreArgs) {\r
      return curried(...args, ...moreArgs);\r
    };\r
  };\r
}\r
\`\`\`\r
\r
### 3. 模块模式\r
\r
\`\`\`javascript\r
const module = (function() {\r
  const privateVar = 'secret';\r
  \r
  return {\r
    publicMethod() {\r
      return privateVar;\r
    }\r
  };\r
})();\r
\`\`\`\r
\r
## 闭包的注意事项\r
\r
- **内存泄漏风险**: 闭包会保留对外部变量的引用，可能导致内存泄漏\r
- **性能影响**: 过度使用闭包会增加内存占用\r
- **作用域链**: 闭包会沿作用域链查找变量，影响访问性能`,z=`---\r
title: "防抖与节流"\r
category: "JavaScript"\r
tags: ["debounce", "throttle", "optimization"]\r
difficulty: "中等"\r
---\r
\r
# 防抖与节流\r
\r
## 概念\r
\r
### 防抖（Debounce）\r
在事件触发后等待一段时间再执行，如果期间再次触发，则重新计时。\r
\r
### 节流（Throttle）\r
在事件触发后立即执行，然后在一段时间内不再响应。\r
\r
## 防抖实现\r
\r
\`\`\`javascript\r
function debounce(fn, delay) {\r
  let timer = null;\r
  return function(...args) {\r
    if (timer) {\r
      clearTimeout(timer);\r
    }\r
    timer = setTimeout(() => {\r
      fn.apply(this, args);\r
    }, delay);\r
  };\r
}\r
\r
const debouncedFn = debounce(() => {\r
  console.log('debounced');\r
}, 300);\r
\`\`\`\r
\r
## 节流实现\r
\r
\`\`\`javascript\r
function throttle(fn, delay) {\r
  let lastTime = 0;\r
  return function(...args) {\r
    const now = Date.now();\r
    if (now - lastTime >= delay) {\r
      fn.apply(this, args);\r
      lastTime = now;\r
    }\r
  };\r
}\r
\r
const throttledFn = throttle(() => {\r
  console.log('throttled');\r
}, 300);\r
\`\`\`\r
\r
## 使用场景\r
\r
### 防抖场景\r
- 搜索框输入\r
- 窗口 resize\r
- 按钮重复点击\r
\r
### 节流场景\r
- 滚动事件\r
- 鼠标移动\r
- 高频点击\r
\r
## 对比表格\r
\r
| 特性 | 防抖 | 节流 |\r
|------|------|------|\r
| 触发时机 | 停止触发后 | 立即触发 |\r
| 执行次数 | 最后一次 | 固定间隔 |\r
| 适用场景 | 输入搜索 | 滚动监听 |\r
\r
## Lodash 实现\r
\r
\`\`\`javascript\r
import { debounce, throttle } from 'lodash';\r
\r
const fn1 = debounce(() => {}, 300);\r
const fn2 = throttle(() => {}, 300);\r
\`\`\``,W=`---\r
title: "深拷贝与浅拷贝"\r
category: "JavaScript"\r
tags: ["copy", "deep", "shallow"]\r
difficulty: "中等"\r
---\r
\r
# 深拷贝与浅拷贝\r
\r
## 概念\r
\r
### 浅拷贝\r
只复制第一层属性，嵌套对象仍然是引用关系。\r
\r
### 深拷贝\r
递归复制所有层级的属性，嵌套对象也是全新的副本。\r
\r
## 浅拷贝方法\r
\r
### 1. Object.assign()\r
\`\`\`javascript\r
const obj = { a: 1, b: { c: 2 } };\r
const shallow = Object.assign({}, obj);\r
shallow.b.c = 3;\r
console.log(obj.b.c); // 3，原对象被修改\r
\`\`\`\r
\r
### 2. 展开运算符\r
\`\`\`javascript\r
const obj = { a: 1, b: { c: 2 } };\r
const shallow = { ...obj };\r
shallow.b.c = 3;\r
console.log(obj.b.c); // 3，原对象被修改\r
\`\`\`\r
\r
### 3. Array.slice() / Array.concat()\r
\`\`\`javascript\r
const arr = [1, 2, { a: 3 }];\r
const shallow = arr.slice();\r
shallow[2].a = 4;\r
console.log(arr[2].a); // 4，原数组被修改\r
\`\`\`\r
\r
## 深拷贝方法\r
\r
### 1. JSON.parse(JSON.stringify())\r
\`\`\`javascript\r
const obj = { a: 1, b: { c: 2 } };\r
const deep = JSON.parse(JSON.stringify(obj));\r
deep.b.c = 3;\r
console.log(obj.b.c); // 2，原对象不受影响\r
\`\`\`\r
\r
**局限性**：\r
- 无法拷贝函数\r
- 无法拷贝 Symbol\r
- 无法处理循环引用\r
- 日期对象会被转为字符串\r
\r
### 2. 递归实现\r
\`\`\`javascript\r
function deepClone(obj, map = new WeakMap()) {\r
  if (obj === null || typeof obj !== 'object') {\r
    return obj;\r
  }\r
  if (map.has(obj)) {\r
    return map.get(obj);\r
  }\r
  const clone = Array.isArray(obj) ? [] : {};\r
  map.set(obj, clone);\r
  for (const key in obj) {\r
    if (obj.hasOwnProperty(key)) {\r
      clone[key] = deepClone(obj[key], map);\r
    }\r
  }\r
  return clone;\r
}\r
\`\`\`\r
\r
### 3. Lodash.cloneDeep()\r
\`\`\`javascript\r
import cloneDeep from 'lodash/cloneDeep';\r
const obj = { a: 1, b: { c: 2 } };\r
const deep = cloneDeep(obj);\r
\`\`\`\r
\r
## 区别对比\r
\r
| 特性 | 浅拷贝 | 深拷贝 |\r
|------|--------|--------|\r
| 第一层属性 | 新值 | 新值 |\r
| 嵌套对象 | 引用 | 新值 |\r
| 循环引用 | 不支持 | 需特殊处理 |\r
| 函数 | 引用 | 可拷贝 |\r
| Symbol | 引用 | 可拷贝 |`,q=`---\r
title: "事件循环与异步机制"\r
category: "JavaScript"\r
tags: ["event-loop", "async", "microtask", "macrotask"]\r
difficulty: "中等"\r
---\r
\r
# 事件循环与异步机制\r
\r
## 为什么 JS 是异步的\r
\r
JavaScript 是单线程语言，如果所有操作都是同步的，那么耗时操作会阻塞主线程，导致页面卡顿。异步机制可以让耗时操作在后台执行，不阻塞主线程。\r
\r
## 事件循环原理\r
\r
### 调用栈\r
同步代码执行时，函数依次压入调用栈，执行完毕后弹出。\r
\r
### 任务队列\r
异步操作完成后，回调函数进入任务队列等待执行。\r
\r
### 微任务 vs 宏任务\r
\r
#### 宏任务（Macrotask）\r
- setTimeout\r
- setInterval\r
- I/O\r
- requestAnimationFrame\r
\r
#### 微任务（Microtask）\r
- Promise.then\r
- MutationObserver\r
- queueMicrotask\r
\r
### 执行顺序\r
\`\`\`\r
1. 执行同步代码（调用栈）\r
2. 清空微任务队列\r
3. 执行一个宏任务\r
4. 清空微任务队列\r
5. 重复步骤 3-4\r
\`\`\`\r
\r
## 示例\r
\r
\`\`\`javascript\r
console.log('1'); // 同步\r
\r
setTimeout(() => {\r
  console.log('2'); // 宏任务\r
}, 0);\r
\r
Promise.resolve().then(() => {\r
  console.log('3'); // 微任务\r
});\r
\r
console.log('4'); // 同步\r
\r
// 输出顺序: 1, 4, 3, 2\r
\`\`\`\r
\r
## 进程与线程\r
\r
### 进程\r
进程是操作系统分配资源的基本单位，每个进程有独立的内存空间。\r
\r
### 线程\r
线程是 CPU 调度的基本单位，一个进程可以包含多个线程，共享进程的内存空间。\r
\r
### JS 线程模型\r
- **主线程**: 执行 JS 代码、渲染页面\r
- **工作线程**: Web Worker，处理耗时计算\r
- **事件循环**: 管理异步操作`,G=`---\r
title: "前端国际化实现"\r
category: "JavaScript"\r
tags: ["i18n", "internationalization", "localization"]\r
difficulty: "中等"\r
---\r
\r
# 前端国际化实现\r
\r
## 什么是国际化\r
\r
国际化（i18n）是指让应用支持多种语言和地区的能力。\r
\r
## 实现方案\r
\r
### 1. 静态资源方案\r
\r
\`\`\`javascript\r
// locales/en.js\r
export default {\r
  greeting: 'Hello',\r
  welcome: 'Welcome to our app'\r
};\r
\r
// locales/zh.js\r
export default {\r
  greeting: '你好',\r
  welcome: '欢迎使用我们的应用'\r
};\r
\`\`\`\r
\r
### 2. 使用 i18next\r
\r
\`\`\`javascript\r
import i18n from 'i18next';\r
import { initReactI18next } from 'react-i18next';\r
\r
i18n\r
  .use(initReactI18next)\r
  .init({\r
    resources: {\r
      en: {\r
        translation: {\r
          greeting: 'Hello'\r
        }\r
      },\r
      zh: {\r
        translation: {\r
          greeting: '你好'\r
        }\r
      }\r
    },\r
    lng: 'zh',\r
    fallbackLng: 'en',\r
    interpolation: {\r
      escapeValue: false\r
    }\r
  });\r
\`\`\`\r
\r
### 3. Vue 国际化\r
\r
\`\`\`javascript\r
import { createI18n } from 'vue-i18n';\r
\r
const i18n = createI18n({\r
  locale: 'zh',\r
  messages: {\r
    en: { greeting: 'Hello' },\r
    zh: { greeting: '你好' }\r
  }\r
});\r
\`\`\`\r
\r
## 核心概念\r
\r
### 语言切换\r
\`\`\`javascript\r
i18n.changeLanguage('en');\r
\`\`\`\r
\r
### 插值\r
\`\`\`javascript\r
t('welcome', { name: 'Alice' });\r
// 欢迎 Alice 使用我们的应用\r
\`\`\`\r
\r
### 复数\r
\`\`\`javascript\r
t('items', { count: 1 }); // 1 item\r
t('items', { count: 2 }); // 2 items\r
\`\`\`\r
\r
## 最佳实践\r
\r
| 实践 | 说明 |\r
|------|------|\r
| 分离翻译文件 | 每个语言一个文件 |\r
| 使用键值对 | 避免硬编码 |\r
| 支持回退 | 默认语言兜底 |\r
| 懒加载 | 按需加载语言包 |`,K=`---\r
title: "Node.js 能做什么"\r
category: "JavaScript"\r
tags: ["nodejs", "backend", "server"]\r
difficulty: "中等"\r
---\r
\r
# Node.js 能做什么\r
\r
## 核心能力\r
\r
### 1. 服务器端开发\r
\`\`\`javascript\r
const http = require('http');\r
\r
const server = http.createServer((req, res) => {\r
  res.writeHead(200, { 'Content-Type': 'text/plain' });\r
  res.end('Hello World\\n');\r
});\r
\r
server.listen(3000, () => {\r
  console.log('Server running on port 3000');\r
});\r
\`\`\`\r
\r
### 2. API 开发\r
\`\`\`javascript\r
const express = require('express');\r
const app = express();\r
\r
app.get('/api/users', (req, res) => {\r
  res.json([{ name: 'Alice' }, { name: 'Bob' }]);\r
});\r
\r
app.listen(3000);\r
\`\`\`\r
\r
### 3. 命令行工具\r
\`\`\`javascript\r
#!/usr/bin/env node\r
\r
console.log('Hello CLI');\r
\`\`\`\r
\r
### 4. 文件处理\r
\`\`\`javascript\r
const fs = require('fs');\r
\r
fs.readFile('file.txt', 'utf8', (err, data) => {\r
  console.log(data);\r
});\r
\`\`\`\r
\r
### 5. 数据库操作\r
\`\`\`javascript\r
const mongoose = require('mongoose');\r
\r
mongoose.connect('mongodb://localhost/test');\r
\`\`\`\r
\r
### 6. 实时通信\r
\`\`\`javascript\r
const WebSocket = require('ws');\r
const wss = new WebSocket.Server({ port: 8080 });\r
\`\`\`\r
\r
## 应用场景\r
\r
| 场景 | 技术栈 |\r
|------|--------|\r
| Web 服务 | Express, Koa |\r
| API 网关 | Fastify |\r
| 实时通信 | Socket.io |\r
| 微服务 | NestJS |\r
| 构建工具 | Webpack, Vite |\r
| 爬虫 | Puppeteer |\r
\r
## 优势\r
\r
- 事件驱动\r
- 非阻塞 I/O\r
- 单线程但高并发\r
- 与前端共享代码\r
- 丰富的 npm 生态`,U=`---\r
title: "Reflect 对象详解"\r
category: "JavaScript"\r
tags: ["reflect", "proxy", "meta-programming"]\r
difficulty: "中等"\r
---\r
\r
# Reflect 对象详解\r
\r
## 什么是 Reflect\r
\r
Reflect 是 ES6 引入的内置对象，提供了一系列用于操作对象的方法，这些方法与 Proxy handler 的方法相对应。\r
\r
## 解决的问题\r
\r
### 1. 统一的对象操作 API\r
将分散在 Object、Function 等对象上的方法集中到 Reflect 上：\r
\r
\`\`\`javascript\r
// 旧方式\r
Object.defineProperty(obj, 'prop', desc);\r
\r
// 新方式\r
Reflect.defineProperty(obj, 'prop', desc);\r
\`\`\`\r
\r
### 2. 函数式调用\r
将操作符转为函数调用：\r
\r
\`\`\`javascript\r
// 操作符方式\r
'key' in obj;\r
delete obj.key;\r
\r
// 函数方式\r
Reflect.has(obj, 'key');\r
Reflect.deleteProperty(obj, 'key');\r
\`\`\`\r
\r
### 3. 更合理的返回值\r
\`\`\`javascript\r
// Object.defineProperty 失败时抛出异常\r
try {\r
  Object.defineProperty(obj, 'prop', desc);\r
} catch (e) {\r
  console.log('操作失败');\r
}\r
\r
// Reflect.defineProperty 返回布尔值\r
if (Reflect.defineProperty(obj, 'prop', desc)) {\r
  console.log('操作成功');\r
} else {\r
  console.log('操作失败');\r
}\r
\`\`\`\r
\r
## 常用方法\r
\r
### 1. Reflect.get(target, propertyKey[, receiver])\r
\`\`\`javascript\r
const obj = { name: 'Alice' };\r
console.log(Reflect.get(obj, 'name')); // Alice\r
\`\`\`\r
\r
### 2. Reflect.set(target, propertyKey, value[, receiver])\r
\`\`\`javascript\r
const obj = {};\r
Reflect.set(obj, 'name', 'Bob');\r
console.log(obj.name); // Bob\r
\`\`\`\r
\r
### 3. Reflect.has(target, propertyKey)\r
\`\`\`javascript\r
const obj = { name: 'Alice' };\r
console.log(Reflect.has(obj, 'name')); // true\r
\`\`\`\r
\r
### 4. Reflect.deleteProperty(target, propertyKey)\r
\`\`\`javascript\r
const obj = { name: 'Alice' };\r
Reflect.deleteProperty(obj, 'name');\r
console.log(obj.name); // undefined\r
\`\`\`\r
\r
### 5. Reflect.defineProperty(target, propertyKey, attributes)\r
\`\`\`javascript\r
const obj = {};\r
Reflect.defineProperty(obj, 'name', {\r
  value: 'Alice',\r
  writable: true,\r
  enumerable: true,\r
  configurable: true\r
});\r
\`\`\`\r
\r
### 6. Reflect.construct(target, args[, newTarget])\r
\`\`\`javascript\r
function Person(name) {\r
  this.name = name;\r
}\r
const person = Reflect.construct(Person, ['Alice']);\r
console.log(person.name); // Alice\r
\`\`\`\r
\r
## 与 Proxy 的配合\r
\r
\`\`\`javascript\r
const handler = {\r
  get(target, prop) {\r
    console.log(\`获取属性: \${prop}\`);\r
    return Reflect.get(target, prop);\r
  },\r
  set(target, prop, value) {\r
    console.log(\`设置属性: \${prop} = \${value}\`);\r
    return Reflect.set(target, prop, value);\r
  }\r
};\r
\r
const proxy = new Proxy({}, handler);\r
proxy.name = 'Alice'; // 设置属性: name = Alice\r
console.log(proxy.name); // 获取属性: name -> Alice\r
\`\`\`\r
\r
## 应用场景\r
\r
- **元编程**: 配合 Proxy 实现对象的拦截和自定义行为\r
- **框架开发**: 如 Vue 3 的响应式系统使用了 Proxy 和 Reflect\r
- **代码优化**: 将对象操作统一为函数式调用，便于组合和复用`,Y=`---\r
title: "this 绑定机制"\r
category: "JavaScript"\r
tags: ["this", "bind", "call", "apply"]\r
difficulty: "中等"\r
---\r
\r
# this 绑定机制\r
\r
## 绑定规则\r
\r
### 1. 默认绑定\r
\`\`\`javascript\r
function foo() {\r
  console.log(this); // window（非严格模式）/ undefined（严格模式）\r
}\r
foo();\r
\`\`\`\r
\r
### 2. 隐式绑定\r
\`\`\`javascript\r
const obj = {\r
  name: 'Alice',\r
  greet() {\r
    console.log(this.name); // Alice\r
  }\r
};\r
obj.greet();\r
\`\`\`\r
\r
### 3. 显式绑定\r
\r
#### call()\r
\`\`\`javascript\r
function greet(greeting) {\r
  console.log(\`\${greeting}, \${this.name}\`);\r
}\r
greet.call({ name: 'Bob' }, 'Hello'); // Hello, Bob\r
\`\`\`\r
\r
#### apply()\r
\`\`\`javascript\r
function greet(greeting, punctuation) {\r
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);\r
}\r
greet.apply({ name: 'Bob' }, ['Hello', '!']); // Hello, Bob!\r
\`\`\`\r
\r
#### bind()\r
\`\`\`javascript\r
function greet() {\r
  console.log(\`Hello, \${this.name}\`);\r
}\r
const boundGreet = greet.bind({ name: 'Bob' });\r
boundGreet(); // Hello, Bob\r
\`\`\`\r
\r
### 4. new 绑定\r
\`\`\`javascript\r
function Person(name) {\r
  this.name = name;\r
}\r
const person = new Person('Alice');\r
console.log(person.name); // Alice\r
\`\`\`\r
\r
## call、apply、bind 的区别\r
\r
| 方法 | 参数传递 | 返回值 | 执行时机 |\r
|------|----------|--------|----------|\r
| call | 逐个传递 | 函数执行结果 | 立即执行 |\r
| apply | 数组传递 | 函数执行结果 | 立即执行 |\r
| bind | 逐个传递 | 新函数 | 延迟执行 |\r
\r
## 手写 bind\r
\r
\`\`\`javascript\r
Function.prototype.myBind = function(context, ...args) {\r
  const fn = this;\r
  return function(...newArgs) {\r
    return fn.apply(context, [...args, ...newArgs]);\r
  };\r
};\r
\r
function greet(greeting) {\r
  console.log(\`\${greeting}, \${this.name}\`);\r
}\r
const bound = greet.myBind({ name: 'Bob' }, 'Hello');\r
bound(); // Hello, Bob\r
\`\`\`\r
\r
## 箭头函数的 this\r
\r
箭头函数没有自己的 this，它会捕获外层作用域的 this：\r
\r
\`\`\`javascript\r
const obj = {\r
  name: 'Alice',\r
  greet: () => {\r
    console.log(this.name); // undefined（外层是全局作用域）\r
  }\r
};\r
obj.greet();\r
\`\`\``,Q=`---\r
title: "var、let、const 的区别"\r
category: "JavaScript"\r
tags: ["var", "let", "const", "scope"]\r
difficulty: "简单"\r
---\r
\r
# var、let、const 的区别\r
\r
## 作用域\r
\r
### var - 函数作用域\r
\`\`\`javascript\r
function foo() {\r
  if (true) {\r
    var x = 1;\r
  }\r
  console.log(x); // 1，x 可以在 if 外部访问\r
}\r
foo();\r
\`\`\`\r
\r
### let/const - 块级作用域\r
\`\`\`javascript\r
function foo() {\r
  if (true) {\r
    let x = 1;\r
    const y = 2;\r
  }\r
  console.log(x); // ReferenceError: x is not defined\r
  console.log(y); // ReferenceError: y is not defined\r
}\r
foo();\r
\`\`\`\r
\r
## 变量提升\r
\r
### var 的变量提升\r
\`\`\`javascript\r
console.log(a); // undefined（变量提升，但未初始化）\r
var a = 1;\r
\`\`\`\r
\r
### let/const 的暂时性死区\r
\`\`\`javascript\r
console.log(b); // ReferenceError（暂时性死区）\r
let b = 2;\r
\`\`\`\r
\r
## 重复声明\r
\r
### var 允许重复声明\r
\`\`\`javascript\r
var x = 1;\r
var x = 2; // 不会报错\r
\`\`\`\r
\r
### let/const 不允许重复声明\r
\`\`\`javascript\r
let x = 1;\r
let x = 2; // SyntaxError: Identifier 'x' has already been declared\r
\`\`\`\r
\r
## const 的特性\r
\r
### 不可重新赋值\r
\`\`\`javascript\r
const PI = 3.14;\r
PI = 3.15; // TypeError: Assignment to constant variable\r
\`\`\`\r
\r
### 对象属性可修改\r
\`\`\`javascript\r
const obj = { name: 'Alice' };\r
obj.name = 'Bob'; // 可以修改属性\r
obj = {}; // TypeError: Assignment to constant variable\r
\`\`\`\r
\r
## for 循环中的变量\r
\r
### 使用 var 的问题\r
\`\`\`javascript\r
for (var i = 0; i < 3; i++) {\r
  setTimeout(() => {\r
    console.log(i); // 输出 3, 3, 3\r
  }, 0);\r
}\r
\`\`\`\r
\r
### 使用 let 的解决方案\r
\`\`\`javascript\r
for (let i = 0; i < 3; i++) {\r
  setTimeout(() => {\r
    console.log(i); // 输出 0, 1, 2\r
  }, 0);\r
}\r
\`\`\`\r
\r
## 总结对比\r
\r
| 特性 | var | let | const |\r
|------|-----|-----|-------|\r
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |\r
| 变量提升 | 有 | 有（暂时性死区） | 有（暂时性死区） |\r
| 重复声明 | 允许 | 不允许 | 不允许 |\r
| 重新赋值 | 允许 | 允许 | 不允许 |\r
| 必须初始化 | 否 | 否 | 是 |\r
\r
## 最佳实践\r
\r
- 使用 \`const\` 声明不需要重新赋值的变量\r
- 使用 \`let\` 声明需要重新赋值的变量\r
- 避免使用 \`var\``,Z=`---\r
title: "虚拟列表实现"\r
category: "JavaScript"\r
tags: ["virtual-list", "performance", "scroll"]\r
difficulty: "高"\r
---\r
\r
# 虚拟列表实现\r
\r
## 什么是虚拟列表\r
\r
虚拟列表是一种优化长列表渲染性能的技术，只渲染可见区域的元素，而不是全部渲染。\r
\r
## 核心原理\r
\r
1. 计算可见区域的范围\r
2. 只渲染可见范围内的元素\r
3. 通过 padding 模拟滚动条\r
4. 根据滚动位置动态更新可见元素\r
\r
## 实现步骤\r
\r
### 1. 计算可见区域\r
\r
\`\`\`javascript\r
const viewportHeight = container.clientHeight;\r
const itemHeight = 50;\r
const visibleCount = Math.ceil(viewportHeight / itemHeight);\r
\`\`\`\r
\r
### 2. 计算偏移量\r
\r
\`\`\`javascript\r
const scrollTop = container.scrollTop;\r
const startIndex = Math.floor(scrollTop / itemHeight);\r
const endIndex = startIndex + visibleCount + 1;\r
\`\`\`\r
\r
### 3. 渲染可见元素\r
\r
\`\`\`javascript\r
const visibleItems = list.slice(startIndex, endIndex);\r
const offsetTop = startIndex * itemHeight;\r
\`\`\`\r
\r
## 完整实现\r
\r
\`\`\`javascript\r
class VirtualList {\r
  constructor(options) {\r
    this.container = options.container;\r
    this.itemHeight = options.itemHeight;\r
    this.renderItem = options.renderItem;\r
    this.data = options.data;\r
    this.init();\r
  }\r
\r
  init() {\r
    this.listContainer = document.createElement('div');\r
    this.listContainer.style.position = 'relative';\r
    this.listContainer.style.height = '100%';\r
    this.listContainer.style.overflow = 'auto';\r
    \r
    this.content = document.createElement('div');\r
    \r
    this.listContainer.appendChild(this.content);\r
    this.container.appendChild(this.listContainer);\r
    \r
    this.listContainer.addEventListener('scroll', this.handleScroll);\r
    this.render();\r
  }\r
\r
  handleScroll = () => {\r
    this.render();\r
  };\r
\r
  render() {\r
    const scrollTop = this.listContainer.scrollTop;\r
    const viewportHeight = this.listContainer.clientHeight;\r
    \r
    const startIndex = Math.floor(scrollTop / this.itemHeight);\r
    const endIndex = startIndex + Math.ceil(viewportHeight / this.itemHeight) + 1;\r
    \r
    const visibleData = this.data.slice(startIndex, endIndex);\r
    const offsetTop = startIndex * this.itemHeight;\r
    \r
    this.content.style.height = \`\${this.data.length * this.itemHeight}px\`;\r
    this.content.style.transform = \`translateY(\${offsetTop}px)\`;\r
    \r
    this.content.innerHTML = visibleData.map((item, index) => \r
      this.renderItem(item, startIndex + index)\r
    ).join('');\r
  }\r
\r
  updateData(data) {\r
    this.data = data;\r
    this.render();\r
  }\r
}\r
\`\`\`\r
\r
## 优化策略\r
\r
| 优化项 | 方法 |\r
|--------|------|\r
| 固定高度 | 使用固定 itemHeight |\r
| 动态高度 | 计算实际高度缓存 |\r
| 滚动节流 | 使用 throttle |\r
| GPU加速 | 使用 transform |\r
\r
## 使用场景\r
\r
- 大数据列表\r
- 表格渲染\r
- 聊天记录`,nn=`---\r
title: "跨域问题与解决方案"\r
category: "Network"\r
tags: ["cors", "cross-origin", "proxy"]\r
difficulty: "中等"\r
---\r
\r
# 跨域问题与解决方案\r
\r
## 什么是跨域\r
\r
当浏览器向不同域名、端口或协议的服务器发送请求时，会触发同源策略限制，这就是跨域。\r
\r
## 同源策略\r
\r
同源策略要求：\r
- 协议相同（http/https）\r
- 域名相同\r
- 端口相同\r
\r
## 跨域解决方案\r
\r
### 1. CORS（跨域资源共享）\r
\r
**服务端配置**：\r
\`\`\`javascript\r
// Node.js / Express\r
app.use((req, res, next) => {\r
  res.header('Access-Control-Allow-Origin', '*');\r
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');\r
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');\r
  \r
  if (req.method === 'OPTIONS') {\r
    return res.sendStatus(200);\r
  }\r
  next();\r
});\r
\`\`\`\r
\r
**常见响应头**：\r
- \`Access-Control-Allow-Origin\`: 允许的源\r
- \`Access-Control-Allow-Methods\`: 允许的方法\r
- \`Access-Control-Allow-Headers\`: 允许的请求头\r
- \`Access-Control-Allow-Credentials\`: 是否允许携带凭证\r
\r
### 2. 代理服务器\r
\r
**开发环境（webpack devServer）**：\r
\`\`\`javascript\r
// webpack.config.js\r
module.exports = {\r
  devServer: {\r
    proxy: {\r
      '/api': {\r
        target: 'http://localhost:3000',\r
        changeOrigin: true\r
      }\r
    }\r
  }\r
};\r
\`\`\`\r
\r
**生产环境（Nginx）**：\r
\`\`\`nginx\r
server {\r
  listen 80;\r
  server_name example.com;\r
  \r
  location /api/ {\r
    proxy_pass http://api.example.com/;\r
  }\r
}\r
\`\`\`\r
\r
### 3. JSONP\r
\r
\`\`\`javascript\r
function handleResponse(data) {\r
  console.log(data);\r
}\r
\r
const script = document.createElement('script');\r
script.src = 'http://api.example.com/data?callback=handleResponse';\r
document.body.appendChild(script);\r
\`\`\`\r
**局限性**：只支持 GET 请求\r
\r
### 4. WebSocket\r
\r
\`\`\`javascript\r
const ws = new WebSocket('ws://api.example.com');\r
ws.onmessage = (event) => {\r
  console.log(event.data);\r
};\r
\`\`\`\r
\r
### 5. postMessage\r
\r
\`\`\`javascript\r
// 主页面\r
window.addEventListener('message', (event) => {\r
  console.log(event.data);\r
});\r
\r
// iframe\r
parent.postMessage('Hello', '*');\r
\`\`\`\r
\r
## 跨域方案对比\r
\r
| 方案 | 适用场景 | 复杂度 |\r
|------|----------|--------|\r
| CORS | 前后端分离 | 低 |\r
| 代理 | 开发环境 | 低 |\r
| JSONP | 旧浏览器 | 中 |\r
| WebSocket | 实时通信 | 高 |\r
| postMessage | 页面间通信 | 中 |\r
\r
## 最佳实践\r
\r
- **开发环境**: 使用代理服务器\r
- **生产环境**: 使用 CORS\r
- **实时通信**: 使用 WebSocket`,rn=`---\r
title: "HTTP 缓存机制"\r
category: "Network"\r
tags: ["http", "cache", "performance"]\r
difficulty: "中等"\r
---\r
\r
# HTTP 缓存机制\r
\r
## 缓存类型\r
\r
### 1. 强缓存\r
\r
#### Expires\r
\`\`\`http\r
Expires: Wed, 24 Jun 2026 12:00:00 GMT\r
\`\`\`\r
- 指定过期时间\r
- 受客户端时间影响\r
\r
#### Cache-Control\r
\`\`\`http\r
Cache-Control: max-age=3600, public, no-cache\r
\`\`\`\r
\r
常用指令：\r
- \`max-age\`: 缓存有效期（秒）\r
- \`public\`: 可被中间缓存代理\r
- \`private\`: 仅客户端缓存\r
- \`no-cache\`: 强制验证缓存\r
- \`no-store\`: 不缓存\r
\r
### 2. 协商缓存\r
\r
#### Last-Modified / If-Modified-Since\r
\`\`\`http\r
Last-Modified: Wed, 24 Jun 2026 10:00:00 GMT\r
If-Modified-Since: Wed, 24 Jun 2026 10:00:00 GMT\r
\`\`\`\r
- 基于文件修改时间\r
- 精度为秒\r
\r
#### ETag / If-None-Match\r
\`\`\`http\r
ETag: "abc123"\r
If-None-Match: "abc123"\r
\`\`\`\r
- 基于文件内容哈希\r
- 精度更高\r
\r
## 缓存流程\r
\r
\`\`\`\r
请求资源\r
    ↓\r
检查强缓存（Cache-Control/Expires）\r
    ↓\r
[命中] → 返回本地缓存（200）\r
    ↓\r
[未命中] → 检查协商缓存（ETag/Last-Modified）\r
    ↓\r
[命中] → 返回 304，使用本地缓存\r
    ↓\r
[未命中] → 请求服务器，返回新资源（200）\r
\`\`\`\r
\r
## 强制缓存失效\r
\r
### 1. 刷新页面（F5）\r
- 跳过强缓存，检查协商缓存\r
\r
### 2. 强制刷新（Ctrl+F5）\r
- 跳过所有缓存，重新请求\r
\r
### 3. 设置请求头\r
\`\`\`javascript\r
fetch('/api/data', {\r
  cache: 'no-cache'\r
});\r
\`\`\`\r
\r
## 缓存策略\r
\r
### 静态资源\r
\`\`\`http\r
Cache-Control: max-age=31536000, immutable\r
\`\`\`\r
\r
### API 接口\r
\`\`\`http\r
Cache-Control: no-cache\r
ETag: "abc123"\r
\`\`\`\r
\r
### 变化频繁的资源\r
\`\`\`http\r
Cache-Control: no-cache\r
\`\`\`\r
\r
## 最佳实践\r
\r
1. **静态资源**: 设置长缓存时间 + 版本号\r
2. **API**: 使用协商缓存\r
3. **敏感数据**: 使用 \`no-store\`\r
4. **CDN**: 设置合理的缓存时间`,en=`---\r
title: "HTTP 协议详解"\r
category: "Network"\r
tags: ["http", "protocol", "web"]\r
difficulty: "中等"\r
---\r
\r
# HTTP 协议详解\r
\r
## HTTP 概述\r
\r
HTTP（HyperText Transfer Protocol）是一种基于 TCP/IP 的应用层协议，用于在 Web 浏览器和服务器之间传输数据。\r
\r
## HTTP 请求方法\r
\r
| 方法 | 用途 | 幂等性 |\r
|------|------|--------|\r
| GET | 获取资源 | 是 |\r
| POST | 提交数据 | 否 |\r
| PUT | 更新资源 | 是 |\r
| DELETE | 删除资源 | 是 |\r
| HEAD | 获取响应头 | 是 |\r
| OPTIONS | 获取支持的方法 | 是 |\r
\r
## HTTP 状态码\r
\r
### 1xx - 信息响应\r
- \`100 Continue\`: 继续发送请求体\r
\r
### 2xx - 成功\r
- \`200 OK\`: 请求成功\r
- \`201 Created\`: 资源创建成功\r
- \`204 No Content\`: 无内容\r
\r
### 3xx - 重定向\r
- \`301 Moved Permanently\`: 永久重定向\r
- \`302 Found\`: 临时重定向\r
- \`304 Not Modified\`: 未修改（使用缓存）\r
\r
### 4xx - 客户端错误\r
- \`400 Bad Request\`: 请求错误\r
- \`401 Unauthorized\`: 未授权\r
- \`403 Forbidden\`: 禁止访问\r
- \`404 Not Found\`: 资源未找到\r
\r
### 5xx - 服务器错误\r
- \`500 Internal Server Error\`: 服务器错误\r
- \`502 Bad Gateway\`: 网关错误\r
- \`503 Service Unavailable\`: 服务不可用\r
\r
## HTTP 缓存\r
\r
### 强缓存\r
- \`Expires\`: 指定过期时间\r
- \`Cache-Control\`: 更灵活的缓存控制\r
\r
\`\`\`http\r
Cache-Control: max-age=3600, public\r
\`\`\`\r
\r
### 协商缓存\r
- \`Last-Modified\`: 最后修改时间\r
- \`ETag\`: 实体标签\r
\r
## HTTP/2 特性\r
\r
- **多路复用**: 一个连接多个请求\r
- **头部压缩**: HPACK 算法\r
- **服务器推送**: 主动推送资源\r
- **优先级**: 请求优先级控制`,tn=`---\r
title: "MCP 原理"\r
category: "Network"\r
tags: ["mcp", "tcp", "protocol"]\r
difficulty: "中等"\r
---\r
\r
# MCP 原理\r
\r
## 什么是 MCP\r
\r
MCP（Master Control Program）是 TCP/IP 协议栈中的核心组件，负责管理网络连接和数据传输。\r
\r
## TCP 三次握手\r
\r
\`\`\`\r
客户端          服务器\r
  |                |\r
  |----SYN------->|\r
  |                |\r
  |<---SYN+ACK----|\r
  |                |\r
  |----ACK------->|\r
  |                |\r
  连接建立\r
\`\`\`\r
\r
## TCP 四次挥手\r
\r
\`\`\`\r
客户端          服务器\r
  |                |\r
  |----FIN------->|\r
  |                |\r
  |<---ACK--------|\r
  |                |\r
  |<---FIN--------|\r
  |                |\r
  |----ACK------->|\r
  |                |\r
  连接关闭\r
\`\`\`\r
\r
## MCP 核心功能\r
\r
### 1. 连接管理\r
- 建立连接（三次握手）\r
- 断开连接（四次挥手）\r
- 连接复用\r
\r
### 2. 数据传输\r
- 分段与重组\r
- 可靠传输（重传机制）\r
- 流量控制\r
\r
### 3. 拥塞控制\r
- 慢启动\r
- 拥塞避免\r
- 快速重传/恢复\r
\r
## 状态机\r
\r
\`\`\`\r
LISTEN -> SYN_RCVD -> ESTABLISHED\r
                          |\r
                    FIN_WAIT_1 -> FIN_WAIT_2 -> TIME_WAIT -> CLOSED\r
                          |\r
                    CLOSING -> LAST_ACK -> CLOSED\r
\`\`\`\r
\r
## 关键参数\r
\r
- **MSS**: 最大分段大小\r
- **MTU**: 最大传输单元\r
- **TTL**: 生存时间\r
- **窗口大小**: 流量控制`,on=`---\r
title: "SSE 与轮询"\r
category: "Network"\r
tags: ["sse", "polling", "long-polling"]\r
difficulty: "中等"\r
---\r
\r
# SSE 与轮询\r
\r
## SSE（Server-Sent Events）\r
\r
### 什么是 SSE\r
SSE 是一种服务器向客户端推送数据的技术，基于 HTTP 协议。\r
\r
### SSE 是长连接\r
\`\`\`javascript\r
// 客户端\r
const eventSource = new EventSource('/api/stream');\r
\r
eventSource.onmessage = (event) => {\r
  console.log(event.data);\r
};\r
\r
// 服务端（Node.js）\r
app.get('/api/stream', (req, res) => {\r
  res.setHeader('Content-Type', 'text/event-stream');\r
  res.setHeader('Cache-Control', 'no-cache');\r
  res.setHeader('Connection', 'keep-alive');\r
  \r
  setInterval(() => {\r
    res.write(\`data: \${JSON.stringify({ time: new Date() })}\\n\\n\`);\r
  }, 1000);\r
});\r
\`\`\`\r
\r
## 轮询\r
\r
### 短轮询\r
\`\`\`javascript\r
function shortPoll() {\r
  fetch('/api/data')\r
    .then(res => res.json())\r
    .then(data => {\r
      console.log(data);\r
      setTimeout(shortPoll, 1000);\r
    });\r
}\r
\`\`\`\r
\r
### 长轮询\r
\`\`\`javascript\r
function longPoll() {\r
  fetch('/api/data')\r
    .then(res => res.json())\r
    .then(data => {\r
      console.log(data);\r
      longPoll();\r
    });\r
}\r
\`\`\`\r
\r
## SSE 与轮询对比\r
\r
| 特性 | SSE | 短轮询 | 长轮询 |\r
|------|-----|--------|--------|\r
| 连接方式 | 长连接 | 短连接 | 长连接 |\r
| 实时性 | 高 | 低 | 中 |\r
| 服务器压力 | 低 | 高 | 中 |\r
| 浏览器支持 | 良好 | 完美 | 完美 |\r
| 双向通信 | 否 | 否 | 否 |\r
\r
## 使用场景\r
\r
| 场景 | 推荐方式 |\r
|------|----------|\r
| 实时通知 | SSE |\r
| 简单数据更新 | 短轮询 |\r
| 低延迟要求 | 长轮询 |\r
| 双向通信 | WebSocket |`,an=`---\r
title: "XSS 攻击与防护"\r
category: "Network"\r
tags: ["xss", "security", "attack"]\r
difficulty: "中等"\r
---\r
\r
# XSS 攻击与防护\r
\r
## 什么是 XSS\r
\r
XSS（Cross-Site Scripting）是一种注入攻击，攻击者在网页中注入恶意脚本，当用户访问时脚本会在浏览器中执行。\r
\r
## XSS 类型\r
\r
### 1. 存储型 XSS\r
\r
攻击脚本存储在服务器端数据库中：\r
\r
\`\`\`javascript\r
// 用户提交评论\r
<input type="text" name="comment" value="<script>alert('XSS')<\/script>">\r
\r
// 服务器存储后，其他用户访问时执行\r
\`\`\`\r
\r
### 2. 反射型 XSS\r
\r
攻击脚本通过 URL 参数传递：\r
\r
\`\`\`javascript\r
// URL: http://example.com/search?keyword=<script>alert('XSS')<\/script>\r
\r
// 服务器直接渲染 URL 参数\r
<div>搜索结果: <script>alert('XSS')<\/script></div>\r
\`\`\`\r
\r
### 3. DOM 型 XSS\r
\r
攻击脚本通过 DOM 操作执行：\r
\r
\`\`\`javascript\r
// JavaScript 直接使用 URL 参数\r
const keyword = new URLSearchParams(location.search).get('keyword');\r
document.getElementById('result').innerHTML = keyword;\r
\`\`\`\r
\r
## XSS 防护\r
\r
### 1. 输入过滤\r
\r
\`\`\`javascript\r
function sanitize(input) {\r
  return input\r
    .replace(/&/g, '&amp;')\r
    .replace(/</g, '&lt;')\r
    .replace(/>/g, '&gt;')\r
    .replace(/"/g, '&quot;')\r
    .replace(/'/g, '&#x27;');\r
}\r
\`\`\`\r
\r
### 2. 输出转义\r
\r
\`\`\`javascript\r
// 使用 textContent 代替 innerHTML\r
document.getElementById('result').textContent = userInput;\r
\r
// React 自动转义\r
<div>{userInput}</div>\r
\r
// Vue 自动转义\r
<span>{{ userInput }}</span>\r
\`\`\`\r
\r
### 3. CSP（内容安全策略）\r
\r
\`\`\`http\r
Content-Security-Policy: default-src 'self'; script-src 'self' 'strict-dynamic'\r
\`\`\`\r
\r
### 4. 设置 HttpOnly Cookie\r
\r
\`\`\`javascript\r
document.cookie = 'session=abc123; HttpOnly';\r
\`\`\`\r
\r
### 5. 使用 DOMPurify\r
\r
\`\`\`javascript\r
import DOMPurify from 'dompurify';\r
\r
const clean = DOMPurify.sanitize(userInput);\r
document.getElementById('content').innerHTML = clean;\r
\`\`\`\r
\r
## XSS 防护对比\r
\r
| 方法 | 适用场景 | 安全性 |\r
|------|----------|--------|\r
| 输入过滤 | 用户输入 | 中 |\r
| 输出转义 | 页面渲染 | 高 |\r
| CSP | 全站防护 | 高 |\r
| HttpOnly | Cookie 保护 | 高 |\r
| DOMPurify | 富文本内容 | 高 |\r
\r
## 最佳实践\r
\r
1. **默认转义**: 使用框架自动转义机制\r
2. **验证输入**: 对用户输入进行严格验证\r
3. **设置 CSP**: 配置内容安全策略\r
4. **使用安全库**: 使用 DOMPurify 等安全库处理富文本`,sn=`---\r
title: "职业规划回答技巧"\r
category: "Other"\r
tags: ["interview", "career", "plan"]\r
difficulty: "简单"\r
---\r
\r
# 职业规划回答技巧\r
\r
## 回答原则\r
\r
### 1. 目标明确\r
\`\`\`\r
不好：我还没有明确的规划\r
好：我希望在3年内成长为高级前端工程师\r
\`\`\`\r
\r
### 2. 与公司对齐\r
\`\`\`\r
不好：我想创业\r
好：我希望能够在贵公司的平台上实现职业目标\r
\`\`\`\r
\r
### 3. 分阶段规划\r
\`\`\`\r
不好：我想做技术总监\r
好：短期提升技术能力，中期带团队，长期做架构\r
\`\`\`\r
\r
## 回答模板\r
\r
\`\`\`\r
我的职业规划分为三个阶段：\r
\r
短期（1-2年）：\r
深入学习XX技术，提升技术深度，成为团队的技术骨干。\r
\r
中期（3-5年）：\r
积累项目管理经验，带领团队完成更大的项目，\r
成长为技术负责人。\r
\r
长期（5年以上）：\r
在技术领域有更深的造诣，能够引领技术方向，\r
成为行业内的技术专家。\r
\r
我了解到贵公司在XX领域有很强的技术实力，\r
希望能够加入团队，共同成长。\r
\`\`\`\r
\r
## 常见变体\r
\r
### 应届毕业生\r
\`\`\`\r
作为应届毕业生，我希望能够：\r
\r
1. 第一阶段（1年）：打好基础，熟悉公司业务和技术栈\r
2. 第二阶段（2-3年）：独立负责模块开发，成为核心开发\r
3. 第三阶段（3年以上）：参与技术决策，推动技术创新\r
\r
贵公司的XX技术方向正是我感兴趣的，\r
希望能够在这里实现我的职业目标。\r
\`\`\`\r
\r
### 转行者\r
\`\`\`\r
我之前从事XX行业，现在希望转型技术领域。\r
\r
短期（1年）：快速学习，补齐技术短板\r
中期（2-3年）：成为合格的前端工程师\r
长期（3年以上）：在技术领域深耕，实现职业价值\r
\r
我相信我的XX背景能够为团队带来独特的视角。\r
\`\`\`\r
\r
## 注意事项\r
\r
| 禁忌 | 推荐 |\r
|------|------|\r
| 目标模糊 | 目标明确可量化 |\r
| 频繁跳槽 | 稳定性和成长并重 |\r
| 薪资导向 | 发展导向 |\r
| 不切实际 | 合理可行 |`,cn=`---\r
title: "Git 常见操作"\r
category: "Other"\r
tags: ["git", "version-control", "workflow"]\r
difficulty: "简单"\r
---\r
\r
# Git 常见操作\r
\r
## 基础操作\r
\r
### 1. 初始化仓库\r
\`\`\`bash\r
git init\r
git clone <url>\r
\`\`\`\r
\r
### 2. 添加文件\r
\`\`\`bash\r
git add <file>\r
git add .\r
git add -A\r
\`\`\`\r
\r
### 3. 提交\r
\`\`\`bash\r
git commit -m "commit message"\r
git commit -am "commit message"\r
git commit --amend\r
\`\`\`\r
\r
### 4. 推送\r
\`\`\`bash\r
git push origin main\r
git push -u origin main\r
\`\`\`\r
\r
## 分支操作\r
\r
### 1. 创建分支\r
\`\`\`bash\r
git branch <branch-name>\r
git checkout -b <branch-name>\r
git switch -c <branch-name>\r
\`\`\`\r
\r
### 2. 切换分支\r
\`\`\`bash\r
git checkout <branch-name>\r
git switch <branch-name>\r
\`\`\`\r
\r
### 3. 合并分支\r
\`\`\`bash\r
git merge <branch-name>\r
git rebase <branch-name>\r
\`\`\`\r
\r
### 4. 删除分支\r
\`\`\`bash\r
git branch -d <branch-name>\r
git branch -D <branch-name>\r
\`\`\`\r
\r
## 撤销操作\r
\r
### 1. 撤销工作区修改\r
\`\`\`bash\r
git checkout -- <file>\r
git restore <file>\r
\`\`\`\r
\r
### 2. 撤销暂存区\r
\`\`\`bash\r
git reset HEAD <file>\r
git restore --staged <file>\r
\`\`\`\r
\r
### 3. 撤销提交\r
\`\`\`bash\r
git reset --soft HEAD^\r
git reset --mixed HEAD^\r
git reset --hard HEAD^\r
\`\`\`\r
\r
## 查看历史\r
\r
\`\`\`bash\r
git log\r
git log --oneline\r
git log --graph\r
git log --all\r
git blame <file>\r
\`\`\`\r
\r
## 远程操作\r
\r
\`\`\`bash\r
git remote -v\r
git remote add origin <url>\r
git fetch origin\r
git pull origin main\r
git push origin --delete <branch-name>\r
\`\`\`\r
\r
## 常见问题\r
\r
### 1. 冲突解决\r
\`\`\`bash\r
# 查看冲突文件\r
git status\r
\r
# 手动解决冲突后\r
git add <file>\r
git commit\r
\`\`\`\r
\r
### 2. 丢弃本地修改\r
\`\`\`bash\r
git checkout .\r
git clean -fd\r
\`\`\`\r
\r
### 3. 回退到指定版本\r
\`\`\`bash\r
git reset --hard <commit-hash>\r
git push -f origin main\r
\`\`\`\r
\r
## 工作流\r
\r
### Git Flow\r
\`\`\`bash\r
git checkout develop\r
git checkout -b feature/xxx\r
# 开发完成\r
git checkout develop\r
git merge feature/xxx\r
git branch -d feature/xxx\r
\`\`\`\r
\r
### GitHub Flow\r
\`\`\`bash\r
git checkout -b feature/xxx\r
# 开发完成\r
git push origin feature/xxx\r
# 创建 Pull Request\r
# 合并后删除分支\r
\`\`\``,ln=`---\r
title: "离职原因回答技巧"\r
category: "Other"\r
tags: ["interview", "resign", "behavioral"]\r
difficulty: "简单"\r
---\r
\r
# 离职原因回答技巧\r
\r
## 回答原则\r
\r
### 1. 诚实但不抱怨\r
\`\`\`\r
不好：公司管理混乱，领导能力差\r
好：希望寻求更大的发展空间\r
\`\`\`\r
\r
### 2. 聚焦未来而非过去\r
\`\`\`\r
不好：前公司工资太低\r
好：希望在更有挑战性的环境中成长\r
\`\`\`\r
\r
### 3. 保持积极态度\r
\`\`\`\r
不好：团队氛围很差\r
好：希望加入更有活力的团队\r
\`\`\`\r
\r
## 常见离职原因\r
\r
### 1. 职业发展\r
\`\`\`\r
我在当前公司已经工作了X年，学到了很多，但感觉发展空间有限。\r
我希望能够接触到更多新技术和新项目，提升自己的技术能力。\r
\`\`\`\r
\r
### 2. 寻求挑战\r
\`\`\`\r
当前工作内容比较稳定，我希望能够接受更大的挑战，\r
在更有创新性的项目中发挥自己的价值。\r
\`\`\`\r
\r
### 3. 公司搬迁\r
\`\`\`\r
由于公司搬迁到了距离我居住地较远的地方，\r
通勤时间大大增加，所以考虑换一份工作。\r
\`\`\`\r
\r
### 4. 团队变动\r
\`\`\`\r
原来的团队核心成员陆续离开，\r
我希望能够加入一个更稳定的团队。\r
\`\`\`\r
\r
### 5. 个人原因\r
\`\`\`\r
由于家庭原因，我需要换一个城市发展，\r
所以不得不离开当前公司。\r
\`\`\`\r
\r
## 回答模板\r
\r
\`\`\`\r
我在当前公司工作了X年，期间参与了XX项目，\r
负责XX工作，学到了很多宝贵的经验。\r
\r
但考虑到职业发展，我希望能够XX，\r
而贵公司在XX方面正好符合我的期望，\r
所以希望能够加入贵公司。\r
\`\`\`\r
\r
## 注意事项\r
\r
| 禁忌 | 推荐 |\r
|------|------|\r
| 抱怨前公司 | 感谢前公司的培养 |\r
| 说前同事坏话 | 强调团队合作的重要性 |\r
| 只谈薪资 | 强调发展空间 |\r
| 过于负面 | 保持积极乐观 |`,pn=`---\r
title: "自我介绍回答技巧"\r
category: "Other"\r
tags: ["interview", "self-intro", "behavioral"]\r
difficulty: "简单"\r
---\r
\r
# 自我介绍回答技巧\r
\r
## 经典框架\r
\r
### 1. 三段式结构\r
\`\`\`\r
1. 基础信息：姓名、背景、年限\r
2. 核心亮点：项目经验、技术能力、成就\r
3. 求职动机：为什么来这家公司、职业规划\r
\`\`\`\r
\r
### 2. STAR 法则\r
- **Situation**: 背景情况\r
- **Task**: 任务目标\r
- **Action**: 行动措施\r
- **Result**: 结果成果\r
\r
## 回答示例\r
\r
\`\`\`\r
面试官您好，我叫张三，毕业于XX大学计算机专业，\r
有3年前端开发经验，主要技术栈是React和TypeScript。\r
\r
在上一家公司，我负责了XX电商平台的前端重构项目，\r
带领3人团队，从0到1搭建了基于微前端架构的系统，\r
将首屏加载时间优化了40%，用户体验评分提升了30%。\r
\r
我对贵公司在XX领域的技术方向很感兴趣，\r
希望能够加入团队，在XX技术方向上继续深耕，\r
同时为公司创造价值。\r
\`\`\`\r
\r
## 注意事项\r
\r
### 避免的问题\r
- ❌ 流水账式叙述，没有重点\r
- ❌ 内容过于冗长，超过2分钟\r
- ❌ 只说职责，不说成果\r
- ❌ 信息虚假或夸大\r
\r
### 加分项\r
- ✅ 量化成果（数据说话）\r
- ✅ 突出技术深度和广度\r
- ✅ 展示学习能力和主动性\r
- ✅ 表达对公司的了解和兴趣\r
\r
## 常见变体\r
\r
### 应届毕业生\r
\`\`\`\r
面试官您好，我叫李四，今年毕业于XX大学。\r
\r
在校期间，我参与了XX开源项目的开发，\r
负责前端模块，获得了导师的好评。\r
\r
我通过自学掌握了React、Vue等主流框架，\r
并有XX个个人项目经验，包括XX和XX。\r
\r
我希望能够加入一家技术氛围浓厚的公司，\r
从基础做起，不断提升自己的技术能力。\r
\`\`\`\r
\r
### 转行者\r
\`\`\`\r
面试官您好，我叫王五，之前从事XX行业，\r
有XX年经验，现在希望转型前端开发。\r
\r
过去一年，我系统学习了HTML、CSS、JavaScript，\r
完成了XX个实战项目，包括XX和XX。\r
\r
我具备XX行业的业务理解能力，\r
同时拥有扎实的技术基础和强烈的学习热情。\r
\r
希望能够加入贵公司，发挥我的综合优势。\r
\`\`\``,un=`---\r
title: "Vue 组件间通信"\r
category: "Vue"\r
tags: ["component", "communication", "props"]\r
difficulty: "中等"\r
---\r
\r
# Vue 组件间通信\r
\r
## 父子组件通信\r
\r
### 1. props / emit\r
\r
**父组件传子组件（props）**：\r
\`\`\`javascript\r
// Parent.vue\r
<Child :name="parentName" :age="25" />\r
\r
// Child.vue\r
export default {\r
  props: {\r
    name: {\r
      type: String,\r
      required: true\r
    },\r
    age: {\r
      type: Number,\r
      default: 18\r
    }\r
  }\r
};\r
\`\`\`\r
\r
**子组件传父组件（emit）**：\r
\`\`\`javascript\r
// Child.vue\r
this.$emit('update:name', 'New Name');\r
this.$emit('custom-event', payload);\r
\r
// Parent.vue\r
<Child @update:name="handleUpdate" @custom-event="handleCustom" />\r
\`\`\`\r
\r
### 2. v-model\r
\r
\`\`\`javascript\r
// Child.vue\r
export default {\r
  props: ['modelValue'],\r
  emits: ['update:modelValue'],\r
  methods: {\r
    updateValue(value) {\r
      this.$emit('update:modelValue', value);\r
    }\r
  }\r
};\r
\r
// Parent.vue\r
<Child v-model="parentValue" />\r
\`\`\`\r
\r
## 兄弟组件通信\r
\r
### 1. 事件总线（Event Bus）\r
\r
\`\`\`javascript\r
// bus.js\r
import Vue from 'vue';\r
export const bus = new Vue();\r
\r
// ComponentA.vue\r
bus.$emit('message', 'Hello');\r
\r
// ComponentB.vue\r
bus.$on('message', (msg) => {\r
  console.log(msg);\r
});\r
\`\`\`\r
\r
### 2. 通过父组件中转\r
\r
\`\`\`javascript\r
// Parent.vue\r
<ChildA @update="handleUpdate" />\r
<ChildB :data="sharedData" />\r
\r
// ChildA.vue\r
this.$emit('update', data);\r
\r
// ChildB.vue\r
props: ['data']\r
\`\`\`\r
\r
## 跨层级通信\r
\r
### 1. provide / inject\r
\r
\`\`\`javascript\r
// Parent.vue\r
export default {\r
  provide() {\r
    return {\r
      theme: 'dark',\r
      user: this.user\r
    };\r
  }\r
};\r
\r
// GrandChild.vue\r
export default {\r
  inject: ['theme', 'user']\r
};\r
\`\`\`\r
\r
### 2. Vuex / Pinia\r
\r
\`\`\`javascript\r
// store.js\r
import { createStore } from 'vuex';\r
export default createStore({\r
  state: { count: 0 },\r
  mutations: {\r
    increment(state) {\r
      state.count++;\r
    }\r
  }\r
});\r
\r
// Component.vue\r
this.$store.commit('increment');\r
console.log(this.$store.state.count);\r
\`\`\`\r
\r
## 通信方式对比\r
\r
| 方式 | 适用场景 | 复杂度 |\r
|------|----------|--------|\r
| props / emit | 父子组件 | 低 |\r
| v-model | 表单双向绑定 | 低 |\r
| Event Bus | 兄弟组件 | 中 |\r
| provide / inject | 跨层级 | 中 |\r
| Vuex / Pinia | 全局状态 | 高 |\r
\r
## 最佳实践\r
\r
- **父子通信**: 使用 \`props\` 和 \`emit\`\r
- **兄弟通信**: 使用 Event Bus 或父组件中转\r
- **跨层级**: 使用 \`provide/inject\` 或状态管理\r
- **全局状态**: 使用 Pinia`,dn=`---\r
title: "Vue3 响应式原理"\r
category: "Vue"\r
tags: ["reactivity", "proxy", "effect"]\r
difficulty: "高"\r
---\r
\r
# Vue3 响应式原理\r
\r
## 核心概念\r
\r
### 1. reactive\r
创建响应式对象：\r
\r
\`\`\`javascript\r
import { reactive } from 'vue';\r
\r
const state = reactive({\r
  count: 0,\r
  name: 'Alice'\r
});\r
\r
state.count++; // 触发更新\r
\`\`\`\r
\r
### 2. ref\r
创建响应式基本类型：\r
\r
\`\`\`javascript\r
import { ref } from 'vue';\r
\r
const count = ref(0);\r
count.value++; // 触发更新\r
\`\`\`\r
\r
### 3. computed\r
创建计算属性：\r
\r
\`\`\`javascript\r
import { ref, computed } from 'vue';\r
\r
const count = ref(0);\r
const doubleCount = computed(() => count.value * 2);\r
\`\`\`\r
\r
### 4. watch\r
监听响应式数据变化：\r
\r
\`\`\`javascript\r
import { ref, watch } from 'vue';\r
\r
const count = ref(0);\r
watch(count, (newValue, oldValue) => {\r
  console.log(\`count changed from \${oldValue} to \${newValue}\`);\r
});\r
\`\`\`\r
\r
### 5. watchEffect\r
自动追踪依赖并执行副作用：\r
\r
\`\`\`javascript\r
import { ref, watchEffect } from 'vue';\r
\r
const count = ref(0);\r
watchEffect(() => {\r
  console.log(\`count is \${count.value}\`);\r
});\r
\`\`\`\r
\r
## 实现原理\r
\r
### track - 依赖收集\r
\`\`\`javascript\r
const targetMap = new WeakMap();\r
\r
function track(target, key) {\r
  const effect = activeEffect;\r
  if (effect) {\r
    let depsMap = targetMap.get(target);\r
    if (!depsMap) {\r
      depsMap = new Map();\r
      targetMap.set(target, depsMap);\r
    }\r
    let deps = depsMap.get(key);\r
    if (!deps) {\r
      deps = new Set();\r
      depsMap.set(key, deps);\r
    }\r
    deps.add(effect);\r
    effect.deps.push(deps);\r
  }\r
}\r
\`\`\`\r
\r
### trigger - 触发更新\r
\`\`\`javascript\r
function trigger(target, key) {\r
  const depsMap = targetMap.get(target);\r
  if (!depsMap) return;\r
  \r
  const deps = depsMap.get(key);\r
  if (deps) {\r
    const effects = [...deps];\r
    effects.forEach(effect => {\r
      if (effect.scheduler) {\r
        effect.scheduler();\r
      } else {\r
        effect();\r
      }\r
    });\r
  }\r
}\r
\`\`\`\r
\r
## ref 与 reactive 的区别\r
\r
| 特性 | ref | reactive |\r
|------|-----|----------|\r
| 适用类型 | 基本类型、对象 | 对象 |\r
| 访问方式 | \`.value\` | 直接访问 |\r
| 深层响应式 | 需要 \`ref({})\` | 自动深层 |\r
| 解构赋值 | 不会丢失响应式 | 会丢失响应式 |\r
\r
## 最佳实践\r
\r
- **基本类型**: 使用 \`ref\`\r
- **对象类型**: 使用 \`reactive\`\r
- **复杂计算**: 使用 \`computed\`\r
- **数据监听**: 使用 \`watch\` 或 \`watchEffect\``,mn=`---\r
title: "Vue Mixins 的使用与替代方案"\r
category: "Vue"\r
tags: ["mixins", "composition", "reuse"]\r
difficulty: "中等"\r
---\r
\r
# Vue Mixins 的使用与替代方案\r
\r
## 什么是 Mixins\r
\r
Mixins 是一种复用组件选项的方式，可以将可复用的逻辑提取到独立的对象中。\r
\r
## 基本用法\r
\r
\`\`\`javascript\r
// myMixin.js\r
export const myMixin = {\r
  data() {\r
    return {\r
      count: 0\r
    };\r
  },\r
  methods: {\r
    increment() {\r
      this.count++;\r
    }\r
  },\r
  mounted() {\r
    console.log('mixin mounted');\r
  }\r
};\r
\r
// Component.vue\r
import { myMixin } from './myMixin';\r
export default {\r
  mixins: [myMixin],\r
  mounted() {\r
    console.log('component mounted');\r
  }\r
};\r
\`\`\`\r
\r
## Mixins 的问题\r
\r
### 1. 命名冲突\r
\`\`\`javascript\r
// MixinA\r
data() {\r
  return { name: 'MixinA' };\r
}\r
\r
// MixinB  \r
data() {\r
  return { name: 'MixinB' };\r
}\r
\r
// Component - name 会被覆盖\r
mixins: [MixinA, MixinB]\r
\`\`\`\r
\r
### 2. 来源不清晰\r
\`\`\`javascript\r
// 无法区分 count 来自哪里\r
this.count++;\r
\`\`\`\r
\r
### 3. 隐式依赖\r
\`\`\`javascript\r
// Mixin 依赖组件中定义的属性\r
methods: {\r
  save() {\r
    // 假设组件有 api 方法\r
    this.api.save(this.data);\r
  }\r
}\r
\`\`\`\r
\r
## Composition API 替代方案\r
\r
\`\`\`javascript\r
// useCounter.js\r
import { ref } from 'vue';\r
\r
export function useCounter(initialValue = 0) {\r
  const count = ref(initialValue);\r
  \r
  const increment = () => {\r
    count.value++;\r
  };\r
  \r
  const decrement = () => {\r
    count.value--;\r
  };\r
  \r
  return {\r
    count,\r
    increment,\r
    decrement\r
  };\r
}\r
\r
// Component.vue\r
import { useCounter } from './useCounter';\r
\r
export default {\r
  setup() {\r
    const { count, increment, decrement } = useCounter(0);\r
    \r
    return {\r
      count,\r
      increment,\r
      decrement\r
    };\r
  }\r
};\r
\`\`\`\r
\r
## Mixins vs Composition API\r
\r
| 特性 | Mixins | Composition API |\r
|------|--------|-----------------|\r
| 命名冲突 | 容易冲突 | 显式命名，无冲突 |\r
| 来源追溯 | 困难 | 清晰可追溯 |\r
| 依赖关系 | 隐式依赖 | 显式依赖 |\r
| 代码组织 | 按选项组织 | 按功能组织 |\r
| TypeScript | 支持有限 | 原生支持 |\r
\r
## 最佳实践\r
\r
- **新项目**: 使用 Composition API\r
- **旧项目**: 逐步迁移到 Composition API\r
- **简单逻辑**: 使用 Mixins（但不推荐）\r
- **复杂逻辑**: 使用 Composition API 的 composables`,gn=`---\r
title: "Vue2 与 Vue3 的区别"\r
category: "Vue"\r
tags: ["vue2", "vue3", "comparison"]\r
difficulty: "中等"\r
---\r
\r
# Vue2 与 Vue3 的区别\r
\r
## 响应式原理\r
\r
### Vue2 - Object.defineProperty\r
\`\`\`javascript\r
function defineReactive(obj, key, value) {\r
  Object.defineProperty(obj, key, {\r
    get() {\r
      Dep.target && dep.add(Dep.target);\r
      return value;\r
    },\r
    set(newValue) {\r
      if (newValue !== value) {\r
        value = newValue;\r
        dep.notify();\r
      }\r
    }\r
  });\r
}\r
\`\`\`\r
**局限性**：\r
- 无法检测对象新增属性\r
- 无法检测数组索引和长度变化\r
- 需要使用 \`Vue.set()\` 或 \`this.$set()\`\r
\r
### Vue3 - Proxy\r
\`\`\`javascript\r
function reactive(target) {\r
  return new Proxy(target, {\r
    get(target, key, receiver) {\r
      track(target, key);\r
      const result = Reflect.get(target, key, receiver);\r
      if (isObject(result)) {\r
        return reactive(result);\r
      }\r
      return result;\r
    },\r
    set(target, key, value, receiver) {\r
      const result = Reflect.set(target, key, value, receiver);\r
      trigger(target, key);\r
      return result;\r
    }\r
  });\r
}\r
\`\`\`\r
**优势**：\r
- 可以检测对象新增属性\r
- 可以检测数组索引和长度变化\r
- 性能更好\r
\r
## 组合式 API\r
\r
### Vue2 - Options API\r
\`\`\`javascript\r
export default {\r
  data() {\r
    return { count: 0 };\r
  },\r
  methods: {\r
    increment() {\r
      this.count++;\r
    }\r
  },\r
  computed: {\r
    doubleCount() {\r
      return this.count * 2;\r
    }\r
  }\r
};\r
\`\`\`\r
\r
### Vue3 - Composition API\r
\`\`\`javascript\r
import { ref, computed } from 'vue';\r
\r
export default {\r
  setup() {\r
    const count = ref(0);\r
    \r
    const increment = () => {\r
      count.value++;\r
    };\r
    \r
    const doubleCount = computed(() => count.value * 2);\r
    \r
    return {\r
      count,\r
      increment,\r
      doubleCount\r
    };\r
  }\r
};\r
\`\`\`\r
\r
## 其他区别\r
\r
| 特性 | Vue2 | Vue3 |\r
|------|------|------|\r
| 生命周期 | beforeCreate, created | setup() |\r
| 模板根节点 | 只能有一个根节点 | 支持多个根节点 |\r
| 碎片 | 需要额外包裹 | 原生支持 |\r
| 响应式 | Object.defineProperty | Proxy |\r
| 性能 | 中等 | 更好 |\r
| TypeScript | 支持有限 | 原生支持 |\r
\r
## 迁移建议\r
\r
1. 逐步迁移，使用 \`@vue/composition-api\` 兼容包\r
2. 优先迁移状态管理和复杂逻辑\r
3. 注意生命周期钩子的变化\r
4. 更新第三方依赖库`,fn=`---\r
title: "面试题目录"\r
description: "前端面试知识库目录，方便查找和定位"\r
version: "1.0.0"\r
updatedAt: "2026-06-24"\r
---\r
\r
# 面试题目录\r
\r
欢迎来到前端面试知识库！本目录提供完整的知识体系导航，帮助你快速定位所需内容。\r
\r
---\r
\r
## 目录结构\r
\r
\`\`\`\r
knowledgeBase/\r
├── JavaScript/    # JavaScript/TypeScript 核心知识\r
├── CSS/           # CSS/样式相关知识\r
├── Network/       # 计算机网络相关知识\r
├── Build/         # 构建打包相关知识\r
├── React/         # React 框架相关知识\r
├── Vue/           # Vue 框架相关知识\r
├── SystemDesign/  # 系统设计相关知识\r
├── Algorithms/    # 算法与数据结构\r
├── Architecture/  # 架构设计相关知识\r
├── Browser/       # 浏览器原理相关知识\r
├── Security/      # 安全相关知识\r
├── Performance/   # 性能优化相关知识\r
├── AI/            # AI 相关知识（大模型、Prompt Engineering）\r
└── Other/         # 主观题（自我介绍、职业规划等）\r
\`\`\`\r
\r
---\r
\r
## 分类导航\r
\r
### JavaScript/TypeScript\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [闭包的概念与应用](JavaScript/closure.md) | 中等 | closure, scope, lexical |\r
| [深拷贝与浅拷贝](JavaScript/deep-shallow-copy.md) | 中等 | copy, deep, shallow |\r
| [this 绑定机制](JavaScript/this-binding.md) | 中等 | this, bind, call, apply |\r
| [var、let、const 的区别](JavaScript/var-let-const.md) | 简单 | var, let, const, scope |\r
| [Reflect 对象详解](JavaScript/reflect.md) | 中等 | reflect, proxy, meta-programming |\r
| [防抖与节流](JavaScript/debounce-throttle.md) | 中等 | debounce, throttle, optimization |\r
| [事件循环与异步机制](JavaScript/event-loop.md) | 中等 | event-loop, async, microtask, macrotask |\r
| [虚拟列表实现](JavaScript/virtual-list.md) | 高 | virtual-list, performance, scroll |\r
| [Node.js 能做什么](JavaScript/nodejs-capabilities.md) | 中等 | nodejs, backend, server |\r
| [前端国际化实现](JavaScript/i18n.md) | 中等 | i18n, internationalization, localization |\r
\r
### CSS\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [Flexbox 布局详解](CSS/flexbox-layout.md) | 简单 | flexbox, layout, responsive |\r
| [BFC 块级格式化上下文](CSS/bfc.md) | 中等 | bfc, layout, float |\r
| [重排与重绘](CSS/reflow-repaint.md) | 中等 | reflow, repaint, performance |\r
| [隐藏元素的方式](CSS/hide-element.md) | 简单 | hide, visibility, display |\r
| [元素居中的方式](CSS/element-centering.md) | 简单 | centering, layout, flexbox |\r
\r
### Network\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [HTTP 协议详解](Network/http-protocol.md) | 中等 | http, protocol, web |\r
| [HTTP 缓存机制](Network/http-cache.md) | 中等 | http, cache, performance |\r
| [跨域问题与解决方案](Network/cors.md) | 中等 | cors, cross-origin, proxy |\r
| [XSS 攻击与防护](Network/xss-attack.md) | 中等 | xss, security, attack |\r
| [SSE 与轮询](Network/sse-polling.md) | 中等 | sse, polling, long-polling |\r
| [MCP 原理](Network/mcp-principle.md) | 中等 | mcp, tcp, protocol |\r
\r
### Build\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [Webpack Chunk 配置](Build/webpack-chunk.md) | 中等 | webpack, chunk, splitting |\r
| [前端打包优化](Build/build-optimization.md) | 中等 | optimization, bundle, performance |\r
\r
### React\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
\r
### Vue\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [Vue2 与 Vue3 的区别](Vue/vue2-vs-vue3.md) | 中等 | vue2, vue3, comparison |\r
| [Vue3 响应式原理](Vue/reactivity-principle.md) | 高 | reactivity, proxy, effect |\r
| [Vue 组件间通信](Vue/component-communication.md) | 中等 | component, communication, props |\r
| [Vue Mixins 的使用与替代方案](Vue/vue-mixins.md) | 中等 | mixins, composition, reuse |\r
\r
### SystemDesign\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
\r
### Algorithms\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
\r
### Architecture\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
\r
### Browser\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [输入 URL 后的流程](Browser/url-lifecycle.md) | 中等 | url, browser, network |\r
\r
### Security\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
\r
### Performance\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
\r
### AI\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [Prompt Engineering 提示词工程](AI/prompt-engineering.md) | 中等 | prompt, llm, chatgpt |\r
\r
### Other\r
\r
| 文档 | 难度 | 标签 |\r
|------|------|------|\r
| [自我介绍回答技巧](Other/self-introduction.md) | 简单 | interview, self-intro, behavioral |\r
| [离职原因回答技巧](Other/resign-reasons.md) | 简单 | interview, resign, behavioral |\r
| [职业规划回答技巧](Other/career-plan.md) | 简单 | interview, career, plan |\r
| [Git 常见操作](Other/git-operations.md) | 简单 | git, version-control, workflow |\r
\r
---\r
\r
## 难度等级说明\r
\r
- **简单**: 基础概念，适合入门和复习\r
- **中等**: 核心知识点，面试高频题\r
- **高**: 进阶内容，考察深度和广度\r
\r
---\r
\r
## 更新日志\r
\r
- **2026-06-24**: 识别 todo/images 下的图片，创建大量知识库文档，包括 JavaScript、CSS、Vue、Network、Build、Other 等分类\r
`,hn=/^---\s*\n([\s\S]*?)\n---\s*\n/;function vn(n){const r={};return n.split(`
`).forEach(e=>{const s=e.match(/^(\w+):\s*(.+)$/);if(s){const i=s[1];let o=s[2].trim();o.startsWith('"')&&o.endsWith('"')?o=o.slice(1,-1):o.startsWith("[")&&o.endsWith("]")&&(o=JSON.parse(o)),r[i]=o}}),r}function bn(n){const r=n.match(hn);let t={title:"",category:"",tags:[],difficulty:"medium",filePath:"",lastModified:""},e=n;if(r){const i=vn(r[1]);t={title:i.title||"",category:i.category||"",tags:i.tags||[],difficulty:i.difficulty||"medium",filePath:"",lastModified:""},e=n.slice(r[0].length)}const s=yn(e);return{meta:t,content:e,toc:s}}function yn(n){const r=/^(#{2,3})\s+(.+)$/gm,t=[];let e;for(;(e=r.exec(n))!==null;){const s=e[1].length,i=e[2].trim(),o=i.toLowerCase().replace(/[^a-z0-9]+/g,"-");t.push({id:o,text:i,level:s})}return t}function xn(n){const r=n.split(`
`),t=[];let e="";return r.forEach(s=>{const i=s.match(/^###\s+(.+)$/);if(i){e=i[1];return}const o=s.match(/^\|\s*\[(.+?)\]\((.+?)\)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/);if(o){const d=o[1],p=o[2],u=o[3].trim(),b={简单:"easy",中等:"medium",高:"hard"}[u]||"medium",y=o[4].split(",").map(v=>v.trim()).filter(Boolean);t.push({title:d,category:e,tags:y,difficulty:b,filePath:p,lastModified:""})}}),t}function Sn(n,r,t){if(!r.trim())return[];const e=r.toLowerCase(),s=[];return n.forEach(i=>{let o=0;const d=[];i.title.toLowerCase().includes(e)&&(o+=50,d.push({text:i.title,highlight:j(i.title,e)})),i.tags.forEach(u=>{u.toLowerCase().includes(e)&&(o+=20,d.push({text:u,highlight:j(u,e)}))});const p=t.get(i.filePath);if(p){const u=p.toLowerCase();if(u.includes(e)){o+=30;const g=u.indexOf(e),b=Math.max(0,g-30),y=Math.min(p.length,g+e.length+30),v=p.slice(b,y);d.push({text:v,highlight:j(v,e)})}}o>0&&s.push({document:i,matches:d,score:o})}),s.sort((i,o)=>o.score-i.score)}function j(n,r){const t=new RegExp(`(${r})`,"gi");return n.replace(t,'<mark class="bg-accent-500 text-white px-0.5 rounded">$1</mark>')}const C="knowledge_base_favorites";function x(){try{const n=localStorage.getItem(C);return n?JSON.parse(n):[]}catch{return[]}}function wn(n){const r=x();r.some(e=>e.filePath===n.filePath)||(r.push(n),localStorage.setItem(C,JSON.stringify(r)))}function jn(n){const r=x().filter(t=>t.filePath!==n);localStorage.setItem(C,JSON.stringify(r))}function T(n){return x().some(r=>r.filePath===n)}const Cn="FaceNoteReadStats",m="readStats",kn=1;function k(){return new Promise((n,r)=>{const t=indexedDB.open(Cn,kn);t.onupgradeneeded=()=>{const e=t.result;e.objectStoreNames.contains(m)||e.createObjectStore(m,{keyPath:"filePath"})},t.onsuccess=()=>n(t.result),t.onerror=()=>r(new Error("IndexedDB 打开失败"))})}async function _n(){try{const n=await k();return await new Promise((r,t)=>{const i=n.transaction(m,"readonly").objectStore(m).getAll();i.onsuccess=()=>r(i.result),i.onerror=()=>t(new Error("读取阅读统计失败"))})}catch{return[]}}async function Pn(n){try{const r=await k();return await new Promise((t,e)=>{const o=r.transaction(m,"readonly").objectStore(m).get(n);o.onsuccess=()=>t(o.result??void 0),o.onerror=()=>e(new Error("读取阅读统计失败"))})}catch{return}}async function Tn(n){const r=await k(),t=await Pn(n),e=((t==null?void 0:t.totalReadCount)??0)+1;return await new Promise((s,i)=>{const p=r.transaction(m,"readwrite").objectStore(m).put({filePath:n,totalReadCount:e,lastReadTimestamp:Date.now()});p.onsuccess=()=>s(e),p.onerror=()=>i(new Error("保存阅读统计失败"))})}const Bn=E("knowledge",()=>{const n=h([]),r=h(new Map),t=h(null),e=h(null),s=h([]),i=h(!1),o=h(new Map);async function d(){const a=await _n(),l=new Map;a.forEach(c=>l.set(c.filePath,c.totalReadCount)),o.value=l}function p(a){return o.value.get(a)??0}async function u(a){const l=await Tn(a);o.value.set(a,l)}const g=P(()=>{const a=new Map;n.value.forEach(c=>{a.set(c.category,(a.get(c.category)||0)+1)});const l={"JavaScript/TypeScript":"Code",CSS:"Palette",Vue:"Box",React:"Atom",Network:"Globe",Browser:"Monitor",Build:"Package",Other:"FileQuestion",AI:"Brain",Security:"Shield",Performance:"Zap",SystemDesign:"Network",Algorithms:"Binary",Architecture:"Layers"};return Array.from(a.entries()).map(([c,f])=>({name:c,label:c,icon:l[c]||"FileText",count:f}))}),b=P(()=>{let a=n.value;return t.value&&(a=a.filter(l=>l.category===t.value)),e.value&&(a=a.filter(l=>l.difficulty===e.value)),a.sort((l,c)=>l.title.localeCompare(c.title))});async function y(){i.value=!0;try{const a=Object.assign({"../knowledgeBase/AI/prompt-engineering.md":H,"../knowledgeBase/Browser/url-lifecycle.md":R,"../knowledgeBase/Build/build-optimization.md":N,"../knowledgeBase/Build/webpack-chunk.md":V,"../knowledgeBase/CSS/bfc.md":D,"../knowledgeBase/CSS/element-centering.md":X,"../knowledgeBase/CSS/flexbox-layout.md":F,"../knowledgeBase/CSS/hide-element.md":J,"../knowledgeBase/CSS/reflow-repaint.md":L,"../knowledgeBase/JavaScript/closure.md":$,"../knowledgeBase/JavaScript/debounce-throttle.md":z,"../knowledgeBase/JavaScript/deep-shallow-copy.md":W,"../knowledgeBase/JavaScript/event-loop.md":q,"../knowledgeBase/JavaScript/i18n.md":G,"../knowledgeBase/JavaScript/nodejs-capabilities.md":K,"../knowledgeBase/JavaScript/reflect.md":U,"../knowledgeBase/JavaScript/this-binding.md":Y,"../knowledgeBase/JavaScript/var-let-const.md":Q,"../knowledgeBase/JavaScript/virtual-list.md":Z,"../knowledgeBase/Network/cors.md":nn,"../knowledgeBase/Network/http-cache.md":rn,"../knowledgeBase/Network/http-protocol.md":en,"../knowledgeBase/Network/mcp-principle.md":tn,"../knowledgeBase/Network/sse-polling.md":on,"../knowledgeBase/Network/xss-attack.md":an,"../knowledgeBase/Other/career-plan.md":sn,"../knowledgeBase/Other/git-operations.md":cn,"../knowledgeBase/Other/resign-reasons.md":ln,"../knowledgeBase/Other/self-introduction.md":pn,"../knowledgeBase/Vue/component-communication.md":un,"../knowledgeBase/Vue/reactivity-principle.md":dn,"../knowledgeBase/Vue/vue-mixins.md":mn,"../knowledgeBase/Vue/vue2-vs-vue3.md":gn,"../knowledgeBase/index.md":fn}),l=a["../knowledgeBase/index.md"]||"";n.value=xn(l),n.value.forEach(c=>{const f=`../knowledgeBase/${c.filePath}`,S=a[f];S?r.value.set(c.filePath,S):r.value.set(c.filePath,"")}),s.value=x()}catch(a){console.error("Failed to load documents:",a)}finally{i.value=!1}}function v(a){const l=r.value.get(a);if(!l)return null;const c=bn(l);c.meta.filePath=a;const f=n.value.find(S=>S.filePath===a);return f&&(c.meta.category=f.category,c.meta.lastModified=f.lastModified),c}function M(a){return Sn(n.value,a,r.value)}function A(a){T(a.filePath)?jn(a.filePath):wn(a),s.value=x()}function B(a){return T(a)}return{documents:n,contentMap:r,currentCategory:t,currentDifficulty:e,favorites:s,isLoading:i,readStatsMap:o,categories:g,filteredDocuments:b,loadDocuments:y,loadReadStats:d,getReadCount:p,recordRead:u,getDocumentContent:v,search:M,toggleFavorite:A,isDocFavorite:B}});export{An as H,O as c,Bn as u};
