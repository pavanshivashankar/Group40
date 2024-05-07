import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,useNavigate} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';

function Employee_Navbar() {

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
          <h1 className="logo p-0 m-0 ">  <span className="fw-bold navlogoText">T</span><span className="world">ZOO</span><span className='fs-6 text-muted' > (employee)</span>  </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='text-center d-none d-lg-flex justify-content-center align-items-center'>
            <Link to={'/employee'} className='navLink px-2'>Home</Link>
            <Link to={'/employee/attendence'} className='navLink px-2'>Attendance </Link>
            <Link to={'/employee/eventControl'} className='navLink px-2'>Event Control </Link>
            {/* <Link to={'/employee/support'} className='navLink px-2'>Support Centre </Link> */}
            <Link onClick={logoutHandler} className='navLink px-2'>logout</Link>
            <Link to={'/employee/profile'} className=' mb-2 fs-2'> <CgProfile/> </Link>
          </Nav>
{/*-------------------------------for small screen size content----------------------  */}

          <Nav className='text-center  mt-2 d-flex d-lg-none justify-content-center align-items-center'>
            <Link to={'/employee'} className='navLink px-2 mb-3'>Home</Link>
            <Link to={'/employee/eventControl'} className='navLink px-2 mb-3 '>Event Control </Link>
            {/* <Link to={'/employee/support'} className='navLink px-2 mb-3 '>Support Centre </Link> */}
            <Link  onClick={logoutHandler} className='navLink px-2 mb-3' >logout</Link>
            <Link to={'/employee/profile'} className='fs-1' style={{marginTop:'-1rem', marginRight:'1.5rem'}}> <CgProfile/> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Employee_Navbar;