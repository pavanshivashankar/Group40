import React from 'react';
import Visitor_Navbar from '../../components/visitor/Visitor_Navbar';
import { useParams } from 'react-router-dom';
import ChatBox from '../../components/visitor/ChatBox';


function Enquiry() {
    const {id} = useParams();
  return (
    <>
        <Visitor_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
            {/* <h4 className='text-muted text-center'>How can we help you? Please let us know in chatbox</h4> */}
            <ChatBox/>
        </section>
    </>
  )
}

export default Enquiry