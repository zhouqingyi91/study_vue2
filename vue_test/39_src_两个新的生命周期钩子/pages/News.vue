<template>
  <ul>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
    <h1 :style="{opacity}">展示动画</h1>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  beforeDestroy() {
    console.log('News组件即将被销毁');
  },
  activated() {
    console.log('activated触发');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1;
    }, 15);
  },
  deactivated() {
    console.log('deactivated触发');
    clearInterval(this.timer);
  },
}
</script>

<style>

</style>