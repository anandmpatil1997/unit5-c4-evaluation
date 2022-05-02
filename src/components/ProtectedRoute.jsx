// /orders and /neworder are protected routes
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ children }) => {
    let isLogin= useSelector((store)=>store.login.login)
    if(!isLogin){
        return <Navigate to={"/"}></Navigate>
    }
    return children
};