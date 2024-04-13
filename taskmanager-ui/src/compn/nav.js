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

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//     console.log("toogle is working");
//   };

//   // Function to close the mobile navigation menu
//   const closeNav = () => {
//     setIsNavOpen(false);
//   };



    return (
        <>
       
          
{/* 
<Navbar  expand="lg" className='shadow p-1 mb-2 '>
      <Container >
        <Navbar.Brand href="/" ><h3>User-Managment</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='list_grp'>
            <Nav.Link href="/" className='list_item'><h6>Home</h6></Nav.Link>
            <Nav.Link href="/about" className='list_item'><h6>About</h6></Nav.Link>
            <Nav.Link href="/login" className='list_item'><h6>Login</h6></Nav.Link>
            <Nav.Link href="/signup" className='list_item'><h6>SignUp</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    <div>
      <ul>
        <li><a href='/' >Home</a></li>
        <li><a href='/signup' >SignUp</a></li>
        <li><a href='/atask' >AssignTask</a></li>
        <li><a href='/muser' >ManageUser</a></li>
        <li><a href='/mtask' >ManageTask</a></li>
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


