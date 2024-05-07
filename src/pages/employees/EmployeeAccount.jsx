import React, { useEffect, useState } from "react";
import Employee_Navbar from "../../components/employeeAccount/Employee_Navbar";
import { Link, useNavigate } from "react-router-dom";

function EmployeeAccount() {
  const [data, setData] = useState([]);
  const [shift, setShift] = useState([]);
  const navigate = useNavigate();

  const changeShiftHandler = (id) => {
    console.log("wanna change shift", id);
    navigate(`/employee/changeShift/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/user/byUserId", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setData(resData);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const shiftData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/staff/shiftByUserId",
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const resData = await response.json();
          setShift(resData);
          console.log("data:", shift);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    shiftData();
  }, []);

  return (
    <>
      <Employee_Navbar />
      <section style={{ marginTop: "5rem" }}>
        <div className="container mt-4 ">
          <div className="row justify-content-center p-2">
            <div className=" col-md-6 p-3">
              {/* <h3 className="fw-bold text-muted">Hi John ! </h3> */}
              <div className="shadow p-3">
                <figure className="text-center">
                  <img
                    src="https://source.unsplash.com/800x800/?profile"
                    className="empImg"
                    width="160px"
                    alt=""
                  />
                  <figcaption className="fw-bold fs-3 mt-2 mb-3 text-muted text-decoration-underline">
                    {data.name} !
                  </figcaption>
                  <p>
                    Welcome back, valued team member! Your dedication enriches
                    our mission, ensuring a brighter future for wildlife and our
                    community. Together, we thrive.
                  </p>
                  <h4>
                    Your shift: Morning{" "}
                    {shift.shift === "1"
                      ? "Morning (06:00 AM - 12:00 PM)"
                      : shift.shift === "2"
                      ? "Afternoon (12:00 PM - 06:00 PM)"
                      : shift.shift === "3"
                      ? "Evening (06:00 PM - 12:00 AM)"
                      : shift.shift === "4"
                      ? "Night (12:00 AM - 06:00 AM)"
                      : "Not assigned"}
                  </h4>
                  <p className=" fs-6">
                    {" "}
                    Wanna change shift?
                    <button
                      className="btnCss px-2 mx-1 py-1"
                      onClick={() => {
                        changeShiftHandler(data._id);
                      }}
                    >
                      {" "}
                      click here
                    </button>
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmployeeAccount;
