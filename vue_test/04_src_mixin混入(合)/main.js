import Vue from "vue";
import App from './App.vue';
import { mixin3 } from "./mixin";

Vue.config.productionTip = false;
// 全局混合
Vue.mixin(mixin3);

new Vue({
    el: '#app',
    render: h => h(App)
})