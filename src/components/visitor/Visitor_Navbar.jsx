import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import {toast} from 'react-toastify'


function Visitor_Navbar() {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
        const response = await fetch('http://localhost:4000/user/logout', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            navigate("/login");
            toast.success("Logged out successfully");
        } else {
            const errorData = await response.json();
            toast.error(errorData.message);
        }
    } catch (error) {
        console.error('Error logging out:', error.message);
        toast.error(error.message);
    }
}

  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow fixed-top">
        <Container fluid>
        <Navbar.Brand href="#home" className='m-0 p-0'>
          <h1 className="logo p-0 m-0 ">  <span className="fw-bold navlogoText">T</span><span className="world">ZOO</span> </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='text-center d-none d-lg-flex justify-content-center align-items-center'>
            <Link to={'/visitor'} className='navLink px-1'>Home</Link>
            <Link to={'/visitor/animals'} className='navLink px-2'>Animals</Link>
            <Link to={'/visitor/event'} className='navLink px-2'>Events</Link>
            <Link to={'/visitor/map'} className='navLink px-2'>Map</Link>
            <Link to={'/visitor/feedback'} className='navLink px-2'>Feedback </Link>
            <Link onClick={logoutHandler} className=' fs-3 mx-4' title='logout'> <IoLogOutOutline/> </Link>
          </Nav>
{/*-------------------------------for small screen size content----------------------  */}

          <Nav className='text-center  mt-2 d-flex d-lg-none justify-content-center align-items-center'>
            <Link to={'/visitor'} className='navLink px-2 mb-3'>Home</Link>
            <Link to={'/visitor/animals'} className='navLink px-2 mb-3'>Animals</Link>
            <Link to={'/visitor/event'} className='navLink px-2 mb-3'>Events</Link>
            <Link to={'/visitor/map'} className='navLink px-2 mb-3'>Map</Link>
            <Link to={'/visitor/feedback'} className='navLink px-2 mb-3'>Feedback </Link>
            <Link onClick={logoutHandler} className='navLink px-2 mb-3' >logout</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Visitor_Navbar;