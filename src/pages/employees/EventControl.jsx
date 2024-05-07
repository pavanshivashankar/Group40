import React, { useState } from 'react';
import Employee_Navbar from '../../components/employeeAccount/Employee_Navbar';
import { MdOutlineSearch } from "react-icons/md";
import Table from 'react-bootstrap/Table';


    const eventsRegisteredVisitors = [
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



function EventControl() {
    const [visitors, setVisitors] = useState(eventsRegisteredVisitors.map(visitor => ({
        ...visitor,
        checkedIn: false,
        checkedOut: false,
        checkInDate: null,
        checkOutDate: null
    })));

    const handleCheckInChange = (id) => {
        setVisitors(visitors.map(visitor =>
            visitor._id === id ? {
                ...visitor,
                checkedIn: !visitor.checkedIn,
                checkInDate: visitor.checkedIn ? null : new Date()
            } : visitor
        ));
    };

    const handleCheckOutChange = (id) => {
        setVisitors(visitors.map(visitor =>
            visitor._id === id ? {
                ...visitor,
                checkedOut: !visitor.checkedOut,
                checkOutDate: visitor.checkedOut ? null : new Date()
            } : visitor
        ));
    };

    return (
        <>
            <Employee_Navbar/>
            <section style={{marginTop:'5rem'}}>
                <div className="container mt-4 ">
                    <div className="row justify-content-center p-2">
                        <div className=" col-md-6">
                            <h2 className='text-center text-muted'>Event control</h2>
                            <p className='text-center'>Here are the list of all the visitors registered for the events. Check their <span className='text-muted fw-bold'>Check-In / Check-Out</span> status </p>
                            <div className="text-center">
                                {/* <form action="" >
                                    <div className='searchDivEmp'>
                                        <input type="search" name="searchInput" className='navLink w-100 px-2 searchBar py-1' placeholder='Search by username' />
                                        <button className='searchBtn' > <MdOutlineSearch className='searchIcon'/> </button>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-4'>
                <h4 className='text-center mt-4 mb-3'>Registered Visitors for Event</h4>
                <div style={{ overflowX: 'auto' }}>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Event</th>
                                <th>Payment Amount</th>
                                <th>Payment Status</th>
                                <th>Payment ID</th>
                                <th>QR Code</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitors.map(visitor => (
                                <tr key={visitor._id}>
                                    <td>{visitor._id}.</td>
                                    <td>{visitor.name}.</td>
                                    <td>{visitor.email}</td>
                                    <td>{visitor.event}</td>
                                    <td>{visitor.payment.amount}</td>
                                    <td>{visitor.payment.status}</td>
                                    <td>{visitor.payment.paymentID}</td>
                                    <td>{visitor.payment.QRCode}</td>
                                    <td>{visitor.payment.Date}</td>
                                    <td className='d-flex justify-content-between align-items-center'>

                                    {
                                        visitor.checkedIn ==false && visitor.checkedOut == false ? (
                                            <div className="d-flex justify-content-between gap-4">
                                            <label className='btnCss px-1 py-1 d-flex justify-content-between align-items-center gap-3'>
                                                    checkIn
                                                    <input type="checkbox" checked={visitor.checkedIn} onChange={() => handleCheckInChange(visitor._id)} />
                                                </label>
                                            </div>
                                        ) : visitor.checkedIn == true && visitor.checkedOut == false ? (
                                            <div className="d-flex justify-content-between gap-4">
                                                <label className='deleteBtn px-1 py-1 d-flex justify-content-between align-items-center gap-3'>
                                                    checkOut
                                                    <input type="checkbox" checked={visitor.checkedOut} onChange={() => handleCheckOutChange(visitor._id)} />
                                                </label>
                                            </div>
                                        ) : <h5 className='text-danger fw-bold'>checked out</h5>
                                    }

                                        {/* <div className="d-flex justify-content-between gap-4">
                                            <label className='btnCss px-1 py-1 d-flex justify-content-between align-items-center gap-3'>
                                                checkIn
                                                <input type="checkbox" checked={visitor.checkedIn} onChange={() => handleCheckInChange(visitor._id)} />
                                            </label>
                                            <label className='deleteBtn px-1 py-1 d-flex justify-content-between align-items-center gap-3'>
                                                checkOut
                                                <input type="checkbox" checked={visitor.checkedOut} onChange={() => handleCheckOutChange(visitor._id)} />
                                            </label>
                                        </div> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    );
}

export default EventControl;




















// import React ,{useState} from 'react';
// import Employee_Navbar from '../../components/employeeAccount/Employee_Navbar';
// import { Link } from 'react-router-dom';
// import { MdOutlineSearch } from "react-icons/md";
// import Table from 'react-bootstrap/Table';



// function EventControl() {
//     const [checkedState, setCheckedState] = useState({
//         checkIn: false,
//         checkOut: false,
//         checkInDate: null,
//         checkOutDate: null
//     });

//     const handleCheckInChange = (id) => {
//         const currentDate = new Date();
//         setCheckedState({
//             ...checkedState,
//             checkIn: !checkedState.checkIn,
//             checkInDate: checkedState.checkIn ? null : currentDate
//         });
//     };

//     const handleCheckOutChange = () => {
//         const currentDate = new Date();
//         setCheckedState({
//             ...checkedState,
//             checkOut: !checkedState.checkOut,
//             checkOutDate: checkedState.checkOut ? null : currentDate
//         });
//     };


//     const eventsRegisteredVisitors = [
//         {
//           "_id": 1,
//           "name": "John",
//           "userName": "shutterbug123",
//           "email": "shutterbug123@example.com",
//           "role": "Participant",
//           "event": "Nature Photography Masterclass",
//           "eventStatus": "confirmed",
//           "payment": {
//             "amount": 75,
//             "status": "Paid",
//             "paymentID": "ABC123XYZ",
//             "QRCode": "https://example.com/qrcode/ABC123XYZ",
//             "Date": "01/05/2024",
//             "checkIn" : null,
//             "checkIn_Date" : null,
//             "checkOut" : null,
//             "checkOut_Date" : null
//           }
//         },
//         {
//           "_id": 2,
//           "name": "Mark",
//           "userName": "musicfan456",
//           "email": "musicfan456@example.com",
//           "role": "Attendee",
//           "event": "Summer Music Festival",
//           "eventStatus": "confirmed",
//           "payment": {
//             "amount": 50,
//             "status": "Paid",
//             "paymentID": "DEF456LMN",
//             "QRCode": "https://example.com/qrcode/DEF456LMN",
//             "Date": "02/05/2024",
//             "checkIn" : null,
//             "checkIn_Date" : null,
//             "checkOut" : null,
//             "checkOut_Date" : null
//           }
//         },
//         {
//           "_id": 3,
//           "name": "Scott",
//           "userName": "knowledge-seeker",
//           "email": "knowledge-seeker@example.com",
//           "role": "Participant",
//           "event": "Tech Innovation Summit",
//           "eventStatus": "confirmed",
//           "payment": {
//             "amount": 0,
//             "status": "Free",
//             "paymentID": null,
//             "QRCode": null,
//             "Date": "04/05/2024",
//             "checkIn" : null,
//             "checkIn_Date" : null,
//             "checkOut" : null,
//             "checkOut_Date" : null
//           }
//         },
//         {
//           "_id": 4,
//           "name": "Blake",
//           "userName": "artlover789",
//           "email": "artlover789@example.com",
//           "role": "Exhibitor",
//           "event": "Wildlife Photoshoot",
//           "eventStatus": "cancelled",
//           "payment": {
//             "amount": 100,
//             "status": "Pending",
//             "paymentID": null,
//             "QRCode": null,
//             "Date": "03/05/2024",
//             "checkIn" : null,
//             "checkIn_Date" : null,
//             "checkOut" : null,
//             "checkOut_Date" : null
//           }
//         }
//       ];

//   return (
//     <>
//         <Employee_Navbar/>
        // <section style={{marginTop:'5rem'}}>
        //     <div className="container mt-4 ">
        //         <div className="row justify-content-center p-2">
        //             <div className=" col-md-6">
        //                 <h2 className='text-center text-muted'>Event control</h2>
        //                 <p className='text-center'>Here are the list of all the visitors registered for the events. Check their <span className='text-muted fw-bold'>Check-In / Check-Out</span> status </p>
        //                 <div className="text-center">
        //                     <form action="" >
        //                         <div className='searchDivEmp'>
        //                             <input type="search" name="searchInput" className='navLink w-100 px-2 searchBar py-1' placeholder='Search by username' />
        //                             <button className='searchBtn' > <MdOutlineSearch className='searchIcon'/> </button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

//         <section className='p-4'>
//             <h4 className='text-center mt-4 mb-3'>Registered Visitors for Event</h4>
//             <div style={{ overflowX: 'auto' }}>

//                 <Table bordered hover >
//                     <thead>
                    // <tr>
                    //     <th>S.No</th>
                    //     <th>Name</th>
                    //     <th>Email</th>
                    //     <th>Event</th>
                    //     <th>Payment Amount</th>
                    //     <th>Payment Status</th>
                    //     <th>Payment ID</th>
                    //     <th>QR Code</th>
                    //     <th>Date</th>
                    // </tr>
//                     </thead>
//                     <tbody>
                    
//                     {eventsRegisteredVisitors.map((event ) => (
//                         <tr key={event._id}>
                            // <td>{event._id}.</td>
                            // <td>{event.name}.</td>
                            // <td>{event.email}</td>
                            // <td>{event.event}</td>
                            // <td>{event.payment.amount}</td>
                            // <td>{event.payment.status}</td>
                            // <td>{event.payment.paymentID}</td>
                            // <td>{event.payment.QRCode}</td>
                            // <td>{event.payment.Date}</td>
//                             <td className='d-flex justify-content-between align-items-center'>
//                                 <div className="d-flex justify-content-between gap-4">
//                                     <label className='btnCss px-1 py-1 d-flex justify-content-between align-items-center gap-3'>
//                                         checkIn
//                                         <input type="checkbox" checked={checkedState.checkIn} onChange={ ()=>{
//                                             handleCheckInChange(event._id)
//                                         } } />
//                                     </label>

//                                     <label className='deleteBtn px-1 py-1 d-flex justify-content-between align-items-center gap-3'>
//                                         checkOut
//                                         <input type="checkbox" checked={checkedState.checkOut} onChange={handleCheckOutChange} />
//                                     </label>
//                                 </div>
//                             </td>
//                         </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//                 </div>
//         </section>



//     </>
//   )
// }

// export default EventControl;