import React, { useEffect, useState } from 'react';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import AnimalCard from '../../components/visitor/AnimalCard';
import enquiryImg from '../../../public/enquiry.png';
import { Link } from 'react-router-dom';

function ZooAnimal() {

  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    const animalData = async () => {
      try {
        const response = await fetch("http://localhost:4000/animal/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setAnimal(resData);
          console.log("data:",animal);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error( error);
      }
    };

    animalData()
  }, [])

  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
            <h1 className='text-center ' >ZOO Animals</h1>
            <h4 className='text-center mb-4 text-muted'>Book Zoo Ticket Now and watch these animals live.</h4>

            <div className="d-flex flex-wrap justify-content-evenly gap-5">
                {
                  animal.map((animal, i) => {
                    return (
                    <AnimalCard key={i} age={animal.age} caretaker={animal.caretaker} gender={animal.gender} habitatName={animal.habitatName} name={animal.name} note={animal.note}  speciesName={animal.speciesName} zookeeper={animal.zookeeper} />
                    )
                  })
                }
            </div>
        </section>

    </>
  )
}

export default ZooAnimal