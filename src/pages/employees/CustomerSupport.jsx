import React from 'react';
import ChatBoxReply from '../../components/employeeAccount/ChatBoxReply';
import Employee_Navbar from '../../components/employeeAccount/Employee_Navbar';
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function CustomerSupport() {
  return (
    <>
        <Employee_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
            <h4 className='d-sm-block d-none text-muted text-center'>Hi!! you have 5 enqeries. Please response as soon as possible. <br />The visitor are waiting for your response.</h4>
            <h5 className=' d-md-none text-muted text-center mx-4'>Hi!! you have 5 enqeries. Please response as soon as possible.</h5>
            {/* <ChatBoxReply/> */}
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-4">
                            <div className="card-body shadow">
                                <div className="d-flex justify-content-around align-items-center">
                                <div className="">
                                    <h4 className='text-decoration-underline'>Username</h4>
                                    <p> <Link to={'/employee/replyChat/1'}  className='chatReq px-3' >john123 (2)</Link> </p>
                                    <p> <Link to={'/employee/replyChat/2'}  className='chatReq px-3' >john123 (2)</Link> </p>
                                    <p> <Link to={'/employee/replyChat/3'} className='chatReq px-3' >john123 (2)</Link> </p>
                                </div>
                                <div className="">
                                    <h4 className='text-decoration-underline'>Reply</h4>
                                    <p> <Link to={'/employee/replyChat/1'} className='chatReq px-3' title='Reply' > <BsChatDotsFill className='fs-4  '/> </Link> <br /> </p>
                                    <p> <Link to={'/employee/replyChat/2'} className='chatReq px-3' title='Reply' > <BsChatDotsFill className='fs-4  '/> </Link> <br /> </p>
                                    <p> <Link to={'/employee/replyChat/3'} className='chatReq px-3' title='Reply' > <BsChatDotsFill className='fs-4  '/> </Link> <br /> </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CustomerSupport;