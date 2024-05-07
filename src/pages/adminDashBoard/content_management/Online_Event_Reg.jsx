import React from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import { useNavigate, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Online_Event_Reg() {
    const deleteRegistrationHandler = (id)=>{
        console.log("delete", id);
    }

    const events = [
      {
        "_id": 1,
        "name": "John",
        "userName": "shutterbug123",
        "email": "shutterbug123@example.com",
        "role": "Participant",
        "event": "Nature Photography Masterclass",
        "eventStatus": "confirmed",
        "payment": {
          "amount": 75,
          "status": "Paid",
          "paymentID": "ABC123XYZ",
          "QRCode": "https://example.com/qrcode/ABC123XYZ",
          "Date": "01/05/2024"
        }
      },
      {
        "_id": 2,
        "name": "Mark",
        "userName": "musicfan456",
        "email": "musicfan456@example.com",
        "role": "Attendee",
        "event": "Summer Music Festival",
        "eventStatus": "confirmed",
        "payment": {
          "amount": 50,
          "status": "Paid",
          "paymentID": "DEF456LMN",
          "QRCode": "https://example.com/qrcode/DEF456LMN",
          "Date": "02/05/2024"
        }
      },
      {
        "_id": 3,
        "name": "Scott",
        "userName": "knowledge-seeker",
        "email": "knowledge-seeker@example.com",
        "role": "Participant",
        "event": "Tech Innovation Summit",
        "eventStatus": "confirmed",
        "payment": {
          "amount": 0,
          "status": "Free",
          "paymentID": null,
          "QRCode": null,
          "Date": "04/05/2024"
        }
      },
      {
        "_id": 4,
        "name": "Blake",
        "userName": "artlover789",
        "email": "artlover789@example.com",
        "role": "Exhibitor",
        "event": "Wildlife Photoshoot",
        "eventStatus": "cancelled",
        "payment": {
          "amount": 100,
          "status": "Pending",
          "paymentID": null,
          "QRCode": null,
          "Date": "03/05/2024"
        }
      }
    ];


  return (
    <>
        <div className="">
            <Admin_Dash_Nav />
        </div>
        <div className="Sep_Margin">
          <section className='mt-lg-0 mt-5'>
            <div className="mt-lg-0 mt-4 p-3">
                <h1 className=' mt-2 text-center text-muted'>Registered Events</h1>
                <p className='text-center'> Here are the list of all registered visitors who have registered themselves for any event.</p>
                <div style={{ overflowX: 'auto' }}>

                <Table bordered hover >
                    <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Event</th>
                        <th>Payment Amount</th>
                        <th>Payment Status</th>
                        <th>Payment ID</th>
                        <th>QR Code</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {events.map((event ) => (
                        <tr key={event._id}>
                            <td>{event._id}.</td>
                            <td>{event.name}.</td>
                            <td>{event.userName}</td>
                            <td>{event.email}</td>
                            <td>{event.role}</td>
                            <td>{event.event}</td>
                            <td>{event.payment.amount}</td>
                            <td>{event.payment.status}</td>
                            <td>{event.payment.paymentID}</td>
                            <td>{event.payment.QRCode}</td>
                            <td>{event.payment.Date}</td>
                            <td className='d-flex justify-content-between align-items-center'>

                                <div className="d-flex justify-align-content-center ">
                                    {/* <Link to= {`/admin/eventRegistrations/${event._id}`} className='editBtn px-3 mx-3 text-decoration-none' >Cancel</Link> */}
                                    
                                    <button className="deleteBtn px-3" onClick={()=>{
                                        deleteRegistrationHandler(event._id)
                                        }}>Delete
                                    </button>
                                    
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default Online_Event_Reg;