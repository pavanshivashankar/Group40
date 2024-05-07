import React, {useState} from 'react';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import enquiryImg from '../../../public/enquiry.png';


function Feedback() {
    const [inputData, setInputData] = useState( {} )
    const navigate = useNavigate()
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

 
    const updateHandler = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:4000/feedback/", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
          });
    
          const data = await response.json();
    
    
          if (response.ok) {
            toast.success(data.message);
            navigate("/visitor");
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred. Please try again.");
        }
      };

  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
        <div className="container mt-4 ">
            <div className="row justify-content-center p-2">
                <div className=" col-md-6 shadow mt-5">
                    <h3 className="fw-bold my-4">Give feedback!!</h3>
                    <div className="mt-3">
                        <form action="" method="" onSubmit={updateHandler}>
                            <div className="d-flex mb-4" style={{gap: "12px"}}>
                                <div className="w-50">
                                    <select name="rating" onChange={getInputdata} className="w-100 p-2 inputField">
                                        <option> --Select Rating-- </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4">
                                <textarea name="comment" cols="10" rows="3" className="w-100 p-2 inputField" onChange={getInputdata} placeholder="write your comment"></textarea>
                            </div>
                            <div className="mt-4">
                                <textarea name="suggestion" cols="10" rows="3" className="w-100 p-2 inputField" onChange={getInputdata} placeholder="write your suggestion"></textarea>
                            </div>
                            <button className="btn btn-primary py-2 px-5 my-3">submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/visitor'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p>

    </>
  )
}

export default Feedback