import React, {useState} from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import {useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditProfile() {
    const {id} = useParams();

    const [inputData, setInputData] = useState( { userName:'', name:'', email:'',password:'', confirmPassword:'',profilePic:''} )
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    const updateAdminProfileHandler = (e)=>{
        e.preventDefault();
        toast.success("toast working fine")
    }

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
                <h3 className="fw-bold text-muted">Update your profile </h3>
                        <div className="shadow p-3">
                            <div className="mt-3">
                                <form action="" method="" onSubmit={updateAdminProfileHandler}>
                                    <div className="d-flex" style={{gap: "12px"}}>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeUsername" className='text-muted '>Username</label>
                                            <input type="text" name="userName" id='employeeUsername'  className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter Username' />
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeName" className='text-muted '>Name</label>
                                            <input type="text" name="name" id='employeeName'  className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter Name'  />
                                        </div>
                                    </div>
                                    <div className="d-flex" style={{gap: "12px"}}>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeEmail" className='text-muted '>Email</label>
                                            <input type="email" name="employeeEmail" id='employeeEmail' className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter Email'/>
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeProfile" className='text-muted '>update profile</label>
                                            <input type="file" name="profilePic" id='employeeProfile' className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Choose profile Image' />
                                        </div>
                                    </div>   
                                    <div className="d-flex" style={{gap: "12px"}}>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeePassword" className='text-muted '>password</label>
                                            <input type="password" name="password" id='employeePassword'  className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter password'  />
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="confirmPassword" className='text-muted '>confirm password</label>
                                            <input type="password" name="confirmPassword" id='confirmPassword' className="w-100 p-2 inputField" onChange={getInputdata} placeholder='confirm password' />
                                        </div>
                                    </div>   
                                    <button className="btn btn-primary py-2 px-5 mt-3">update </button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/admin/profile'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
            </p>

            </div>
            </section>
        </div>    
    </>
  )
}

export default EditProfile;