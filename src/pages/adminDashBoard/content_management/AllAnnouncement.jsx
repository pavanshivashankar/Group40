import React, { useEffect, useState } from 'react';
import Admin_Dash_Nav from '../../../components/adminDashboard/Admin_Dash_Nav';
import { useNavigate, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';

function AllAnnouncement() {
   
  const [data, setData] = useState([])

    const deleteEventHandler = async (id) => {
      try {
        const response = await fetch(`http://localhost:4000/announcement/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
    
        if (response.ok) {
          setData(prevData => prevData.filter(announcement => announcement._id !== id));
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error(error)
      }
    };

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4000/announcement/", {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const resData = await response.json();
            setData(resData);
            console.log(data);
          } else {
            console.error(response.status);
          }
        } catch (error) {
          console.error( error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
        <div className="">
            <Admin_Dash_Nav />
        </div>
        <div className="Sep_Margin">
          <section className='mt-lg-0 mt-5'>
            <div className="mt-lg-0 mt-4 p-3">
                <h1 className=' mt-2 text-center text-muted'>All Announcements</h1>
                <p className='text-center'> Here are the list of all announcements. You can perform operation on the announcement section here.</p>
                <div style={{ overflowX: 'auto' }}>

                <Table bordered hover>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Dept.Name</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((announcement, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{announcement.dept}</td>
                            <td>{new Date(
                              announcement.date
                        ).toLocaleDateString()}
                        {" "}
                        {new Date(
                          announcement.date
                        ).toLocaleTimeString()}</td>
                            <td>{announcement.description}</td>
                            <td className='d-flex justify-content-between align-items-center'>
                                <div className="d-flex justify-align-content-center">

                                    <Link to= {`/admin/announcement/edit/${announcement._id}`} className='editBtn px-3 mx-3 text-decoration-none' >Edit</Link>
                                    <button className="deleteBtn px-3" onClick={()=>{
                                        deleteEventHandler(announcement._id)
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

export default AllAnnouncement;