import React, { useEffect } from 'react';
import paymentFailed from '../../../public/paymentFailed.png';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import { Link } from 'react-router-dom';

function PaymentFailed() {

  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'}}></section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <div className="card-body shadow">
                                <div className="">
                                    <div className="text-center">
                                        <img src={paymentFailed} alt="" width="100px" />  
                                    </div>
                                    <h5 className='text-center text-muted'>Opps! payment failed. Try again</h5>
                                    {/* <div className="my-4">
                                        <Link className='btnCss px-2 py-1 text-decoration-none'>Confirm Ticket</Link>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                    </div>
                                    <p className='inline mx-2 mt-5 text-blue-600 text-left'>
                                        <Link to={'/visitor'} className='text-decoration-none fs-6' >⬅️ Go to Home</Link>
                                    </p>
                </div>
            </div>
        <section/>
    </>
  )
}

export default PaymentFailed;