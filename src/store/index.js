import {createStore} from "vuex"

const store=createStore({
    state(){
        return{
            count:360
        }
    },
    mutations:{
        add(state){
            state.count++
        }
    }
})