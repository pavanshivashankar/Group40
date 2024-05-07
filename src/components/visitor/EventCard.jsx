import React from 'react'

function EventCard(props) {
  return (
    <>
      <div className="flex">
        <div className="Notes" style={{boxSizing:'border-box'}}>
            <h5 className=''>{props.name}</h5>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Date:</span> {new Date(props.date).toLocaleDateString()} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Time:</span> {new Date(props.date).toLocaleTimeString()} </p>
            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Location:</span> {props.location} </p>
            <p className='m-0 p-0' style={{boxSizing:'border-box',overflowY:'scroll'}}> <span className='fw-bold text-muted '>Description:</span> {props.description} </p>
            <button className="btnCss px-3 my-2">Register</button>
        </div>
      </div>






    {/* <div className="container ">
        <div className="row justify-content-center">
            <div className="col-sm-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="">
                            <h5 className=''>Wildlife Rehabilitation Workshop</h5>
                            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Date:</span>  September 20, 2024</p>
                            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Time:</span> 1:00 PM - 3:00 PM</p>
                            <p className='m-0 p-0'> <span className='fw-bold text-muted '>Location:</span> Turtle Back Zoo Clinic</p>
                            <p className='m-0 p-0' style={{boxSizing:'border-box',overflowY:'scroll'}}> <span className='fw-bold text-muted '>Description:</span> Learn wildlife care and rehabilitation from experts. Hands-on experience included.</p>
                            <button className="btnCss px-2 my-2 ">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className="my-4 text-center m-0">
        <div className="Notes px-3">
          <h5 className=''>Wildlife Rehabilitation Workshop</h5>
          <p className='m-0 p-0'> <span className='fw-bold text-muted '>Date:</span>  September 20, 2024</p>
          <p className='m-0 p-0'> <span className='fw-bold text-muted '>Time:</span> 1:00 PM - 3:00 PM</p>
          <p className='m-0 p-0'> <span className='fw-bold text-muted '>Location:</span> Turtle Back Zoo Clinic</p>
          <p className='m-0 p-0' style={{boxSizing:'border-box',overflowY:'scroll'}}> <span className='fw-bold text-muted '>Description:</span> Learn wildlife care and rehabilitation from experts. Hands-on experience included.</p>
          <button className="btnCss px-2 my-3 ">
            Register 
          </button>
        </div>
      </div> */}

      </>
  )
}

export default EventCard;