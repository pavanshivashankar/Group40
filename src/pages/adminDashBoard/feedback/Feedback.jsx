import React, {useState, useEffect} from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);

    const getFeedbacks = async()=>{
        try {
            const response = await fetch("http://localhost:4000/feedback", {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              const reData = await response.json();
              setFeedbacks(reData);
            } else {
              console.error("Failed to fetch events:", response.status);
            }
          } catch (error) {
            console.error("Error fetching events:", error);
          }
    }

    useEffect( ()=>{
        getFeedbacks();
        
    }, [] )


  return (
    <>
        <div className="">
            <Admin_Dash_Nav />
        </div>
        <div className="Sep_Margin">
          <section className='mt-lg-0 mt-5'>
                <div className="mt-lg-0 mt-4 p-3">
                    <h3 className=' mt-2 text-center text-muted'>All Feedbacks</h3>
                    <p className='text-center text-muted'>Here are all the feedbacks. Rate the services based on the visitor's feedback.</p>
                <div className="">

                    <Table hover size="sm">
                        <thead>
                            <tr>
                                <th>Ratting</th>
                                <th>Comment</th>
                                <th>Suggestion</th>
                            </tr>
                        </thead>
                        <tbody>
                           { feedbacks.map( (data, i) => {
                                return (
                                    <tr key={i} >
                                        <td>{"⭐".repeat(data.rating)}</td>
                                        <td>{data.comment}</td>
                                        <td>{data.suggestion}</td>
                                    </tr>
                                )
                            } )
                           }
                        </tbody>
                    </Table>
                </div>
                </div>
            </section>
        </div>

    </>
  )
}

export default Feedback