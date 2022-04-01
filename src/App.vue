<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import Header from "./components/Header.vue"
</script>

<template>
    <el-container class="App">
        <div class="sidebar-item">
            <router-link to="/login">登录</router-link>
        </div>
        <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <div class="sidebar-item">
                    <router-link to="/">首页</router-link>
                </div>
                <div class="sidebar-item">
                    <router-link to="/about">关于</router-link>
                </div>
                <div class="sidebar-item">
                    <router-link to="/css">动画</router-link>
                </div>
                <div class="sidebar-item">
                    <router-link to="/count">Count累加器</router-link>
                </div>
                <div>

                </div>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<style>
    .App {
        display: flex;
        flex-wrap: wrap;
    }

    .el-header {
        width: 100vw;
        background: #545c64;
        color: #333;
        text-align: center;
    }

    .el-footer {
        background: #b3c0d1;
        color: #333;
        text-align: center;
    }

    .el-aside {
        background: #d3dce6;
        color: #333;
    }

    .sidebar-item {
        width: 100%;
        padding: 5px 10px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
    }

    .sidebar-item a {
        color: #333333;
        text-decoration: none;
    }

    .el-main {
        background: #e9eef3;
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>
