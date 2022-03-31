import {createRouter,createWebHashHistory} from "vue-router"
import Home from "../pages/home.vue"
import About from "../pages/about.vue"
import Css from "../pages/css.vue"
import Count from "../pages/count.vue"
import Login from "../components/Login.vue"
import {getToken} from "../utils/auth";
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
        component:Css
    },
    {
        path:"/count",
        name:'Count',
        component:Count
    },
    {
        path:"/login",
        name:"login",
        component:Login,
        // hidden:true
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach(async(to,from,next)=>{
    let token=getToken()
    if(!token){
        next('/login')
    }
    return true
})
export default router