import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import './Topnav.css'
// import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Signup from './signup';
import Home from './home';
import Task from './task';
import ManageUser from './muser';
import AdminManageTask from './admintaskpannel';
import ManageTask from './mtask';

// ===============================================



// import { Container, Navbar, Nav } from 'react-bootstrap';







function Guest() {




    return (
        <>
       
 
    <div>
      <ul>
        <li><a href='/' >Home</a></li>
        <li><a href='/signup' >SignUp</a></li>
        <li><a href='/atask' >Apply for loan</a></li>
        <li><a href='/muser' >ManageUser</a></li>
        <li><a href='/mtask' >ManageLoan</a></li>
      </ul>
    </div>


            <div className="">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/atask" element={<Task />} />
                    <Route path="/muser" element={<ManageUser />} />
                    <Route path="/mtask" element={<ManageTask />} />
                    <Route path="/admintask" element={<AdminManageTask />} />
                   
                </Routes>
            </Router>
            </div>
        </>
    );
}

export default Guest;


