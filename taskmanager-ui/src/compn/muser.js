import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ManageUser(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(()=> {
   
        const ShowUser =  () =>{
      
      
          const baseURL6 = "http://127.0.0.1:8000/Authapp/register_view/";
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

const DeleteUser = (uid) =>{

            axios.post("http://127.0.0.1:8000/Authapp/delete_user/",{id:uid})
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
    

    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">User-ID</th>
      <th scope="col">Email-ID</th>
      <th scope="col">Name</th>
      <th scope="col">View Task</th>
      <th scope="col">Delete User</th>
    </tr>
  </thead>
  <tbody>
  {data.map((task, index) => (
    <tr className="shadow p-3 mb-5 bg-white rounded">
      <th scope="row">{task.id}</th>
      <td>{task.email}</td>
      <td>{task.name}</td>
      <td><button className="btn btn-warning" onClick={()=>navigate("/admintask", { state: { email: task.email } })}>View Task</button></td>
      <td><button className="btn btn-danger" onClick={()=>DeleteUser(task.id)}>Delete Profile</button></td>
    </tr>
     ))}
  </tbody>
</table>
   

)


}