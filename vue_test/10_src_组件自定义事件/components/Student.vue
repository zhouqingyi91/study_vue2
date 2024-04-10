<template>
    <div class="bg">
        <h1>{{msg}}</h1>
        <h2>姓名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <button @click="sendStudentName">点我回传学生姓名</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件实例</button>
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
    },
    methods: {
        sendStudentName() {
            // 触发Student组件实例身上的atguigu事件
            this.$emit('atguigu', this.name, 100, 666, 888)
            // this.$emit('demo')
        },
        unbind() {
            this.$off('atguigu'); // 解绑一个自定义事件
            // this.$off(['atguigu', 'demo']) // 解绑多个自定义事件
            // this.$off() // 解绑所有自定义事件
        },
        death() {
            this.$destroy() // 销毁当前Student组件实例, 销毁后, 所有Student实例的自定义事件失效
        }
    },
}
</script>

<style scoped>
    .bg {
        background-color: aqua;
    }
</style>
