import React from 'react';
import Employee_Navbar from '../../components/employeeAccount/Employee_Navbar';
import ChatBoxReply from '../../components/employeeAccount/ChatBoxReply';

function ReplyEnqiry() {
  return (
    <>
        <Employee_Navbar/>
        <section style={{marginTop:'5.5rem'}}>
            <ChatBoxReply/>
        </section>
    </>
  )
}

export default ReplyEnqiry;