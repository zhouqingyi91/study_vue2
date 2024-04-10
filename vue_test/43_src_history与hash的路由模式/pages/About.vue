<template>
  <h1>我是About组件</h1>
</template>

<script>
export default {
  name: 'About',
  /* mounted() {
    console.log('About组件被挂载');
  },
  beforeDestroy() {
    console.log('About组件即将被销毁');
  }, */
  // 进入守卫: 通过路由规则进入该组件时被调用
  beforeRouteEnter (to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'atguigu') {
        next(); // 放行
      } else {
        alert('学校名不对, 无权限查看!');
      }
    } else {
      next(); // 放行
    }
  },
  // 离开守卫: 通过路由规则离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    next(); // 放行才能离开该组件
  }
}
</script>

<style>

</style>