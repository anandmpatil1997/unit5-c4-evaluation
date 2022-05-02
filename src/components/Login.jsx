import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { store } from "../Redux/store";
// import { useDispatch } from "react-redux";
import { LOGIN} from "../Redux/action";
export const Login = () => {
    // const dispatch= useDispatch();
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const [data, setData]=useState([

    ]);

    const handleChange =(elem) => {
      const {id, value} = elem.target;

      setForm({
        ...form,
        [id] : value
      })
    }

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async()=>{
        const res= await fetch("http://localhost:8080/users");
        const data= await res.json();
        setData(data);
    }
    console.log(data)
    

    const handleSubmit= ()=>{
       data.map((e)=>{
           
           if(e.username===form.username && e.pass===form.pass){ 
               localStorage.setItem("owner_name", e.username)
            store.dispatch({type:LOGIN, payload:true})
               if(e.role=="admin"){
                   navigate("/orders")
               }
               if(e.role=="client")
               {
                   navigate("/neworder")
               }
           }
       }) 

    }
    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          className="password"
          type="password"
          name="password"
          id="pass"
          placeholder="Enter password"
          onChange={handleChange}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button onClick={handleSubmit}  className="submit">Login</button>
      </div>
    );
  };