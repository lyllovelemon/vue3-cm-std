import {createRouter,createWebHashHistory} from "vue-router"
import Home from "../pages/home.vue"
import About from "../pages/about.vue"
import Login from "../components/Login.vue"
import {getToken} from "../utils/auth"
import NpProgress from "nprogress"
const routes=[
    {
        path:"/",
        name:'Home',
        component:Home
    },
    {
        path:"/about",
        name:"About",
        component: About
    },
    {
        path:"/css",
        name:"Css",
        component:()=>import("../pages/css.vue")
    },
    {
        path:"/count",
        name:'Count',
        component:()=>import("../pages/count.vue")
    },
    {
        path:"/login",
        name:"login",
        component:Login,
         hidden:true
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach(async(to,from,next)=>{
    let token=getToken()||'默认已登录'
    if(!token){
        next('/login')
        return false
    }
    NpProgress.start()
    next()
    return true
})

router.afterEach(async (to,from,next)=>{
    NpProgress.done()
})
export default router