// import { store } from "../Redux/store";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export const NewOrder = () => {
    const [orders, setOrders]= useState([]);
    const owner= localStorage.getItem("owner_name");
    const dispatch= useDispatch();
    const store= useSelector((store)=>store.order.order);
    console.log(store)

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        const res= await fetch("http://localhost:8080/orders");
        const data= await res.json();
        setOrders(data);
    }

    const [form, setForm]=useState({
       problem:"",
       owner_name:owner,
       brand:"",
       status:"Not Accepted" 
    })

    const handleChange =(elem) => {
        const {name, value} = elem.target;
  
        setForm({
          ...form,
          [name] : value
        })
      }

      const handleSubmit=()=>{
        //   event.prevetDefault();
          console.log("clicked")
          fetch("http://localhost:8080/orders",{
              method:"POST",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify(form)
          }).then(()=>{
              dispatch(getData());
          })
          alert("Order Added successfully")
      }

    // console.log(orders)
    // console.log(storez.login.login)
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
   
    return (
      <div>
        <div  className="form">
          <input
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
            onChange={handleChange}
          />
          {/* This input is readonly, it's coming from redux */}
          <input
            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            value={owner}
            readOnly
          />
          <input
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"
            onChange={handleChange}
          />
          {/* Create new problem, show it in below form immediately */}
          <button onClick={handleSubmit} className="submit">submit</button>
        </div>
  
        <div className="pastOrders">
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          </button>
  
          {orders.map((e)=>(
              <div key={e.id} className="past-orders">
              <span className="id">{e.id}</span>. <span className="problem">{e.problem}</span>{" "}
              <span className="cost">
                {e.status=="Not Accepted"? "> Not Accepted Yet": `> $${e.cost}`}
              </span>
              <p className="status">Status:{e.status}</p>
              <hr />
            </div>
          ))}
          
        </div>
      </div>
    );
  };