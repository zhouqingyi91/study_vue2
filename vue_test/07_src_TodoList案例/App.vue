<template>
    <div id="app">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeader :addTodo="addTodo" />

                <List :todos="todos" :updateDone="updateDone" :deleteTodo="deleteTodo" />

                <TodoFooter :todos="todos" :toggleAllDone="toggleAllDone" :clearFinishedTask="clearFinishedTask" />
            </div>
        </div>
    </div>
</template>

<script>
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import List from './components/List';

export default {
    name: 'App',
    components: {
        TodoFooter,
        TodoHeader,
        List
    },
    data() {
        return {
            todos: [
                {id:'001', title:'吃饭', done:true},
                {id:'002', title:'睡觉', done:false},
                {id:'003', title:'喝酒', done:true},
            ]
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
        }
    },
    
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