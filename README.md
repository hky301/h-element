# h-element

### 安装


```bash
npm install @hekaiyu/element --save
```

### 开始使用

**全局使用**


```js
// 引入所有组件
import HElement from '@hekaiyu/element'
// 引入样式
import '@hekaiyu/element/dist/style.css'

import App from './App.vue'
// 全局使用
createApp(App).use(HElement).mount('#app')
```

```vue
<template>
  <h-button>我是 HButton</h-button>
</template>
```

**单个导入**

H-Element 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <Button>我是 HButton</Button>
</template>
<script>
  import { Button } from ' @hekaiyu/element'
  export default {
    components: { Button },
  }
</script>
```
