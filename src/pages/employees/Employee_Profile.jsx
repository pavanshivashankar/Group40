import React, { useEffect, useState } from 'react';
import Employee_Navbar from '../../components/employeeAccount/Employee_Navbar';
import { Link } from 'react-router-dom';

function Employee_Profile() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
              const response = await fetch("http://localhost:4000/user/byUserId", {
                method: "GET",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              if (response.ok) {
                const resData = await response.json();
                setData(resData);
                console.log(data)
              } else {
                console.error(response.status);
              }
            } catch (error) {
              console.error( error);
            }
          };

          fetchData()
    }, [])

  return (
    <>
        <Employee_Navbar/>
        <section style={{marginTop:'5rem'}}>
            <div className="container mt-4 ">
                <div className="row justify-content-center p-2">
                    <div className=" col-md-6 p-3">
                        <h3 className="fw-bold text-muted">My profile </h3>
                        <div className="shadow p-3">
                            <figure className='text-center'>
                                <img src="https://source.unsplash.com/800x800/?profile" className='empImg' width="120px" alt="" title='your profile picture' />
                                <figcaption className='fw-bold fs-3 mt-2 mb-3 text-muted text-decoration-underline'> {data.name} </figcaption>
                            </figure>
                        <div className="mt-3">
                        <div>
                            <div className="d-flex" style={{gap: "12px"}}>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeId" className='text-muted '>Emp ID</label>
                                    <input type="text" name="employeeId" id='employeeId' value={data._id} readOnly className="w-100 p-2 inputField" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeUsername" className='text-muted '>Username</label>
                                    <input type="text" name="userName" id='userName' value={data.userName}  className="w-100 p-2 inputField" />
                                </div>
                            </div>
                            <div className="d-flex" style={{gap: "12px"}}>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeName" className='text-muted '>Name</label>
                                    <input type="text" name="name" id='name' value={data.name}  className="w-100 p-2 inputField"  />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeEmail" className='text-muted '>Email</label>
                                    <input type="text" name="email" id='email' value={data.email} className="w-100 p-2 inputField" />
                                </div>
                            </div>
                            <div className="d-flex mb-4" style={{gap: "12px"}}>
                                <div className="w-50">
                                    <label htmlFor="employeeRole" className='text-muted '>Role</label>
                                    <input type="text" name="employeeRole" id='employeeRole' value={data.role} readOnly className="w-100 p-2 inputField" />
                                </div>
                                {/* <div className="w-50">
                                    <label htmlFor="employeeShift" className='text-muted '>Work shift</label>
                                    <input type="text" name="employeeShift" id='employeeShift' value={data.password} className="w-100 p-2 inputField"/>
                                </div> */}
                            </div>                            
                        </div>
                        <div className="">
                            <Link to={'/employee/profile/edit/06'} className='text-decoration-none'>Edit profile</Link>
                        </div>
                    </div>

                    </div>
                    </div>
                </div>
            </div>
        </section>

        <p className='inline mx-2 text-blue-600 text-left'>
              <Link to={'/employee'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p>
    </>
  )
}

export default Employee_Profile