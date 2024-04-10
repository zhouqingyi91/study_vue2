<template>
  <section>
    <h3>Search Github Users</h3>
    <div>
      <input 
      type="text" 
      placeholder="enter the name you search"
      v-model="keyWord"
      />
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUsers() {
      // 请求前更新数据
      this.$bus.$emit('updateInfo', {isFirst:false, isLoading:true, errMsg:'', users:[]});

      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          // console.log('请求成功了', response.data.items);
          this.$bus.$emit('updateInfo', {isLoading:false, errMsg:'', users:response.data.items});
        },
        error => {
          this.$bus.$emit('updateInfo', {isLoading:false, errMsg:error.message, users:[]});
          console.log('请求失败了', error.message);
        }
      )
    }
  },
}
</script>

<style>

</style>