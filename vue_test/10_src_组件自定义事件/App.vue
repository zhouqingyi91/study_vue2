<template>
    <div id="app">
        <h2>你好, {{studentName}}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据 (第一种写法, 使用@或v-on, 子那边用$emit) -->
        <!-- <Student v-on:atguigu="getStudentName" @demo="m1" /> -->
        <!-- <Student v-on:atguigu.once="getStudentName" /> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据 (第二种写法, 使用ref), 搭配mounted和this.$refs.student. 这种方式更灵活, 可以用setTimeout等方法. -->
        <Student ref="student" @click.native="clickNative" />
    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name: 'App',
    components: {
        Student,
        School
    },
    data() {
        return {
            studentName: ''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('school name =', name);
        },
        getStudentName(name, ...params) {
            // console.log('student name =', name, x, y, z);
            console.log('student name =', name, params);
            this.studentName = name;
        },
        m1() {
            console.log('demo事件被触发了');
        },
        clickNative() {
            alert(123);
        }
    },
    mounted() {
        /* setTimeout(() => {
            this.$refs.student.$on('atguigu', this.getStudentName) // 绑定自定义事件
        }, 3000); */
        
        // this.$refs.student.$once('atguigu', this.getStudentName); //绑定自定义事件(一次性)

        // this.$refs.student.$on('atguigu', this.getStudentName); //绑定自定义事件
        this.$refs.student.$on('atguigu', (name, ...params) => {
            console.log('@@student name =', name, params);
            this.studentName = name;
        }); //用箭头函数, this才会指向App
    },
    
}
</script>

<style>
</style>