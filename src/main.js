import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"
import ElContainer from "./components/container"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
createApp(App).use(store).use(router).use(ElContainer).use(ElementPlus).mount('#app')
