import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import { loginreducer, modifyreducer } from './reducer';

const rootReducer= combineReducers({
    login:loginreducer,
    order:modifyreducer
})

const middleware=(store)=>(next)=>(action)=>{
    if(typeof action==="function"){
        return action (store.dispatch);
    }
    else{
        next(action);
    }
}

const init={login:false}
export const store= createStore(
    rootReducer,
    applyMiddleware(middleware)
);
