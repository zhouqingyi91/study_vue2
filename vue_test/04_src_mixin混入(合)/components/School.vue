<template>
    <div>
        <h1>{{msg}}</h1>
        <h2 @click="showName">学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
        <h2>x: {{x}}</h2>
    </div>
</template>

<script>
import {mixin, mixin2} from '../mixin';

export default {
    name: 'School',
    data() {
        return {
            msg: "School: Atguigu",
            name: 'Atguigu',
            address: 'Beijing'
        }
    },
    mixins: [mixin, mixin2]
    
}
</script>
