import React, { useEffect, useState } from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import { useNavigate, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { toast } from 'react-toastify';


function AllStaff() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const deletestaffHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/staff/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setData(prevData => prevData.filter(staff => staff._id !== id));
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
        const response = await fetch("http://localhost:4000/staff/", {
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
          console.error("Failed to fetch events:", response.status);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
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
        <section className="mt-lg-0 mt-5">
          <div className="mt-lg-0 mt-4 p-3">
            <h1 className=" mt-2 text-center text-muted">All staff Members</h1>
            <p className="text-center">
              {" "}
              Here are the list of all staffs. Admin can assign role to the
              employees.
            </p>
            <div style={{ overflowX: "auto" }}>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Role</th>
                    <th>Shift</th>
                    <th>Update & Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}.</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td className="d-flex justify-content-between align-items-center">
                        {user.role}
                      </td>
                      <td>
                        {user.shift === "1"
                          ? "Morning (06:00 AM - 12:00 PM)"
                          : user.shift === "2"
                          ? "Afternoon (12:00 PM - 06:00 PM)"
                          : user.shift === "3"
                          ? "Evening (06:00 PM - 12:00 AM)"
                          : user.shift === "4"
                          ? "Night (12:00 AM - 06:00 AM)"
                          : "Not assigned"}
                      </td>
                      <td><div className="d-flex justify-align-content-center ">
                                    <Link to= {`/admin/editStaff/${user._id}`} className='editBtn px-3 mx-3 text-decoration-none' >Edit</Link>
                                    
                                    <button className="deleteBtn px-3" onClick={()=>{
                                        deletestaffHandler(user._id)
                                        }}>Delete
                                    </button>
                                </div></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AllStaff;
