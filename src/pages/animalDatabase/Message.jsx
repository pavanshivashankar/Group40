import React, { useEffect, useState } from "react";
import AnimalDash_Navbar from "../../components/animalDashboard/AnimalDash_Navbar";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Message() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [sender, setSender] = useState([]);
  const [animal, setAnimal] = useState([])



  const resolveAnimalHandler = async (id) => {
    console.log(id)
    try {
      const response = await fetch(`http://localhost:4000/animalMessage/${id}`, {
        method: 'DELETE',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const res = await response.json();
  
      if (response.ok) {
        setData(prevData => prevData.filter(message => message._id !== id));
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/animalMessage/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setData(resData);
          //   console.log(data);
        } else {
          console.error("Failed to fetch events:", response.status);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const senderData = async () => {
        try {
          const promises = data.map(async (user) => {
            const id = user.user;
            // console.log(id);
            const response = await fetch(`http://localhost:4000/user/${id}`, {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              return await response.json();
            } else {
              console.error(response.status);
              return null;
            }
          });
      
          const animalDataArray = await Promise.all(promises);
          setSender(animalDataArray);
        //   console.log("animal", sender[1]);
        } catch (error) {
          console.error(error);
        }
      };
  

    const animalData = async () => {
        try {
          const promises = data.map(async (user) => {
            const id = user.animal;
            // console.log(id);
            const response = await fetch(`http://localhost:4000/animal/${id}`, {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              return await response.json();
            } else {
              console.error(response.status);
              return null;
            }
          });
      
          const animalDataArray = await Promise.all(promises);
          setAnimal(animalDataArray);
        //   console.log("animal", animal[1]);
        } catch (error) {
          console.error(error);
        }
      };
    
    fetchData();
    senderData();
    animalData()
  }, [data]);

  return (
    <>
      <AnimalDash_Navbar />
      <section style={{ marginTop: "5.5rem" }}>
        <div style={{ overflowX: "auto" }}>
          <h2 className=" text-center mt-2 mb-4">Caretaker's Report Message({data.length})</h2>
          <Table bordered hover>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Time</th>
                <th>Name</th>
                <th>Degination</th>
                <th>Animal Name</th>
                <th>Species Name</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{new Date(item.date).toLocaleDateString()} {" "} {new Date(item.date).toLocaleTimeString()} </td>
                  <td>{sender.length > 1 && sender[index] && sender[index].name}</td>
                  <td>{sender.length > 1 && sender[index] && sender[index].role}</td>
                  <td>{animal.length > 1 && animal[index] && animal[index].name}</td>
                  <td>{animal.length > 1 && animal[index] && animal[index].speciesName}</td>
                  <td className="d-flex justify-content-between align align-items-center">
                    {item.message}
                    {/* <button className="editBtn px-3 " onClick={()=>{
                            editAnimalHandler(animal.EMP_ID)
                        }} >reply</button> */}
                  </td>
                  <td>
                    <button
                      className="deleteBtn px-3"
                      onClick={() => {
                        resolveAnimalHandler(item._id);
                      }}
                    >
                      resolved
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default Message;
