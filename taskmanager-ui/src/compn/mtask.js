import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageTask(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(()=> {
   
        const ShowUser =  () =>{
      
      
          const baseURL6 = "http://127.0.0.1:8000/Authapp/task_view/";
          axios.get(baseURL6)
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
      
          ShowUser();
         
      
        }, [] );

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
        return <div>Loading....</div>;
       }
        


return(
    
<div className="d-flex align-content-around flex-wrap p-3">
                {data.length > 0 ?(data.map  ((task, index) => (
                   <div className="card shadow p-3  m-3 bg-white rounded" style={{width: '18rem'}}>
                   <div className="card-body">
                     <h5 className="card-title">Task :- {index + 1}</h5>
                     <h5 className="card-title">{task.useremail}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">{task.taskstatus}</h6>
                     <p className="card-text">{task.task}</p>
                     <button className="btn btn-danger text-right" onClick={()=>Deletetask(task.id)} >Delete Task</button>
    
                    
                   </div>
                 </div>
                ))) : (
                    <h1>No data</h1>
                  )
            }
            </div>
   


)


}