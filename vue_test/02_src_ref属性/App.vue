<template>
    <!-- 
        ref属性
        1.被用来给元素或子组件注册引用信息(id的替代者)
        2.应用在html标签上获取的是真实DOM元素, 应用在组件标签上是组件实例对象(vc)
        3.使用方式:
            a.打标识: <h1 ref="xxx">....</h1> 或 <School ref="xxx"></School>
            b.获取: this.$ref.xxx
    -->
    <div id="app">
        <h1 ref="title" v-text="msg"></h1>
        <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
import School from './components/School.vue'

export default {
    name: 'App',
    components: {
        School
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title); // 真实DOM元素
            console.log(this.$refs.btn); // 真实DOM元素
            console.log(this.$refs.sch); // School组件的实例对象(vc)
            console.log(this); // App组件的实例对象(vc)
        }
    },
    data() {
        return {
            msg: '学习Vue的ref'
        }
    },
}
</script>

<style>

</style>