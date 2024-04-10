<template>
  <div>
    <h1>当前和为: {{$store.state.sum}}</h1>
    <h1>当前和的10倍: {{$store.getters.bigSum}}</h1>
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
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
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