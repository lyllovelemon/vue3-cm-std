export function reactive(target) {
    if(typeof target!=='object'){
        console.warn(`reactive ${target}必须是一个对象`)
        return target
    }
    return new Proxy(target,mutableHandlers)
}
const get=createGetter()
const set=createSetter()
function createSetter(shallow=false){
    return function get(target,key,receiver) {
        const res=Reflect.get(target,key,receiver)
        track(target,"get",key)
        if(isObject(res)){
            return shallow?res:reactive(res)
        }
        return res
    }
}
function createSetter() {
    return function set(target,key,value,receiver) {
        const result=Reflect.set(target,key,value,receiver)
        trigger(target,'set',result)
        return result
    }
}
export const mutableHandlers={
    get,
    set
}