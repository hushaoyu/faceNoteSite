---
title: "前端打包优化"
category: "Build"
tags: ["optimization", "bundle", "performance"]
difficulty: "中等"
---

# 前端打包优化

## 代码分割

### 1. 动态导入

```javascript
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
```

### 2. 第三方库分离

```javascript
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
```

## 压缩优化

### 1. TerserPlugin

```javascript
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
```

### 2. CSS 压缩

```javascript
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
};
```

## Tree Shaking

```javascript
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
```

## 缓存优化

```javascript
module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
```

## 图片优化

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
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
```

## 优化建议

| 优化项 | 效果 | 优先级 |
|--------|------|--------|
| 代码分割 | 减少首屏体积 | 高 |
| 压缩 | 减小文件大小 | 高 |
| Tree Shaking | 移除无用代码 | 中 |
| 缓存 | 提升二次加载 | 高 |
| 图片优化 | 减少资源大小 | 中 |