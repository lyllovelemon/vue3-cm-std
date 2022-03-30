<template>
    <div class="box" :style="{width:width+'px'}"></div>
    <div class="box1"></div>
    <button @click="change">add</button>
</template>

<script setup>
    import {ref} from "vue"
    let width=ref(100)
    function change(){
        if(width.value>=1000) return
        width.value+=100
    }
</script>

<style scoped>
    .box{
        background: red;
        height: 100px;
        transition: width 1s linear;
    }
    .box1{
        width:30px;
        height:30px;
        background: lightcoral;
        position: relative;
        animation: move 2s infinite;
    }
    @keyframes move {
        0% { left:0;}
        50%{left: 200px;}
        100%{left: 0;}
    }
</style>