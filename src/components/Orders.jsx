import { useState, useEffect } from "react";
import { store } from "../Redux/store";
export const Orders = () => {
  
    const [orders, setOrders]= useState([])

    useEffect(()=>{
        getData();
    },[])

    const getData = async()=>{
        const res= await fetch("http://localhost:8080/orders");
        const data= await res.json();
        setOrders(data);
    }
    console.log(orders)

    const acceptOrder=()=>{
        console.log("clicked")
        setOrders({
            ...orders,status:"Pending"
        })
    }

    //  Get all data when admin logs in and populate it
    // store it in redux
  
    return (
      <div>
        <div>
          <div  style={{textAlign:"center" ,margin:"auto"}}>
            <select className="controls" name="progress" id="progress">
              <option value="id">ID</option>
              <option value="status">Status</option>
              <option value="cost">Cost</option>
            </select>
          </div>
          <table  style={{textAlign:"center" ,margin:"auto", border:"1px solid black", padding:"10px"}} className="orders">
            <thead>
              <tr>
                <th>ID</th>
                <th>Problem</th>
                <th>Client Name</th>
                <th>Status</th>
                <th>Cost</th>
                <th>Change Status</th>
                <th>Accept</th>
              </tr>
            </thead>
            <tbody>
                {orders.map((e)=>(
                    <tr className="orders-row">
                    <td className="id">{e.id}</td>
                    <td className="problem">{e.problem}</td>
                    <td className="owner">{e.owner_name}</td>
                    <td className="status">{e.status}</td>
                    <td className="cost">{e.cost}</td>
                    <td className="change-status">
                      {/* Show select dropdown only if status is Not Accepted */}
                      <select className="changeStatus" name="changeStatus">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                        <option value="Not Accepted">Not Accepted</option>
                      </select>
                    </td>
                    <td className="accept">
                      {e.status=="Not Accepted"?<button onclick={acceptOrder}>Accept</button>:null}
                      {/* on change make request to update it in db, and show changed status in table */}
                      
                    </td>
                  </tr>
                ))}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  };