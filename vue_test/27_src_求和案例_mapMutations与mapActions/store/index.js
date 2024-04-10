// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库, 和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 应用Vuex插件
Vue.use(Vuex);

// 准备actions对象 - 响应组件中用户的动作
const actions = {
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('INCREMENT', value);
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit('INCREMENT', value);
    }, 1000);
  }
}
// 准备mutations对象 - 修改state中的数据
const mutations = {
  INCREMENT(state, value) {
    state.sum += value;
  },
  DECREMENT(state, value) {
    state.sum -= value;
  },
}
// 准备state对象 - 保存具体的数据
const state = {
  sum: 0,
  school: '尚硅谷',
  subject: '编程'
}

const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})