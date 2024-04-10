<template>
    <div>
        <h1>{{msg}}</h1>
        <h2 @click="showName">姓名: {{name}}</h2>
        <h2>年龄: {{age}}</h2>
        <h2>x: {{x}}</h2>
    </div>
</template>

<script>
import {mixin, mixin2} from '../mixin';

export default {
    name: 'Student',
    data() {
        return {
            msg: "I'm a student from atguigu",
            name: 'Tom',
            age: 18,
            x: 666
        }
    },
    mixins: [mixin, mixin2],
    mounted() {
        console.log('student mounted');
    },
    
}
</script>
