import React from 'react';
import paymentImg from '../../../public/paypal.png';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import { Link } from 'react-router-dom';

function PaymentCard() {
  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'}}></section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <div className="card-body shadow">
                                <form action="">
                                    <div className="">
                                        <div className="text-center">
                                            <img src={paymentImg} alt="" width="60px" />  
                                        </div>
                                        <h4 className='text-center text-muted'>Make Payment</h4>
                                        <div className="">
                                            <label htmlFor="price">Ticket Price</label> <br />
                                            <input type="text" id='price' className='w-100 inputField py-1 fw-bold px-2' value="$5" readOnly />
                                        </div>

                                        <div className="my-4">
                                            <Link to={'/visitor/payment/success'} className='btnCss px-2 py-1 text-decoration-none'>Conform Ticket</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className='inline mx-2 mt-5 text-blue-600 text-left'>
                        <Link to={'/visitor'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
                    </p>
                </div>
            </div>
        <section/>
    </>
  )
}

export default PaymentCard