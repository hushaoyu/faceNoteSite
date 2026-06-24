---
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

```javascript
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
```

### 2. 动态导入

```javascript
// 方式一：import()
const module = await import('./module');

// 方式二：require.ensure()
require.ensure(['./module'], (require) => {
  const module = require('./module');
});
```

### 3. SplitChunks

```javascript
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
          test: /[\\/]node_modules[\\/]/,
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
```

## Chunk 命名

```javascript
// 动态导入时命名
const module = await import(/* webpackChunkName: "module" */ './module');
```

## 缓存策略

```javascript
module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    assetModuleFilename: '[name].[hash][ext][query]'
  }
};
```

## 最佳实践

1. **第三方库**: 单独打包为 vendor chunk
2. **公共代码**: 使用 splitChunks 提取
3. **懒加载**: 使用动态导入减少首屏体积
4. **缓存**: 使用 contenthash 实现长效缓存