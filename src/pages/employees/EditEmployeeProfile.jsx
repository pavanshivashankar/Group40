import React, {useState} from 'react';
import Employee_Navbar from '../../components/employeeAccount/Employee_Navbar';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditEmployeeProfile() {
    const {id} = useParams();

    const [inputData, setInputData] = useState( { employeeUsername:'', employeeName:'', employeeEmail:'',employeeProfile:'', employeePassword:'', confirmPassword:''} )
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    const updateHandler = (e)=>{
        e.preventDefault();
        toast.success("toast working fine")
    }

  return (
    <>
        <Employee_Navbar/>
        <section style={{marginTop:'5rem'}}>
        <div className="container mt-4 ">
                <div className="row justify-content-center p-2">
                    <div className=" col-md-6 p-3">
                        <h3 className="fw-bold text-muted">Update your profile {id} </h3>
                        <div className="shadow p-3">
                            <div className="mt-3">
                                <form action="" method="" onSubmit={updateHandler}>
                                    <div className="d-flex" style={{gap: "12px"}}>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeUsername" className='text-muted '>Username</label>
                                            <input type="text" name="employeeUsername" id='employeeUsername'  className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter Username' />
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeName" className='text-muted '>Name</label>
                                            <input type="text" name="employeeName" id='employeeName'  className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter Name'  />
                                        </div>
                                    </div>
                                    <div className="d-flex" style={{gap: "12px"}}>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeEmail" className='text-muted '>Email</label>
                                            <input type="email" name="employeeEmail" id='employeeEmail' className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter Email'/>
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeeProfile" className='text-muted '>update profile</label>
                                            <input type="file" name="employeeProfile" id='employeeProfile' className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Choose profile Image' />
                                        </div>
                                    </div>   
                                    <div className="d-flex" style={{gap: "12px"}}>
                                        <div className="mb-3 w-50">
                                            <label htmlFor="employeePassword" className='text-muted '>password</label>
                                            <input type="password" name="employeePassword" id='employeePassword'  className="w-100 p-2 inputField" onChange={getInputdata} placeholder='Enter password'  />
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
        </section>

        <p className='inline mx-2 text-blue-600 text-left'>
              <Link to={'/employee/profile'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p>
    </>
  )
}

export default EditEmployeeProfile;