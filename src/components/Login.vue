<template>
    <div class="login">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
                <el-form
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        class="login-form"
                        :size="formSize">
                    <h3 class="title">系统登录</h3>
                    <el-form-item label="" prop="userName">
                        <el-input class="login-input" v-model="ruleForm.userName" placeholder="请输入登录账号"/>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input class="login-input" v-model="ruleForm.password" placeholder="请输入登录密码"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue'

    const formSize = ref('default')
    const ruleFormRef = ref()
    const ruleForm = reactive({
        userName: 'lyl',
        password: ''
    })

    const rules = reactive({
        userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 5, max: 16, pattern: /^[a-zA-Z0-9_-]{5,16}$/, message: '请输入5-16位数字、字母或符号"-" "_"', trigger: 'blur'},
        ],
        password: [
            {required: true, message: '请输入密码', trigger: 'blur',}
        ]
    })

    const submitForm = async (formEl) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (!valid) return
            console.log('校验通过--->', fields)
        })
    }

    function handleLogin() {
    }
</script>

<style lang="scss" scoped>
    .login-form{
        width: 340px;
        height: 315px;
        padding: 20px;
        background: #f9fafc;
        background-clip: padding-box;
        margin-bottom: 20px;
        box-shadow: 0 0 10px #333;
    }
    .title{
        margin: 0 auto 40px;
        text-align: left;
        padding: 0 10px;
        font-weight: 600;
        height: 18px;
        font-size: 18px;
        border-left: 3px solid #4183d7;
    }
    .el-form-item--default{
        margin-bottom: 30px;
        .el-form-item__content{
            display: flex;
            justify-content: center;
        }
    }
    .login-input{
        width: 260px;
        height: 40px;
    }
    .login-btn{
        width: 260px;
        height: 40px;
        color: #fff;
        font-size: 15px;
        background: #4183d7;
        border: #4183d7;
    }
</style>