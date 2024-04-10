<template>
    <div class="bg">
        <h1>{{msg}}</h1>
        <h2>姓名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <h2>Student拿到了School组件的名字: {{schoolName}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'Student',
    data() {
        return {
            msg: "Student组件",
            name: 'Tom',
            age: 18,
            schoolName: '',
        }
    },
    mounted() {
        // this.$bus.$on('getSchoolName', (name) => {
        //     console.log('在Student组件中拿到了School的name = ', name);
        //     this.schoolName = name;
        // });

        this.pid = pubsub.subscribe('hello', (msgName, data) => {
            console.log('@@在Student组件中拿到了School的name = ', data);
            this.schoolName = data;
        })
    },
    beforeDestroy() {
        // this.$bus.$off('getSchoolName');

        PubSub.unsubscribe(this.pid)
    },
}
</script>

<style scoped>
    .bg {
        background-color: aqua;
    }
</style>
