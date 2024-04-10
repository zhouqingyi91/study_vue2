// 该文件用于创建Vuex中最为核心的store

// 引入Vue核心库, 和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入独立的配置
import countStore from "./count";
import personOptions from "./person";

// 应用Vuex插件
Vue.use(Vuex);

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countStore,
    personStore: personOptions
  }
})