<template>
    <div class="demo">
        <h1>School组件</h1>
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: 'atguigu',
            address: 'beijing'
        }
    },
}
</script>

<style>
    .demo {
        background-color: aqua;
    }
</style>