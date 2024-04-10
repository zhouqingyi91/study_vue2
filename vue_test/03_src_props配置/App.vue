<template>
    <div id="app">
        <Student name="Tom" sex="男" :age="18" />
        <Student name="Jen" sex="female" />
    </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
    name: 'App',
    components: {
        Student
    },
}
</script>

<style>

</style>