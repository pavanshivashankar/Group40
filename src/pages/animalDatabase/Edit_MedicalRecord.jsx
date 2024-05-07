import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AnimalDash_Navbar from "../../components/animalDashboard/AnimalDash_Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit_MedicalRecord() {
  const [inputData, setInputData] = useState({
    description: "",
    medications: [],
    diagnosis: "",
  });

  const id = useParams().id;
  const navigate = useNavigate();


  const updateMedicalRecordsHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/medicalRecords/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        navigate(`/animal/MedicalRecord`);
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

        console.log("helljhbv")
        const response = await fetch(`http://localhost:4000/medicalRecords/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setInputData(resData);
          console.log(data);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <AnimalDash_Navbar />
      <section style={{ marginTop: "6rem" }}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h3 className="fw-bold">Add MedicalRecord</h3>
              <div className="mt-3">
                <form onSubmit={updateMedicalRecordsHandler}>
                  <input
                    type="text"
                    name="medications"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setInputData((prevValues) => ({
                      ...prevValues,
                      medications: e.target.value.split(',').map(item => item.trim())
                    }))}
                    value={inputData.medications.join(', ')}
                    placeholder="Enter medications (comma separated)"
                  />
                  <input
                    type="text"
                    name="diagnosis"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setInputData({...inputData, diagnosis: e.target.value})}
                    value={inputData.diagnosis}
                    placeholder="Enter diagnosis"
                  />
                  <input
                    type="text"
                    name="status"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setInputData({...inputData, status: e.target.value})}
                    value={inputData.status}
                    placeholder="Enter current status"
                  />
                  <input
                    type="text"
                    name="description"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setInputData({...inputData, description: e.target.value})}
                    value={inputData.description}
                    placeholder="Enter medical record description"
                  />

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
      </section>
      <p className="inline mx-2 mt-5 text-blue-600 text-left">
        <Link to={`/animal/MedicalRecord`} className="text-decoration-none fs-6">
          ⬅️ Go Back
        </Link>
      </p>
    </>
  );
}

export default Edit_MedicalRecord;
