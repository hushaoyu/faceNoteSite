---
title: "Vue2 与 Vue3 的区别"
category: "Vue"
tags: ["vue2", "vue3", "comparison"]
difficulty: "中等"
---

# Vue2 与 Vue3 的区别

## 响应式原理

### Vue2 - Object.defineProperty
```javascript
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
```
**局限性**：
- 无法检测对象新增属性
- 无法检测数组索引和长度变化
- 需要使用 `Vue.set()` 或 `this.$set()`

### Vue3 - Proxy
```javascript
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
```
**优势**：
- 可以检测对象新增属性
- 可以检测数组索引和长度变化
- 性能更好

## 组合式 API

### Vue2 - Options API
```javascript
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
```

### Vue3 - Composition API
```javascript
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
```

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

1. 逐步迁移，使用 `@vue/composition-api` 兼容包
2. 优先迁移状态管理和复杂逻辑
3. 注意生命周期钩子的变化
4. 更新第三方依赖库