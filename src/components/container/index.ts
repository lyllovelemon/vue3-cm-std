import {App} from "vue"
// @ts-ignore
import ElContainer from "./Container.vue"
// @ts-ignore
import ElHeader from "./Header.vue"
// @ts-ignore
import ElAside from "./Aside.vue"
// @ts-ignore
import ElFooter from "./Footer.vue"
// @ts-ignore
import ElMain from "./Main.vue"
export default {
    install(app:App){
        app.component(ElContainer.name,ElContainer)
        app.component(ElHeader.name,ElHeader)
        app.component(ElAside.name,ElAside)
        app.component(ElFooter.name,ElFooter)
        app.component(ElMain.name,ElMain)
    }
}