import React, { useEffect, useState } from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';


function AllAnimals() {


  const [data, setData] = useState([])

  const navigate = useNavigate();
  const editAnimalHandler = (id)=>{
    console.log("Edited", id)
    navigate(`/admin/editAnimal/${id}`)

  }

    const deleteAnimalHandler = async (id) => {
      try {
        const response = await fetch(`http://localhost:4000/animal/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
    
        if (response.ok) {
          setData(prevData => prevData.filter(animal => animal._id !== id));
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error(error)
      }
    };
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4000/animal/", {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const reData = await response.json();
            setData(reData)
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
        <div className="">
            <Admin_Dash_Nav />
        </div>
        <div className="Sep_Margin">
          <section className='mt-lg-0 mt-5'>
            <div className="mt-lg-0 mt-4 p-3">
                <h1 className=' mt-2 text-center text-muted'>All ZOO animal details</h1>
                <p className='text-center'> Here are the list of all animals present in the zoo with their details.</p>
                <div style={{ overflowX: 'auto' }}>

                <Table bordered hover >
            <thead>
            <tr>
            <th>S.No</th>
              <th>Name</th>
              <th>Species</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Habitat</th>
              {/* <th>Diet</th> */}
              {/* <th>Medical Status</th> */}
              <th>Zookeeper</th>
              <th>CareTaker</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>status</th>
            </tr>
            </thead>
            <tbody>

            {data.map((animal, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{animal.name}</td>
                  <td>{animal.speciesName}</td>
                  <td>{animal.age}</td>
                  <td>{animal.gender}</td>
                  <td>{animal.habitatName}</td>
                  {/* <td>{animal.diet}</td> */}
                  {/* <td>{animal.medicalRecords}</td> */}
                  <td>{animal.zookeeper}</td>
                  <td>{animal.caretaker}</td>
                  <td><button className="editBtn px-3" onClick={()=>{
                    editAnimalHandler(animal._id)
                  }} >Edit</button></td>
                  <td><button className="deleteBtn px-3" onClick={()=>{
                    deleteAnimalHandler(animal._id)
                  }} >Delete</button></td>
                  <td>{animal.note}</td>
                </tr>
              ))}

            </tbody>
            </Table>
                </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default AllAnimals