import React, {useState} from 'react';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import enquiryImg from '../../../public/enquiry.png';


function eventRegistrations() {
    const navigate = useNavigate();
    
    const [inputData, setInputData] = useState({
        name: "",
        date: "",
        location: "",
        registrationRequired: false,
        registrationOpen: false,
        capacity: "",
        registrationStartDate: "",
        registrationEndDate: "",
        description: "",
      });
    
      function getInputdata(e) {
        setInputData((preValues) => {
          return {
            ...preValues,
            [e.target.name]: e.target.value,
          };
        });
      }

const eventRegistrationHandler = ()=>{
    console.log('event registration');
}

  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
        <div className="container mt-4 ">
            <div className="row justify-content-center p-2">
                <div className=" col-md-6 shadow mt-5">
                    <h3 className="fw-bold my-4">Event Registration</h3>
                    <div className="mt-3">
                    <form onSubmit={eventRegistrationHandler} className='py-3'>
                      <input
                        type="text"
                        name="name"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter event name"
                      />
                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Event Time:</label>
                        <input
                          type="date"
                          name="date"
                          // className="w-100 p-2 mb-3 inputField"
                          onChange={getInputdata}
                          placeholder="Enter event date"
                        />
                      </div>
                      <input
                        type="text"
                        name="location"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter location"
                      />

                      <button
                        type="submit"
                        className="btn btn-primary py-2 px-5 mt-3"
                      >
                        Add
                      </button>
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

export default eventRegistrations;