import React from "react";
import { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";







export default function Signup() {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",email:"",phone:""
      })

   

      
    
    
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        
    
        setUser({ ...user, [name]: value });

        }
      


    

      const baseURL = "http://127.0.0.1:8000/Authapp/register_view/";
      const handleSubmit = (e) => {
          e.preventDefault();
          
          console.log(user)
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
  <label htmlFor="name">Name:</label><br />
  <input type="text" id="name" name="name" value={user.name} onChange={handleInputs} required /><br /><br />
  <label htmlFor="email">Email:</label><br />
  <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} required /><br /><br />
  <label htmlFor="phone">Phone:</label><br />
  <input type="tel" id="phone" name="phone" value={user.phone} onChange={handleInputs} required /><br /><br />
  <button type="button" onClick={handleSubmit} >Submit</button>
</form>
<Outlet />


 
</>





    );


            
    
}