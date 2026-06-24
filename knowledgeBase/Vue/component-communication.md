---
title: "Vue 组件间通信"
category: "Vue"
tags: ["component", "communication", "props"]
difficulty: "中等"
---

# Vue 组件间通信

## 父子组件通信

### 1. props / emit

**父组件传子组件（props）**：
```javascript
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
```

**子组件传父组件（emit）**：
```javascript
// Child.vue
this.$emit('update:name', 'New Name');
this.$emit('custom-event', payload);

// Parent.vue
<Child @update:name="handleUpdate" @custom-event="handleCustom" />
```

### 2. v-model

```javascript
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
```

## 兄弟组件通信

### 1. 事件总线（Event Bus）

```javascript
// bus.js
import Vue from 'vue';
export const bus = new Vue();

// ComponentA.vue
bus.$emit('message', 'Hello');

// ComponentB.vue
bus.$on('message', (msg) => {
  console.log(msg);
});
```

### 2. 通过父组件中转

```javascript
// Parent.vue
<ChildA @update="handleUpdate" />
<ChildB :data="sharedData" />

// ChildA.vue
this.$emit('update', data);

// ChildB.vue
props: ['data']
```

## 跨层级通信

### 1. provide / inject

```javascript
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
```

### 2. Vuex / Pinia

```javascript
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
```

## 通信方式对比

| 方式 | 适用场景 | 复杂度 |
|------|----------|--------|
| props / emit | 父子组件 | 低 |
| v-model | 表单双向绑定 | 低 |
| Event Bus | 兄弟组件 | 中 |
| provide / inject | 跨层级 | 中 |
| Vuex / Pinia | 全局状态 | 高 |

## 最佳实践

- **父子通信**: 使用 `props` 和 `emit`
- **兄弟通信**: 使用 Event Bus 或父组件中转
- **跨层级**: 使用 `provide/inject` 或状态管理
- **全局状态**: 使用 Pinia