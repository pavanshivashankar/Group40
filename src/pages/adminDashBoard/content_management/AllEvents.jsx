import React, { useEffect, useState } from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import { useNavigate, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

function AllEvents() {
  const [data, setData] = useState([]);


  const deleteEventHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/event/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setData(prevData => prevData.filter(event => event._id !== id));
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
        const response = await fetch("http://localhost:4000/event/", {
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
        <section className="mt-lg-0 mt-5">
          <div className="mt-lg-0 mt-4 p-3">
            <h1 className=" mt-2 text-center text-muted">All Events</h1>
            <p className="text-center">
              {" "}
              Here are the list of all events. You can perform operation on the
              events
            </p>
            <div style={{ overflowX: "auto" }}>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Capacity</th>
                    <th>registrationRequired</th>
                    <th>registrationOpen</th>
                    <th>Reg. Start</th>
                    <th>Reg. End</th>
                    <th>Description</th>
                    <th>Event Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((event, index) => (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{event.name}</td>
                      <td>{new Date(
                          event.date
                        ).toLocaleDateString()}
                        {" "}
                        {new Date(
                          event.date
                        ).toLocaleTimeString()}</td>
                      <td>{event.location}</td>
                      <td>{event.capacity}</td>
                      <td className={event.registrationRequired === true ? "bg-success" : "bg-danger"}>{event.registrationRequired === true ? "Yes": "No"}</td>
                      <td className={event.registrationOpen === true ? "bg-success" : "bg-danger"}>{event.registrationOpen === true ? "Yes": "No"}</td>
                      <td>
                        {new Date(
                          event.registrationStartDate
                        ).toLocaleDateString()}
                        {" "}
                        {new Date(
                          event.registrationStartDate
                        ).toLocaleTimeString()}
                      </td>
                      <td>{new Date(
                          event.registrationEndDate
                        ).toLocaleDateString()}
                        {" "}
                        {new Date(
                          event.registrationEndDate
                        ).toLocaleTimeString()}</td>
                      <td>{event.description}</td>
                      <td className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-align-content-center ">
                          <Link
                            to={`/admin/updateEvent/${event._id}`}
                            className="editBtn px-3 mx-3 text-decoration-none"
                          >
                            Edit
                          </Link>

                          <button
                            className="deleteBtn px-3"
                            onClick={() => {
                              deleteEventHandler(event._id);
                            }}
                          >
                            Delete
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
  );
}

export default AllEvents;
