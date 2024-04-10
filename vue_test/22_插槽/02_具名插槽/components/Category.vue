<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽, 等着组件的使用者进行填充 -->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3, h4 {
    text-align: center;
    background-color: orange;
  }
  .foot {
    display: flex;
    justify-content: space-around;
  }
</style>