import {ref,watch} from 'vue'
export default function useFavicon(newIcon) {
    const favicon=ref(newIcon)

    const updateFavicon=(icon)=>{
        document.head.querySelectorAll(`link[ref*="icon"]`).forEach(el=>el.href=`${icon}`)
    }
    const reset=()=>favicon.value='/favicon.ico'
    watch(favicon,(i)=>{
        updateFavicon(i)
    })
    return {favicon,reset}
}