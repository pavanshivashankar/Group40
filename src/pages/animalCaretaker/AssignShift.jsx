import React, {useState} from 'react';
import CaretakerDash_Navbar from '../../components/caretakerDashboard/CareTakerDash_Navbar'
import { toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';


function AssignShift() {
    const {id} = useParams();

    const [inputData, setInputData] = useState( { employeeId:'', employeeName:'', employeeShift:''} )
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    const assignHandler = (e)=>{
        console.log("Shift is assigned successfully")
        e.preventDefault();
        toast.success("toast working fine");
    }


  return (
    <>
        <CaretakerDash_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
            <div className="container mt-4 ">
                <div className="row justify-content-center">
                    <div className=" col-md-6 p-3 shadow mt-4">
                        <h3 className="fw-bold">Assign Shift to employee {id} </h3>
                        <div className="mt-3">
                            <form action="" method="" onSubmit={assignHandler}>
                                
                                <div className="d-flex mb-4" style={{gap: "12px"}}>
                                    <div className="w-50">
                                        <input type="text" name="employeeId" className="w-100 p-2 inputField" onChange={getInputdata} placeholder="Employee ID"/>
                                    </div>
                                    <div className="w-50">
                                        <input type="text" name="employeeName" className="w-100 p-2 inputField" onChange={getInputdata} placeholder=" Employee Name"/>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <select name="employeeShift" onChange={getInputdata} className="w-100 p-2 inputField">
                                        <option> --Select Shift-- </option>
                                        <option value="morning (6:00 - 12:00)">morning (6:00 - 12:00)</option>
                                        <option value="afternoon (12:00 - 18:00)">afternoon (12:00 - 18:00)</option>
                                        <option value="evening (6:00 - 12:00)">evening (18:00 - 24:00)</option>
                                        <option value="night (6:00 - 12:00)">night (1:00 - 6:00)</option>
                                    </select>
                                </div>

                                <button className="btn btn-primary py-2 px-5 mt-3">report </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/caretaker/employee'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p>
    </>
  )
}

export default AssignShift