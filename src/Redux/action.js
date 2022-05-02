export const LOGIN= "LOGIN";
export const ACCEPT_ORDER="ADD_ORDER";
export const ADD_ORDER="ADD_ORDER"
export const isLogin=(payload)=>{
    return {
        type:LOGIN,
        payload
    }
}

export const addOrder=(payload)=>{
    return {
        type:ADD_ORDER,
        payload
    }
} 
export const getOrder=()=>async(dispatch)=>{
   let res= await fetch("http://localhost:8080/orders");
   let data= await res.json;
   dispatch(addOrder(data));
}
export const acceptOrder=(payload)=>{
    return {
        type:ACCEPT_ORDER,
        payload
    }
} 