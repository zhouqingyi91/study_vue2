<template>
    <div class="bg">
        <h1>{{msg}}</h1>
        <h2>姓名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
    </div>
</template>

<script>

export default {
    name: 'Student',
    data() {
        return {
            msg: "I'm a student from atguigu",
            name: 'Tom',
            age: 18,
        }
    }
}
</script>

<style scoped>
    .bg {
        background-color: aqua;
    }
</style>
