import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { toast } from "react-toastify";

function AnimalDash_Navbar() {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await fetch("http://localhost:4000/user/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
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
      console.error("Error logging out:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary shadow fixed-top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="m-0 p-0">
            <h1 className="logo p-0 m-0 ">
              {" "}
              <span className="fw-bold navlogoText">T</span>
              <span className="world">ZOO</span>
              <span className="fs-6 text-muted"> (caretaker)</span>{" "}
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="text-center d-none d-lg-flex justify-content-center align-items-center">
              <Link to={"/caretaker/attendance"} className="navLink px-2">
                Attendance
              </Link>
              <Link to={"/caretaker/employee"} className="navLink px-2">
                Employees
              </Link>
              <Link to={"/caretaker/animal"} className="navLink px-2">
                Animal
              </Link>
              {/* <form action="">
                <div className="searchDiv">
                  <input
                    type="search"
                    name="searchInput"
                    className="navLink w-100 px-2 searchBar py-1"
                    placeholder="Search"
                  />
                  <button className="searchBtn">
                    {" "}
                    <MdOutlineSearch className="searchIcon" />{" "}
                  </button>
                </div>
              </form> */}
              <Link onClick={logoutHandler} className="navLink px-2 mx-2">
                logout
              </Link>
            </Nav>
            {/*-------------------------------for small screen size content----------------------  */}

            <Nav className="text-center  mt-2 d-flex d-lg-none justify-content-center align-items-center">
              <Link to={"/caretaker/employee"} className="navLink px-2 mb-3">
                Employees
              </Link>
              <Link to={"/caretaker/animal"} className="navLink px-2 mb-3">
                Animal
              </Link>

              <Link onClick={logoutHandler} className="navLink px-2 mb-3">
                logout
              </Link>
              {/* <form action="">
                <div className="searchDiv1 mb-2">
                  <input
                    type="search"
                    name=""
                    className="navLink px-2 searchBar py-1"
                    placeholder="Search"
                  />
                  <button className="searchBtn">
                    {" "}
                    <MdOutlineSearch className="searchIcon" />{" "}
                  </button>
                </div>
              </form> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AnimalDash_Navbar;
