import React from 'react';


function Announcement(props) {
  return (
    <>
        <div className="flex">
            <div className="Notes m-4">
                <div className="">
                    <div className="card">
                        <div className="card-body">
                            <h4>{props.topic}</h4>
                            <p><span className='text-muted fw-bold'>Dept: </span> {props.dept}</p>
                            <p><span className='text-muted fw-bold'>Date: </span> {new Date(
                          props.date
                        ).toLocaleDateString()}
                        {" "}
                        {new Date(
                          props.date
                        ).toLocaleTimeString()}</p>
                            <p><span className='text-muted fw-bold'>Desription: </span> {props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Announcement