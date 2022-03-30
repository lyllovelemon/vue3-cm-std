<template>
    <h1>首页</h1>
    <button @click="toggle">click</button>
    <transition name="fade">
        <h1 v-if="showTitle">vue3小测试</h1>
    </transition>
    <TodoList/>
    <HelloWorld/>
</template>

<script setup>
    import {ref} from "vue"
    let showTitle=ref(true)
    function toggle(){
        showTitle.value=!showTitle.value
    }
    import TodoList from "../components/TodoList.vue"
    import HelloWorld from '../components/HelloWorld.vue'

</script>

<style scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity .5s linear;
    }
    .fade-enter-from,.fade-leave-to{
        opacity: 0;
    }
</style>