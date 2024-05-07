import React from 'react'

function AnimalCard(props) {

    // paypal payment
    const handlePayment = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:4000/payment", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          const redirectToPayment = resData.links[1].href
          window.location.href=redirectToPayment
          
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };



  return (
    <>
        <div className="flex">
        <div className="Notes" style={{boxSizing:'border-box'}}>
            <figure>
                <img className='w-100' src={`https://source.unsplash.com/1600x800/?${props.speciesName}`} title='tiger' alt="" />
                <figcaption className='fs-4 fw-bold'>{props.name}</figcaption>
            </figure>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Species: </span> {props.speciesName} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Habitat: </span> {props.habitatName} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Gender:</span> {props.gender} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Age:</span> {props.age} </p>
            <button onClick={handlePayment} className="btnCss px-3 my-2 py-1">Book Ticket</button>
        </div>

      </div>
    </>
  )
}

export default AnimalCard