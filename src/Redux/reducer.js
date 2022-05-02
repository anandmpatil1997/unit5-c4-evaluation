import { ADD_ORDER, LOGIN } from "./action"

const init={login:false}
const loginreducer= (store=init, {type, payload})=>{
    switch(type){
    case LOGIN:
        return {...store, login:payload}
    default:
        return store;
    }
}
const initOrder= {order:{}}
const modifyreducer= (store=initOrder, {type, payload})=>{
    switch(type){
        case ADD_ORDER:
            return {...store, order:payload}
        default:
            return store;
        }
}



export {loginreducer, modifyreducer}