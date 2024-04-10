<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
            <a slot="footer" href="">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(game, index) in games" :key="index">{{game}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="">单机游戏</a>
                <a href="">网络</a>
            </div>
        </Category>
        <Category title="电影">
            <ul slot="center">
                <li v-for="(film, index) in films" :key="index">{{film}}</li>
            </ul>
            <template v-slot:footer>
                <div class="foot">
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
                <h4>欢迎来观影</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
    name: 'App',
    components: {Category},
    data() {
        return {
            foods:['火锅', '烧烤', '小龙虾', '牛排'],
            games:['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films:['《色戒》', '《教父》', '《拆弹专家》', '《尚硅谷》']
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
  }
</style>