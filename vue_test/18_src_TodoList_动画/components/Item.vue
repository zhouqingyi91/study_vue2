<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="updateDone(todo.id)" >
            <!-- 
                不建议用v-model的方式去监视todo.done的改变, 因为违反原则
                数据在哪, 就在哪个组件里修改. todo的数据实在App组件里, 所以不应该在Item组件里修改
             -->
            <!-- <input type="checkbox" v-model="todo.done" > -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text" 
                v-show="todo.isEdit" 
                :value="todo.title"
                @blur="handleBlur(todo, $event)"
                ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todo.id)" >删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="updateTitle(todo)" >编辑</button>
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
            if (confirm('确定删除吗?'))
                this.$bus.$emit('deleteTodo', id);
        },
        updateTitle(todo) {
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true;
            } else {
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(function() {
                this.$refs.inputTitle.focus();
            })
        },
        handleBlur(todo, e) {
            todo.isEdit = false;
            if (!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo', todo.id, e.target.value);
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