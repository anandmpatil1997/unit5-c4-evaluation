import { store } from "../Redux/store";
import { LOGIN } from "../Redux/action";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
    const navigate= useNavigate();
    store.dispatch({type:LOGIN, payload:false})
    navigate("/")

    // Logout component, just log user out and take him to `/` homepage
  
    // suggestion: if you are storing anyting in redux it's a good idea to
    // empty it before loggin out. eg: order
  
    return <></>;
  };