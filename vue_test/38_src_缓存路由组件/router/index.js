// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          path:'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              // 第一种写法: props值为对象, 该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props: {a: 900},

              // 第二种写法: props值为布尔值, 布尔值为true, 则把路由收到的所有params参数通过props传给Detail组件
              // 只适用于params参数!!
              // props: true,

              // 第三种写法: props值为函数, 该函数返回的对象中每一组key-value都会通过props传给Detail组件
              // props({params: {id, title}}) { // 解构赋值
              //   return {
              //     id,
              //     title
              //   }
              // },
              // 第三种写法, 参数为query
              // props({query: {id, title}}) { // 解构赋值
              //   return {
              //     id,
              //     title
              //   }
              // }
              // 第三种写法, 不解构赋值
              props(route) {
                return {
                  id: route.params.id,
                  title: route.params.title
                }
              }
            }
          ]
        }
      ]
    },
  ]
})