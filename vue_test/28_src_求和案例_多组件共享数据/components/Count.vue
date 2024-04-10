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
    <button @click="INCREMENT(n)">+</button>
    <button @click="DECREMENT(n)">-</button>
    <button @click="incrementOdd(n)">和为奇数加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <h2 style="color:red">Person组件的总人数是: {{personList.length}}</h2>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    // 借助mapState生成计算属性, 从state中读取数据. (数组写法)
    ...mapState(['sum', 'school', 'subject', 'personList']),

    // 借助mapGetters生成计算属性, 从getters中读取数据. (数组写法)
    ...mapGetters(['bigSum']),
  },
  methods: {
    // 借助mapMutations生成对应的方法, 方法中会调用commit去联系mutations(数组写法)
    ...mapMutations(['INCREMENT', 'DECREMENT']),

    // 借助mapActions生成对应的方法, 方法中会调用dispatch去联系actions(数组写法)
    ...mapActions(['incrementOdd', 'incrementWait']),
  },
}
</script>

<style>

</style>