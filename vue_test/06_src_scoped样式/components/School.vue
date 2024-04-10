<template>
    <div class="bg">
        <h1 class="red-text">{{msg}}</h1>
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            msg: "School: Atguigu",
            name: 'Atguigu',
            address: 'Beijing'
        }
    },
    
}
</script>

<style scoped>
    .bg {
        background-color: orange;
    }
</style>
