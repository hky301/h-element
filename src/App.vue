<script setup lang="ts">
import Button from './components/Button/Button.vue'

const open = () => {
  // createMessage({ message: 'hello world', duration: 0, showClose: true })
  // tooltipRef.value?.show()
}
const close = () => {
  // tooltipRef.value?.hide()
}
</script>

<template>
  <main>
    <Button ref="buttonRef" @click="open">Test Button</Button>
    <v-button round>Round Button</v-button>
    <Button plain @click="close">Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
  </main>
</template>

<style scoped>
</style>
