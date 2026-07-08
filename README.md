
<p align="center">
  <img src="./vite.svg" alt="面试知识库" width="80" />
</p>

<h1 align="center">面试知识库 · faceNote</h1>

<p align="center">
  <strong>前端面试知识库 —— 面向现代前端开发者的面试知识点查阅应用</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue_3-4FC08D?style=flat&logo=vuedotjs&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Pinía-FFD859?style=flat&logo=pinia&logoColor=white" alt="Pinia" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=pwa&logoColor=white" alt="PWA" />
</p>

---

## 📖 简介

**面试知识库** 是一个专为前端开发者打造的面试知识点查阅应用。它将零散的前端面试知识点系统化、结构化地组织起来，覆盖 **JavaScript、CSS、网络协议、框架原理、构建工具、浏览器原理、性能优化、安全、AI** 等多个领域，帮助你高效备战前端面试。

> 🎯 无论是面试冲刺还是日常复习，这里都能帮你快速定位知识点，查漏补缺。

---

## ✨ 功能特性

### 📚 结构化知识体系

按主题分类组织文档，覆盖 **15+** 技术领域，从基础到进阶一应俱全：

| 分类 | 涵盖内容 |
|------|---------|
| JavaScript / TypeScript | 闭包、this 绑定、事件循环、防抖节流、深拷贝、Reflect、虚拟列表、国际化、Node.js |
| CSS | Flexbox 布局、BFC、重排重绘、元素居中、元素隐藏 |
| 网络 | HTTP 协议、缓存机制、跨域方案、XSS 防护、SSE、MCP 原理 |
| 框架 | Vue 2 vs 3、响应式原理、组件通信、Mixins；React |
| 构建 | Webpack 分包、打包优化 |
| 浏览器 | URL 生命周期 |
| AI | Prompt Engineering 提示词工程 |
| 其他 | 自我介绍、离职原因、职业规划、Git 操作 |

### 🔍 全文搜索

输入关键词即可在 **标题、标签、正文** 中快速检索，匹配结果高亮显示，上下文预览一目了然。

### 🏷️ 多维筛选

- **按分类** — 从侧边栏选择技术领域，快速定位到感兴趣的方向
- **按难度** — 简单 / 中等 / 高，根据自身水平选择合适的学习路径

### ⭐ 收藏管理

遇到重要的知识点可以一键收藏，方便日后复习。收藏列表独立展示，支持快速取消收藏。

### 📄 沉浸式阅读体验

- **Markdown 渲染** — 使用 `marked` 渲染，清晰展示图文内容
- **代码高亮** — `highlight.js` 自动识别代码语言，语法高亮
- **目录导航** — 自动提取章节标题，支持点击跳转和目录搜索
- **滚动追踪** — 阅读时自动高亮当前所在章节

### 📱 响应式设计

- **深色主题** — 护眼的深色配色方案，适合长时间阅读
- **移动端适配** — 响应式布局 + 移动端菜单，手机端也能流畅浏览
- **自定义滚动条** — 优化的滚动体验，与主题风格统一

### 🌐 PWA 支持

- **可安装** — 支持添加到主屏幕，像原生应用一样使用
- **离线可用** — 构建时打包知识库内容，无需网络即可访问
- **自动更新** — Service Worker 自动更新，始终保持最新

### 🔗 分享功能

支持通过 Web Share API 分享知识点链接，方便与朋友交流讨论。

### 🚀 开箱即用

- 知识库文档使用 Markdown 编写，通过 Vite `import.meta.glob` 在构建时打包，无需后端服务
- 支持部署到 GitHub Pages 等静态托管平台

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| [Vue 3](https://vuejs.org/) | 前端框架（Composition API + `<script setup>`） |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite](https://vitejs.dev/) | 构建工具 |
| [Vue Router](https://router.vuejs.org/) | 路由管理（Hash 模式） |
| [Pinia](https://pinia.vuejs.org/) | 状态管理 |
| [Tailwind CSS](https://tailwindcss.com/) | 样式框架 |
| [marked](https://marked.js.org/) | Markdown 渲染 |
| [highlight.js](https://highlightjs.org/) | 代码语法高亮 |
| [lucide-vue-next](https://lucide.dev/) | 图标库 |
| [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) | PWA 支持 |

---

## 🎨 UI 主题

应用采用深色主题，主色调为深邃蓝 (`#0f3460`) 配以醒目红 (`#e94560`) 作为强调色，界面简洁、专注，让你沉浸于知识阅读中。


🔗 立即访问
点击下方链接，在浏览器中打开，即可开始使用：
👉 [面试知识库 PWA 应用](https://hushaoyu.github.io/faceNoteSite/)

📲 安装指南（推荐）
使用 Chrome、Edge 或 Safari 浏览器访问上述链接。

根据浏览器提示，将应用 添加到主屏幕 或 安装 到设备。

安装后，您即可离线使用，获得更快捷的访问体验。

🎁 免费激活码获取方式
为了回馈早期用户，我们提供全功能免费激活码。获取仅需两步：

扫描下方二维码，添加官方客服微信。

发送安装成功截图，即可免费领取您的专属激活码，解锁全部内容。

📸 （此处放置您的微信二维码图片）🔗 立即访问
点击下方链接，在浏览器中打开，即可开始使用：
👉 面试知识库 PWA 应用

📲 安装指南（推荐）
使用 Chrome、Edge 或 Safari 浏览器访问上述链接。

根据浏览器提示，将应用 添加到主屏幕 或 安装 到设备。

安装后，您即可离线使用，获得更快捷的访问体验。

🎁 免费激活码获取方式
扫描下方二维码，添加微信获取激活码，一码一用。

发送安装成功截图，即可免费领取您的专属激活码，解锁全部内容。

📸 微信二维码
![alt text](wechat.png)