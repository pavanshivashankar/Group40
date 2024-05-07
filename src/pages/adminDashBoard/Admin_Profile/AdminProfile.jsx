import React, {useState} from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminProfile() {

  return (
    <>
        <div className="">
            <Admin_Dash_Nav />
        </div>

        <div className="Sep_Margin">
            <section className='mt-lg-0 mt-5'>
                <div className="mt-lg-0 mt-4 p-3">
                <div className="container mt-4 ">
                <div className="row justify-content-center">
                    <div className=" col-md-6 ">
                    <h3 className="fw-bold text-muted">Admin profile </h3>
                        <div className="shadow p-3">
                            <figure className='text-center'>
                                <img src="https://source.unsplash.com/800x800/?profile" className='empImg' width="120px" alt="" title='your profile picture' />
                                <figcaption className='fw-bold fs-3 mt-2 mb-3 text-muted text-decoration-underline'>Hi john !</figcaption>
                            </figure>
                        <div className="mt-3">
                        <div>
                            <div className="d-flex" style={{gap: "12px"}}>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeId" className='text-muted '>Emp ID</label>
                                    <input type="text" name="employeeId"  readOnly id='employeeId' value="Emp.ID: 01" className="w-100 p-2 inputField" />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeUsername" className='text-muted '>Username</label>
                                    <input type="text" name="employeeUsername" readOnly id='employeeUsername' value="John10"  className="w-100 p-2 inputField" />
                                </div>
                            </div>
                            <div className="d-flex" style={{gap: "12px"}}>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeName" className='text-muted '>Name</label>
                                    <input type="text" name="employeeName" readOnly id='employeeName' value="John"  className="w-100 p-2 inputField"  />
                                </div>
                                <div className="mb-3 w-50">
                                    <label htmlFor="employeeEmail" className='text-muted '>Email</label>
                                    <input type="text" name="employeeEmail" readOnly id='employeeEmail' value="John@gmail.com" className="w-100 p-2 inputField" />
                                </div>
                            </div>
                            <div className="d-flex mb-4" style={{gap: "12px"}}>
                                <div className="w-50">
                                    <label htmlFor="employeeRole" className='text-muted '>Role</label>
                                    <input type="text" name="employeeRole" readOnly id='employeeRole' value="Admin" className="w-100 p-2 inputField" />
                                </div>
                                <div className="w-50">
                                    <label htmlFor="employeeShift" className='text-muted '>Work shift</label>
                                    <input type="text" name="employeeShift" readOnly id='employeeShift' value="Morning(6:00-12:00)"  className="w-100 p-2 inputField"/>
                                </div>
                            </div>                            
                        </div>
                        <div className="">
                            <Link to={'/admin/profile/edit/06'} className='text-decoration-none'>Edit profile</Link>
                        </div>
                    </div>

                    </div>
                    </div>
                </div>
            </div>

                </div>
            </section>
        </div>    
        
    </>
  )
}

export default AdminProfile;