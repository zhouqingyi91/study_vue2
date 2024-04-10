<template>
    <div class="bg">
        <h1>{{msg}}</h1>
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
        <button @click="sendSchoolName">把学校名称发给Student组件</button>
    </div>
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            msg: "School组件",
            name: 'Atguigu',
            address: 'Beijing'
        }
    },
    methods: {
        sendSchoolName() {
            this.$bus.$emit('getSchoolName', this.name);
        }
    },
    
}
</script>

<style scoped>
    .bg {
        background-color: orange;
    }
</style>
