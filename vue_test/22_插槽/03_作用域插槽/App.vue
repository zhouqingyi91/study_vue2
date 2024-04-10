<template>
    <div class="container">
        <Category title="游戏">
            <template scope="atguigu">
                <ul>
                    <li v-for="(game, index) in atguigu.games" :key="index">{{game}}</li>
                </ul>
                <h4>{{atguigu.msg}}</h4>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="{games, msg}">
                <ul>
                    <li v-for="(game, index) in games" :key="index">{{game}}</li>
                </ul>
                <h4>{{msg}}</h4>
            </template>
        </Category>
        <Category title="游戏">
            <template slot-scope="{games, msg}">
                <h4>{{msg}}</h4>
                <ul>
                    <li v-for="(game, index) in games" :key="index">{{game}}</li>
                </ul>
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