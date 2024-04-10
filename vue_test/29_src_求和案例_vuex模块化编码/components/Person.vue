<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="addPerson">
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加姓王的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h2>列表第一个人的名字为: {{getFirstPersonName}}</h2>
    <h2 style="color:red">Count组件的和是: {{sum}}</h2>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  name: 'Person',
  computed: {
    personList() {
      return this.$store.state.personStore.personList;
    },
    sum() {
      return this.$store.state.countStore.sum;
    },
    getFirstPersonName() {
      return this.$store.getters['personStore/getFirstPersonName'];
    }
  },
  methods: {
    addPerson() {
      // 在这里做名字不能为空的判断, 然后通过commit调用mutations
      if (this.name.trim() !== '') {
        const personObj = {id:nanoid(), name: this.name}
        this.$store.commit('personStore/ADD_PERSON', personObj)
        this.name = '';
      } else {
        alert('名字不能为空');
      }

      // 通过dispatch调用actions, 把姓名不能为空的逻辑写在actions里
      // const personObj = {id:nanoid(), name: this.name}
      // this.$store.dispatch('personStore/addPerson', personObj);
      // this.name = ''
    },
    addPersonWang() {
      const personObj = {id:nanoid(), name: this.name}
      this.$store.dispatch('personStore/addPersonWang', personObj);
      this.name = '';
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