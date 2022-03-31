<template>
    <span class="dustbin">🗑</span>
    <div class="animate-wrap">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="animate" v-show="animate.show">
                📋
            </div>
        </transition>
    </div>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo"/>
        <transition name="modal">
            <div class="info-wrapper" v-if="showModal">
                <div class="info">
                    请输入清单项
                </div>
            </div>
        </transition>
        <button v-if="active<all " @click="clear">清理</button>
        <ul v-if="todos.length">
            <transition-group name="flip-list" tag="ul">
                <li v-for="todo in  todos" :key="todo.title">
                    <input type="checkbox" v-model="todo.done"/>
                    <span :class="{done:todo.done}">{{todo.title}}</span>
                    <span class="remove-btn" @click="removeTodo($event,i)">❌</span>
                </li>
            </transition-group>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选
            <input type="checkbox" v-model="allDone">
            <span>{{active}}/{{all}}</span>
        </div>
    </div>
</template>

<script setup>
    import {reactive} from "vue"
    import useTodos from '../utils/useTodos.js'
    let animate=reactive({
        show:false,
        el:null
    })
    function beforeEnter(el){
        let dom=animate.el
        let rect=dom.getBoundingClientRect()
        let x=window.innerWidth-rect.left-60
        let y=rect.top-10
        el.style.transform=`translate(-${x}px,${y}px)`
    }
    function enter(el,done){
        document.body.offsetHeight
        el.style.transform=`translate(0,0)`
        el.addEventListener("transitioned",done)
    }
    function afterEnter(el){
        animate.show=false
        el.style.disply='none'
    }
    let {title,todos,addTodo,clear,active,all,allDone,showModal}=useTodos()
    function removeTodo(e,i){
        animate.el=e.target
        animate.show=true
        todos.value.splice(i,1)
    }
</script>

<style lang="scss" scoped>
    $padding:10px;
    $white:#fff;
    ul{
        width: 500px;
        margin: 0 auto;
        padding: 0;
        li{
            &:hover{
                cursor: pointer;
            }
            list-style-type: none;
            margin-bottom: $padding;
            padding: $padding;
            background: $white;
            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
    }
    h1{
        color:red;
    }
    .flip-list-move{
        transition: transform 0.8s ease;
    }
    .flip-list-enter-active,
    .flip-list-leave-active{
        transition: all 1s ease;
    }
    .flip-list-enter-from,.flip-list-leave-to{
        opacity: 0;
        transform: translateX(30px);
    }
    .info-wrapper{
        position: fixed;
        top: 180px;
        width: 200px;
    }
    .info{
        padding: 20px;
        color: #fff;
        background: #d88986;
    }
    .modal-enter-active,.modal-leave-active{
        transition: all .3s ease;
    }
    .modal-enter-from{
        opacity: 0;
        transform: translateY(-60px);
    }
    .modal-leave-to{
        opacity: 0;
        transform: translateY(-60px);
    }
    .remove-btn{
        cursor: pointer;
    }
    .animate-wrap .animate{
        position :fixed;
        right :10px;
        top :10px;
        z-index: 100;
        transition: all 0.5s linear;
    }
</style>