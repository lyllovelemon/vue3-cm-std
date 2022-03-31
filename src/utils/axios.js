import axios from "axios"
import {useMsgBox,Message} from "element-plus"
import store from "@/store"
import {getToken} from "@/utils/auth"
import {process} from "node"
let MsgBox=useMsgBox()
const service=axios.create({
    baseUrl:process.env.VUE_APP_BASE_API,
    timeout:5000
})
service.interceptors.request.use(
    config=>{
        const token=getToken()
        if(token){
            config.headers.gtoken=token
        }
        return config
    },
    error=>{
        console.error(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response=>{
        const res=response.data
        if(res.code!==200){
            console.log('接口报错--->',res.message)
            return Promise.reject(new Error(res.message||'Error'))
        }
        if(res.code===50008||res.code===50012){
            MsgBox.confirm('你已登出，需要重新登录','确认登出',{
                confirmButtonText:'重新登录',
                cancelButtonText:"取消",
                type:"warning"
            }).then(()=>{
                store.dispatch('user/resetToken').then((()=>{
                    location.reload()
                }))
            })
        }
        return res
    },
    error=>{
        console.log('接口报错--->',error)
        return Promise.reject(error)
    }
)
export default service