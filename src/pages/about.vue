<template>
    <h1>你的评分是{{score}}</h1>
    <Heading :level="5">hello,lemon</Heading>
    <Rate v-model="score" :theme="color" @update-rate="update">课程评分</Rate>
    <Rate v-model="score">
        <img width="14" src="/public/favicon.ico" alt="">
    </Rate>
<!--    <button @click="loading">112</button>-->
</template>

<script setup>
    import {ref} from "vue"
    import Rate from "../components/Rate.vue"
    import Heading from "../components/Heading.jsx"
    let score=ref(3)
    let color=ref('orange')
    function update(num){
        score.value=num
    }
</script>

<style scoped>

</style>