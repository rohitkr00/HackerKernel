import React from "react";
import { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";







export default function Task() {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        useremail:"",taskstatus:"",task:""
      })

   

      
    
    
      let name, value, type;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        type = e.target.type;
    
        if (type === "file") {
          setUser({ ...user, photo: e.target.files[0] });
        } else {
          setUser({ ...user, [name]: value });
        }
      }


    

      const baseURL = "http://127.0.0.1:8000/Authapp/task_view/";
      const handleSubmit = (e) => {
          e.preventDefault();
          
          
          axios.post(baseURL, user)
          .then((response) => {
            
            console.log(response);
            if (response.data != null){
            //   toast.success("User has been registered");
              navigate("/");
            }
          })
          .catch((error) => {
            // toast.error("Wrong credentials Please Re-enter the details...!!")
            console.error(error);
          });       
          
      }


     





    return (
        
 <>

<form method="post">
  <label htmlFor="user-email">User-mail:</label><br />
  <input type="text" id="name" name="useremail" value={user.useremail} onChange={handleInputs} required /><br /><br />
  <label htmlFor="status">StatusOfTask:</label><br />
  <label htmlFor="status">Pending:</label><br />
  <input type="radio" name="taskstatus" value="pending" checked={user.taskstatus==="pending"} onChange={handleInputs} required /><br /><br />
  <label htmlFor="status">Completed:</label><br />
  <input type="radio" name="taskstatus" value="completed" checked={user.taskstatus==="completed"} onChange={handleInputs} required /><br /><br />
  
  <label htmlFor="phone">Task:</label><br />
  <input type="text" id="phone" name="task" value={user.task} onChange={handleInputs} required /><br /><br />
  <input type="submit" onClick={handleSubmit} defaultValue="Submit" />
</form>
<Outlet />


 
</>





    );


            
    
}