import React, {useEffect, useState} from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import {useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditAnnouncement() {
    const {id} = useParams();
    const navigate = useNavigate()

    const [inputData, setInputData] = useState( { dept:'',topic:'',description:'' } )
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    const editAnnouncementHandler = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`http://localhost:4000/announcement/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
          });
    
          if (response.ok) {
            const resMessage = await response.json();
            toast.success(resMessage.message);
            navigate("/admin/announcement");
          } else {
            const errorMessage = await response.json();
            toast.error(errorMessage.message);
          }
        } catch (error) {
          console.error("Error updating event:", error);
          toast.error("An unexpected error occurred");
        }
      };
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/announcement/${id}`, {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              const resData = await response.json();
              setInputData(resData);
              console.log(inputData);
            } else {
              console.error(response.status);
            }
          } catch (error) {
            console.error( error);
          }
        };
    
        fetchData();
      }, []);


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
            <div className=" col-md-6 shadow p-3">
                  <h3 className="fw-bold">Update Announcement Details: {id} </h3>
                  <div className="mt-3">
                    <form onSubmit={editAnnouncementHandler}>
                      <input
                        type="text"
                        name="dept"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        value={inputData.dept}
                        placeholder="Enter dept name "
                      />
                      <input
                        type="text"
                        name="topic"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        value={inputData.topic}
                        placeholder="Enter annoucement topic"
                      />
                      {/* <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Event Time:</label>
                        <input
                          type="date"
                          name="date"
                          // className="w-100 p-2 mb-3 inputField"
                          onChange={getInputdata}
                          placeholder="Enter annoucement date"
                        />
                      </div> */}
                      <textarea
                        name="description"
                        cols="10"
                        rows="3"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        value={inputData.description}
                        placeholder="Write description about annoucement"
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-primary py-2 px-5 mt-3"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
            </div>
            </div>
            <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/admin/announcement'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
            </p>

            </div>
            </section>
        </div>    
    </>
  )
}

export default EditAnnouncement;