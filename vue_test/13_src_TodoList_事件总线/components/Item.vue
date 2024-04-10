<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="updateDone(todo.id)" >
            <!-- 
                不建议用v-model的方式去监视todo.done的改变, 因为违反原则
                数据在哪, 就在哪个组件里修改. todo的数据实在App组件里, 所以不应该在Item组件里修改
             -->
            <!-- <input type="checkbox" v-model="todo.done" > -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo.id)" >删除</button>
    </li>
</template>

<script>
export default {
    name: 'Item',
    // 声明接收todo对象
    props: ['todo'], 
    methods: {
        handleDelete(id) {
            if (confirm('确定删除吗?'))
                this.deleteTodo(id);
        },
        updateDone(id) {
            this.$bus.$emit('updateDone', id);
        },
        deleteTodo(id) {
            this.$bus.$emit('deleteTodo', id);
        }
    },
}
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content: initial;
    }
    li:last-child {
        border-bottom: none;
    }
    li:hover {
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>