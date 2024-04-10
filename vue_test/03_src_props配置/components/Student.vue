<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>姓名: {{name}}</h2>
        <h2>性别: {{sex}}</h2>
        <h2>年龄: {{myAge}}</h2>
        <button @click="updateAge">对年龄做修改</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: "I'm a student from atguigu",
            myAge: this.age,
        }
    },
    methods: {
        updateAge() {
            this.myAge++;
        }
    },
    // 简单声明接收
    // props: ['name', 'sex', 'age'],

    // 接收的同时对数据进行类型限制
    /* props: {
        name: String,
        sex: String,
        age: Number
    } */

    // 接收的同时对数据进行类型限制 + 是否必须 + 默认值
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99
        },
        sex: {
            type: String,
            required: true
        }
    }

    
}
</script>
