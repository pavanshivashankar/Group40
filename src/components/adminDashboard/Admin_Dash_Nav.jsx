import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';



function Admin_Dash_Nav() {

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
        {/* nav bar lg screen  */}
        <div className="d-none d-lg-flex">
          <div className=" Vnavbar shadow position-fixed vh-100 ">
            <div className="border-bottom px-3 a">
              <h1 className="logo p-0 m-0 ">  <span className="fw-bold navlogoText">T</span><span className="world">ZOO</span><span className='fs-6 text-muted' > (admin)</span>  </h1>
            </div>
            <div className="" >
              <div className="vLinks">
                <Link to={'/admin'} className='text-decoration-none text-white px-2 mb-3'>Dashboard</Link>
              </div>

              <div className="vLinks">
                <details className='vLinks'>
                    <summary className='text-white '>Staff management</summary>
                    <div className="ddown">
                      <Link to={'/admin/staffs'} className=' text-decoration-none text-white px-2 mb-3'>All staff</Link>
                    </div>
                    <div className="ddown">
                      <Link to={'/admin/addStaff'} className='text-decoration-none text-white px-2 mb-3'>Add Staff</Link>
                    </div>
                  </details>
              </div>

              <div className="vLinks">
                <details className='vLinks'>
                    <summary className='text-white '>Animal management</summary>
                    <div className="ddown">
                      <Link to={'/admin/allAnimals'} className='text-decoration-none text-white px-2 mb-3'>All Animals</Link>
                    </div>
                    <div className="ddown">
                      <Link to={'/admin/addAnimal'} className='text-decoration-none text-white px-2 mb-3'>Add Animal</Link>
                    </div>
                  </details>
              </div>

              <div className="vLinks">
                <details className='vLinks'>
                    <summary className='text-white '>Content management</summary>
                    <div className="ddown">
                      <Link to={'/admin/allEvents'} className='text-decoration-none text-white px-2 mb-3'>All Events</Link>
                    </div>
                    <div className="ddown">
                      <Link to={'/admin/addEvent'} className='text-decoration-none text-white px-2 mb-3'>Add Events</Link>
                    </div>
                    <div className="ddown">
                      <Link to={'/admin/eventRegistrations'} className='text-decoration-none text-white px-2 mb-3'>Event Registrations</Link>
                    </div><br />
                    <div className="ddown">
                      <Link to={'/admin/announcement'} className='text-decoration-none text-white px-2 mb-3'>Announcement</Link>
                    </div>
                    <div className="ddown">
                      <Link to={'/admin/announcement/add'} className='text-decoration-none text-white px-2 mb-3'>Add Announcement</Link>
                    </div>

                  </details>
              </div>

              <div className="vLinks">
                <Link onClick={logoutHandler} className='text-decoration-none text-white px-2 mb-3' >logout</Link>
              </div>
              <div className="vLinks">
                <Link to={'/admin/feedback'} className='text-decoration-none text-white px-2 mb-3' >Feedbacks</Link>
              </div>
              <div className="vLinks">
              <Link to={'/admin/profile'} title='Admin profile' className='fs-2' style={{marginTop:'-1rem'}}> <CgProfile/> </Link>
              </div>
              
            </div>
          </div>
        </div>



        <Navbar collapseOnSelect expand="lg" className=" d-lg-none bg-body-tertiary shadow fixed-top">
        <Container fluid>
        <Navbar.Brand href="#home" className='m-0 p-0'>
          <h1 className="logo p-0 m-0 ">  <span className="fw-bold navlogoText">T</span><span className="world">ZOO</span><span className='fs-6 text-muted' > (admin)</span>  </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

{/*-------------------------------for small screen size content----------------------  */}

          <Nav className='text-center  mt-2 d-flex d-lg-none justify-content-center align-items-center'>
            <Link to={'/admin'} className='navLink px-2 mb-3'>Dashboard</Link>

          <div className=" navLink px-2 text-black mb-3">
                <details className=''>
                    <summary className='text-black'>Staff management</summary>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/staffs'} className='text-decoration-none  LinkColor px-2 mb-3'>All staff</Link>
                    </div>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/addstaff'} className='text-decoration-none  LinkColor px-2 mb-3'>Add Staff</Link>
                    </div>
                  </details>
          </div>
          <div className=" navLink px-2 text-black mb-3">
                <details className=''>
                    <summary className='text-black'>Animal management</summary>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/allAnimals'} className='text-decoration-none  LinkColor px-2 mb-3'>All Animals</Link>
                    </div>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/addAnimal'} className='text-decoration-none  LinkColor px-2 mb-3'>Add Animal</Link>
                    </div>
                  </details>
          </div>

          <div className=" navLink px-2 text-black mb-3">
                <details className=''>
                    <summary className='text-black'>Content management</summary>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/allEvents'} className='text-decoration-none  LinkColor px-2 mb-3'>All Events</Link>
                    </div>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/addEvent'} className='text-decoration-none  LinkColor px-2 mb-3'>Add Event</Link>
                    </div>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/eventRegistrations'} className='text-decoration-none  LinkColor px-2 mb-3'>Event Registrations</Link>
                    </div>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/announcement'} className='text-decoration-none  LinkColor px-2 mb-3'>Announcement</Link>
                    </div>
                    <div className="ddown1 my-2 ">
                      <Link to={'/admin/announcement/add'} className='text-decoration-none  LinkColor px-2 mb-3'> Add Announcement</Link>
                    </div>
                  </details>
          </div>

            <Link onClick={logoutHandler} className='navLink px-2 mb-3' >logout</Link>
            <Link to={'/admin/feedback'} className='navLink px-2 mb-3' >feedbacks</Link>
            <Link to={'/admin/profile'} title='Admin profile' className='fs-2 mb-2' style={{marginTop:'-1rem', marginRight:'1.5rem'}}> <CgProfile/> </Link>
            {/* <form action="" >
              <div className='searchDiv1 mb-2' >
                <input type="search" name="" className='navLink px-2 searchBar py-1' placeholder='Search' />
                <button className='searchBtn'> <MdOutlineSearch className='searchIcon'/> </button>
              </div>
            </form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Admin_Dash_Nav