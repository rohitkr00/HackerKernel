import React from "react";
import { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";







export default function Task() {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        useremail:"",status:"pending",term:"",amount:""
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


    

      const baseURL = "http://127.0.0.1:8000/Authapp/loan_view/";
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

  <label htmlFor="user-email">Term:</label><br />
  <input type="text" id="name" name="term" value={user.term} onChange={handleInputs} required /><br /><br />
  
  
  <label htmlFor="user-email">Amount:</label><br />
  <input type="text" id="name" name="amount" value={user.amount} onChange={handleInputs} required /><br /><br />
  
  <input type="submit" onClick={handleSubmit} defaultValue="Submit" />
</form>
<Outlet />


 
</>





    );


            
    
}