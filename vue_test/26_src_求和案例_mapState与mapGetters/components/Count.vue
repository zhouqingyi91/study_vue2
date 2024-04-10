<template>
  <div>
    <h1>当前和为: {{sum}}</h1>
    <h1>当前和的10倍: {{bigSum}}</h1>
    <h1>我在{{school}}, 学习{{subject}}</h1>
    <br>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {

    // 靠程序员亲自去写计算属性
    /* sum() {
      return this.$store.state.sum
    },
    school() {
      return this.$store.state.school
    },
    subject() {
      return this.$store.state.subject
    },
    bigSum() {
      return this.$store.getters.bigSum
    }, */

    // 借助mapState生成计算属性, 从state中读取数据. (对象写法)
    // ...mapState({sum:'sum', school:'school', subject:'subject'}),
    // 借助mapState生成计算属性, 从state中读取数据. (数组写法)
    ...mapState(['sum', 'school', 'subject']),

    // 借助mapGetters生成计算属性, 从getters中读取数据. (对象写法)
    // ...mapGetters({bigSum:'bigSum'}),
        // 借助mapGetters生成计算属性, 从getters中读取数据. (数组写法)
    ...mapGetters(['bigSum']),
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT', this.n)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.n)
    },
    incrementWait() {
      setTimeout(() => {
        this.$store.dispatch('incrementWait', this.n)
      }, 1000);
    },
  },
}
</script>

<style>

</style>