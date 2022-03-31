import axios from "axios"
//import {useMsgBox,Message} from "element-plus"
import store from "@/store"
import {getToken} from "@/utils/auth"
import {process} from "node"
const service=axios.create({
    baseUrl:process.env.VUE_APP_BASE_API,
    timeout:5000
})
service.interceptors.request.use(
    config=>{
        if(store.getters.token){
            config.headers['X-Token']=getToken()
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
        return res
    },
    error=>{
        console.log('接口报错--->',error)
        return Promise.reject(error)
    }
)
export default service