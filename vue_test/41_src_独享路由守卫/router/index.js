// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {title: '关于'},
    },
    {
      meta: {title: '主页'},
      name: 'zhuye',
      path: '/home',
      component: Home,
      children: [
        {
          meta: {title: '新闻', isAuth:true},
          name: 'xinwen',
          path: 'news',
          component: News,
          beforeEnter: (to, from, next) => {
            // console.log('前置路由守卫', to, from);
            if (to.meta.isAuth) { // 判断当前路由是否需要进行权限验证
              if (localStorage.getItem('school') === 'atguigu') { // 权限验证的具体规则
                next(); // 放行
              } else {
                alert('学校名不对, 无权限查看!');
              }
            } else {
              next(); // 放行
            }
          },
        },
        {
          meta: {title: '消息', isAuth:true},
          name: 'xiaoxi',
          path:'message',
          component: Message,
          children: [
            {
              meta: {title: '详情', isAuth:true},
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

// 全局前置路由守卫 - 初始化的时候被调用, 和每次路由切换之前被调用
/* router.beforeEach((to, from, next)=> {
  // console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) { // 判断当前路由是否需要进行权限验证
    if (localStorage.getItem('school') === 'atguigu') { // 权限验证的具体规则
      next(); // 放行
    } else {
      alert('学校名不对, 无权限查看!');
    }
  } else {
    next(); // 放行
  }
}) */

// 全局后置路由守卫 - 初始化的时候被调用, 和每次路由切换之前被调用
router.afterEach((to, from) => {
  // console.log('后置路由守卫', to, from);
  document.title = to.meta.title || '首页';
})

export default router;