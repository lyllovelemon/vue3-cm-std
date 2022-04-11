
<template>
  <div>
    <h1 @click="add">{{ count1 }}</h1>
  </div>
</template>

<script setup>
  import { reactive,computed,ref,watchEffect } from "vue"
  let count1 = ref(1)
  let color = ref('red')
  let obj=reactive({
    count:1
  })
  let double=computed(()=>obj.count*2)
  obj.count=2
  watchEffect(()=>{
    console.log('数据被修改了',obj.count,double.value)
  })
  function add() {
    count1.value++
    color.value = Math.random()>0.5? "blue":"red"
  }
</script>

<style scoped>
  h1 {
    color:v-bind(color);
  }
</style>>