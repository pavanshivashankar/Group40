import React, { useEffect, useState } from "react";
import CaretakerDash_Navbar from "../../components/caretakerDashboard/CareTakerDash_Navbar";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function Employees() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [shift, setShift] = useState([])

  const assignShiftHandler = (id) => {
    console.log("assigned", id);
    navigate(`/caretaker/employee/assignShift/${id}`);
  };

  const updateShiftHandler = (id) => {
    console.log("updated", id);
    navigate(`/caretaker/employee/updateShift/${id}`);
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
          // console.log(data);
        } else {
          console.error("Failed to fetch events:", response.status);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const shiftData = async () => {
      try {
        const response = await fetch("http://localhost:4000/shiftChange/", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setShift(resData);
          // console.log(shift);
        } else {
          console.error("Failed to fetch events:", response.status);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    // console.log(data.map((id) => console.log(id._id)))
    console.log("id")
    // console.log("shift", shift.map((id) => console.log(id.staff)))

    fetchData();
    shiftData()
  }, []);

  return (
    <>
      <CaretakerDash_Navbar />
      <section style={{ marginTop: "5.5rem" }}>
        <h2 className=" text-center mt-5 mb-3">All employees details</h2>

        <div style={{ overflowX: "auto" }}>
          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Shift</th>
                <th>Name</th>
                {/* <th>Responsiblity</th> */}
                <th>Role</th>
                <th>Shift Request</th>
                {/* <th>Attendence Status</th> */}
                <th>Update Status</th>
                <th>Shift Reason</th>
                {/* <th>Shift Swap Request</th> */}
                {/* <th>Shift Note</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((staff, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {staff.shift === "1"
                      ? "Morning (06:00 AM - 12:00 PM)"
                      : staff.shift === "2"
                      ? "Afternoon (12:00 PM - 06:00 PM)"
                      : staff.shift === "3"
                      ? "Evening (06:00 PM - 12:00 AM)"
                      : staff.shift === "4"
                      ? "Night (12:00 AM - 06:00 AM)"
                      : "Not assigned"}
                  </td>
                  <td>{staff.name}</td>
                  {/* <td>{staff.role}</td> */}
                  <td>{staff.role}</td>
                  <td className="d-flex justify-content-between align-staffs-center">
                  {shift.find((id) => id.staff === staff._id) ? (<button
                        className="editBtn px-3 bg-danger"
                        onClick={() => {
                          updateShiftHandler(staff._id);
                        }}
                      >
                        update
                      </button>) : "No update"}
                    
                  </td>
                  {/* <td>{staff.attendanceStatus}</td> */}
                  <td>{shift.find((shift) => shift.staff === staff.shift) ? "Updated": "Not"}</td>
                  {shift.find((id) => id.staff === staff._id)?.reason || "No reason"}
                  {/* <td>{staff.userName}</td> */}
                  {/* <td>{staff.shiftReason}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default Employees;
