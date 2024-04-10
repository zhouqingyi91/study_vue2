<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="addPerson">
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h2 style="color:red">Count组件的和是: {{sum}}</h2>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name: 'Person',
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    }
  },
  methods: {
    addPerson() {
      if (this.name.trim() !== '') {
        const personObj = {id:nanoid(), name: this.name}
        this.$store.commit('ADD_PERSON', personObj)
        this.name = '';
      }
    }
  },
  data() {
    return {
      name: '',
    }
  },
}
</script>

<style>

</style>