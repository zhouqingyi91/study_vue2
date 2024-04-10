<template>
    <div class="bg">
        <h1 class="red-text">{{msg}}</h1>
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
        <button @click="sendSchoolName(name)">点我回传学校名称</button>
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
    props: ['getSchoolName'],
    methods: {
        sendSchoolName(name) {
            this.getSchoolName(name);
        }
    },
    
}
</script>

<style scoped>
    .bg {
        background-color: orange;
    }
</style>
