<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
        <input type="text" v-fbind2="msg">
        <button @click="hello">点我测试plugin里配的方法</button>
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
