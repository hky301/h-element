# h-element

### 安装


```bash
npm install @hekaiyu/element --save
```

### 开始使用


**全局使用**

在 main.ts (使用ts开发) 或者 main.js，写入以下代码

```js
// 引入所有组件
import HElement from '@hekaiyu/element'
// 引入样式
import '@hekaiyu/element/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(HElement).mount('#app')
```

页面上使用组件

```vue
<template>
  <h-button>我是 HButton</h-button>
  <h-button plain>Plain h-button</h-button>
  <h-button round>Round h-button</h-button>
  <h-button circle>VK</h-button>
  <h-button disabled>Disabled h-button</h-button><br /><br />
  <h-button type="primary">Primary</h-button>
  <h-button type="success">Success</h-button>
  <h-button type="info">Info</h-button>
  <h-button type="warning">Warning</h-button>
  <h-button type="danger">Danger</h-button><br /><br />
  <h-button type="primary" plain>Primary</h-button>
  <h-button type="success" plain>Success</h-button>
  <h-button type="info" plain>Info</h-button>
  <h-button type="warning" plain>Warning</h-button>
  <h-button type="danger" plain>Danger</h-button><br /><br />
  <h-button size="large">Large</h-button>
  <h-button size="small">Small</h-button><br /><br />
  <h-button size="large" loading>Loading</h-button>
  <h-button size="large" icon="arrow-up">Icon</h-button><br /><br />
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
