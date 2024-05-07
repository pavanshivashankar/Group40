import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AnimalDash_Navbar from '../../components/animalDashboard/AnimalDash_Navbar';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';

function MedicalRecords() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const animalId = useParams().id;

  const editRecordHandler = (id) => {
    console.log("Edited", id);
    navigate(`/animal/editMedicalRecord/${id}`);
  };

  const deleteRecordHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/medicalRecords/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setData(prevData => prevData.filter(record => record._id !== id));
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/medicalRecords/all/${animalId}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const reData = await response.json();
          setData(reData);
          console.log(data);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [animalId]);

  return (
    <>
      <AnimalDash_Navbar />
      <section style={{marginTop:'5.8rem'}}>
        <h2 className=' text-center mt-5 mb-3'>AnimalDashboard</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {data.map((record, index) => (
            <div key={index} className="col">
              <Card>
                <Card.Body>
                  <Card.Title>Medical Record #{index + 1}</Card.Title>
                  <Card.Text>
                    <strong>Medications:</strong> {record.medications.join(', ')}<br />
                    <strong>Diagnosis:</strong> {record.diagnosis}<br />
                    <strong>Status:</strong> {record.status}<br />
                    <strong>Description:</strong> {record.description}<br />
                    <strong>Date:</strong> {new Date(record.date).toLocaleString()}<br />
                  </Card.Text>
                  <button className="editBtn px-3" onClick={() => editRecordHandler(record._id)}>Edit</button>
                  <button className="deleteBtn px-3" onClick={() => deleteRecordHandler(record._id)}>Delete</button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>
      <p className="inline mx-2 mt-5 text-blue-600 text-left">
        <Link to={"/animal/MedicalRecord"} className="text-decoration-none fs-6">
          ⬅️ Go Back
        </Link>
      </p>
    </>
  )
}

export default MedicalRecords;

