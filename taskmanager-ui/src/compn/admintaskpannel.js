import React from "react";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
// import ReactLoading from "react-loading";

import axios from "axios";


export default function AdminManageTask()
{
    
   
    const currentdate = new Date();
    const { state } = useLocation();
    const email = state && state.email;
    const id = email;
    // const [id, setId] = useState(email);
   
    const [data,setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [uid, setUid] = useState();

useEffect(()=> {
   
  const ShowTask =  () =>{


    const baseURL5 = "http://127.0.0.1:8000/Authapp/loan_filter/";
    axios.post(baseURL5,{email: id})
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        console.log(data);
        setLoading(false);
        
       
       
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error(error);
      });
    }

    ShowTask();
   

  }, [] );

   

   



    const baseURL4 = "http://127.0.0.1:8000/Authapp/task_view/";

    const [task, setTask] = useState('');
    const handleInputLogin = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, value });
      };

    const taskperform = () =>{
        // const task = document.getElementsById('task').value;
        
        console.log(task);
    
        const taskinfo = {
            useremail: id,
            date: currentdate,
            task: task.value
    
        }
        
        axios.post(baseURL4, taskinfo)
      .then((response) => {

        console.log(response.data);
       
      })
      .catch((error) => {
        setLoading(false)
        alert("something went wrong....");
        console.error(error);
      });

    };


    const Deletetask = (uid) =>{

      axios.post("http://127.0.0.1:8000/Authapp/delete_task/",{id:uid})
      .then((response) => {
    
        console.log(response.data);
        window.location.reload();

        
       
      })
      .catch((error) => { 
        setLoading(false);
        alert("something went wrong....");
        console.error(error);
      });

    }


    



    if (loading){
    return (<div>Loading.... </div>);
   }
    
    
   

    return(
        <>
       
  
    <div className="d-flex align-content-around flex-wrap p-3">
                {data.length > 0 ?(data.map  ((task, index) => (
                   <div className="card shadow p-3  m-3 bg-white rounded" style={{width: '18rem'}}>
                   <div className="card-body">
                     <h5 className="card-title">Task :- {index + 1}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">{task.time}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">Term:-{task.term}</h6>
                     <h6 className="card-subtitle mb-2 text-muted">{task.status}</h6>
                     <p className="card-text">{task.amount}</p>
                     {/* <button className="btn btn-danger text-right" onClick={()=>Deletetask(task.id)} >Delete Task</button>
     */}
                    
                   </div>
                 </div>
                ))) : (
                    <h1>No data</h1>
                  )
            }
            </div>
   




        </>
    )

}