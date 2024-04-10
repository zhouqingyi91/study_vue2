<template>
    <div id="app">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeader @addTodo="addTodo" />

                <List :todos="todos" />

                <TodoFooter :todos="todos" @toggleAllDone="toggleAllDone" @clearFinishedTask="clearFinishedTask" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import List from './components/List.vue';

export default {
    name: 'App',
    components: {
        TodoFooter,
        TodoHeader,
        List
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
        addTodo(todoObj) {
            this.todos.unshift(todoObj);
        },
        updateDone(id) {
            this.todos.forEach(e => {
                if (e.id === id) e.done = !e.done;
            });
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        toggleAllDone(checked) {
            this.todos.forEach(todo => {
                todo.done = checked;
            });
        },
        clearFinishedTask() {
            this.todos = this.todos.filter(todo => !todo.done);
        },
        updateTodo(id, title) {
            this.todos.forEach(e => {
                if (e.id === id) e.title = title;
            });
        }
    },
    mounted() {
        this.$bus.$on('updateDone', this.updateDone);
        this.$bus.$on('deleteTodo', this.deleteTodo);
        this.$bus.$on('updateTodo', this.updateTodo);
    },
    beforeDestroy() {
        this.$bus.$off(['updateDone', 'deleteTodo', 'updateTodo']);
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value));
            }
        }
    }
    
}
</script>

<style>
    /* base */
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>