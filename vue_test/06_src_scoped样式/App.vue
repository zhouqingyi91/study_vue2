<template>
    <div id="app">
        <Student />
        <School/>
    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name: 'App',
    components: {
        Student,
        School
    },
    
}
</script>

<style>
.red-text {
    color: red;
}
</style>