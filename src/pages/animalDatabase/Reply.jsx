import React, {useState} from 'react';
import AnimalDash_Navbar from '../../components/animalDashboard/AnimalDash_Navbar';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Reply() {
    const [inputData, setInputData] = useState( { responseMessage:'' } )
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    const replyHandler = (e)=>{
        e.preventDefault();
        toast.success("toast working fine");
    }

  return (
    <>
        <AnimalDash_Navbar/>
        <section style={{marginTop:'6rem'}}>
        <div className="container mt-4 ">
            <div className="row justify-content-center">
                <div className=" col-md-6">
                    <h3 className="fw-bold">Reply Message </h3>
                    <div className="mt-3">
                        <form action="" method="" onSubmit={replyHandler}>
                            <div className="mt-4">
                                <textarea name="responseMessage" cols="10" rows="3" className="w-100 p-2 inputField" onChange={getInputdata} placeholder="Reply the reported issue here..."></textarea>
                            </div>
                            <button className="btn btn-primary py-2 px-5 mt-3">send response </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/animal/dashboard'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p>
    </>
  )
}

export default Reply