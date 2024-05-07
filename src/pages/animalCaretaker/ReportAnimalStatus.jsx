import React, {useEffect, useState} from 'react';
import CaretakerDash_Navbar from '../../components/caretakerDashboard/CareTakerDash_Navbar'
import { toast } from 'react-toastify';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ReportAnimalStatus() {
    const {id} = useParams();
    const [inputData, setInputData] = useState( { message:'', animal: ""} )
    const [data, setData] = useState([])
    const navigate = useNavigate();
    
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    console.log(inputData)

    const reportHandler = async (e) => {
        e.preventDefault();
        const {message} = inputData
        const animal = data._id
        try {
          const response = await fetch("http://localhost:4000/animalMessage/", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({message, animal}),
          });
    
          const data = await response.json();
    
    
          if (response.ok) {
            toast.success(data.message);
            navigate("/caretaker/animal");
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred. Please try again.");
        }
      };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:4000/animal/${id}`, {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              const resData = await response.json();
              setData(resData)
              console.log(data);
            } else {
              console.error("Failed to fetch events:", response.status);
            }
          } catch (error) {
            console.error("Error fetching events:", error);
          }
        };
    
        fetchData()
        
      }, []);

  return (
    <>
        <CaretakerDash_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
            <div className="container mt-4 ">
                <div className="row justify-content-center p-2">
                    <div className=" col-md-6 p-3 shadow mt-4">
                        <h3 className="fw-bold">Report Animal Status {id} </h3>
                        <div className="mt-3">
                            <form action="" method="" onSubmit={reportHandler}>
                                
                                <div className="d-flex mb-4" style={{gap: "12px"}}>
                                    <div className="w-50">
                                        <input type="text" name="animalName" value={data.name} className="w-100 p-2 inputField" onChange={getInputdata} placeholder=" Animal Name"/>
                                    </div>
                                    <div className="w-50">
                                        <input type="text" name="speciesName" className="w-100 p-2 inputField" onChange={getInputdata} value={data.speciesName} placeholder="Species Name"/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <textarea name="message" cols="10" rows="3" className="w-100 p-2 inputField" onChange={getInputdata} placeholder="write message to be reported..."></textarea>
                                </div>
                                <button className="btn btn-primary py-2 px-5 mt-3">report </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/caretaker/animal'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p>
    </>
  )
}

export default ReportAnimalStatus