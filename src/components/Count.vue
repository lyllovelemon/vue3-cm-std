<template>
    <div>
        <span @click="add">{{count}}</span>
        <button @click="asyncAdd">asyncAdd</button>
        <div>{{double}}</div>
    </div>
</template>

<script setup>
 import {computed} from "vue"
 import {useStore} from "vuex"
 let store=useStore()
 let count=computed(()=>store.state.count)
 let double=computed(()=>store.state.double)
 function add(){
     store.commit("add")
 }
 function asyncAdd() {
    store.dispatch('asyncAdd')
 }
</script>

<style scoped>

</style>