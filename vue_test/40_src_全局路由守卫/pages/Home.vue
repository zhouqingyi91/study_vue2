<template>
  <div>
    <h1>我是Home组件</h1>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/news" >news</router-link>
        </li>
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/message">message</router-link>
        </li>
      </ul>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  /* mounted() {
    console.log('Home组件被挂载');
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁');
  }, */
}
</script>

<style>

</style>