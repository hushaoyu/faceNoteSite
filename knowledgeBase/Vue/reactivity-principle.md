---
title: "Vue3 响应式原理"
category: "Vue"
tags: ["reactivity", "proxy", "effect"]
difficulty: "高"
---

# Vue3 响应式原理

## 核心概念

### 1. reactive
创建响应式对象：

```javascript
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'Alice'
});

state.count++; // 触发更新
```

### 2. ref
创建响应式基本类型：

```javascript
import { ref } from 'vue';

const count = ref(0);
count.value++; // 触发更新
```

### 3. computed
创建计算属性：

```javascript
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
```

### 4. watch
监听响应式数据变化：

```javascript
import { ref, watch } from 'vue';

const count = ref(0);
watch(count, (newValue, oldValue) => {
  console.log(`count changed from ${oldValue} to ${newValue}`);
});
```

### 5. watchEffect
自动追踪依赖并执行副作用：

```javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);
watchEffect(() => {
  console.log(`count is ${count.value}`);
});
```

## 实现原理

### track - 依赖收集
```javascript
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
```

### trigger - 触发更新
```javascript
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
```

## ref 与 reactive 的区别

| 特性 | ref | reactive |
|------|-----|----------|
| 适用类型 | 基本类型、对象 | 对象 |
| 访问方式 | `.value` | 直接访问 |
| 深层响应式 | 需要 `ref({})` | 自动深层 |
| 解构赋值 | 不会丢失响应式 | 会丢失响应式 |

## 最佳实践

- **基本类型**: 使用 `ref`
- **对象类型**: 使用 `reactive`
- **复杂计算**: 使用 `computed`
- **数据监听**: 使用 `watch` 或 `watchEffect`