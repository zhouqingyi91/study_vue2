<template>
    <ul class="todo-main">
        <transition-group name="hello" appear>
            <Item v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
            />
        </transition-group>
    </ul>
</template>

<script>
import Item from './Item.vue';

export default {
    name: 'List',
    components: {Item},
    props: ['todos']
}
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }

    .hello-enter-active {
        animation: atguigu 1s;
    }
    .hello-leave-active {
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>