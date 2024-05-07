import React, { useEffect, useState } from "react";
import Employee_Navbar from "../../components/employeeAccount/Employee_Navbar";
import { toast } from "react-toastify";
import { useParams, Link, useNavigate } from "react-router-dom";

function ChangeShift() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [shiftData, setShift] = useState([]);
  const [inputData, setInputData] = useState({shift: shiftData.shift, reason: ""});

  function getInputdata(e) {
    setInputData((preValues) => {
      return {
        ...preValues,
        [e.target.name]: e.target.value,
      };
    });
  }


  const updateShiftHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/shiftChange/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const data = await response.json();


      if (response.ok) {
        toast.success(data.message);
        navigate("/employee");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
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
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // fetchData();
    shiftData();
  }, []);

  return (
    <>
      <Employee_Navbar />
      <section style={{ marginTop: "5rem" }}>
        <div className="container mt-4 ">
          <div className="row justify-content-center p-4">
            <div className=" col-md-6 p-3 shadow mt-4">
              <h3 className="fw-bold">Change Shift {id} </h3>
              <div className="mt-3">
                <form action="" method="" onSubmit={updateShiftHandler}>
                  <p className="p-2 fs-5 text-muted ">
                    {" "}
                    Current shift:{" "}
                    {shiftData.shift === "1"
                      ? "Morning (06:00 AM - 12:00 PM)"
                      : shiftData.shift === "2"
                      ? "Afternoon (12:00 PM - 06:00 PM)"
                      : shiftData.shift === "3"
                      ? "Evening (06:00 PM - 12:00 AM)"
                      : shiftData.shift === "4"
                      ? "Night (12:00 AM - 06:00 AM)"
                      : "Not assigned"}{" "}
                  </p>

                  <div className="mt-4">
                    <select
                      name="shift"
                      onChange={(e) =>
                        setInputData((preValues) => {
                          return {
                            ...preValues,
                            shift: e.target.value,
                          };
                        })
                      }
                      value={inputData.shift}
                      className="w-100 p-2 inputField"
                    >
                      <option selected disabled>
                        {" "}
                        --Select Shift--{" "}
                      </option>
                      <option value="1">Morning (06:00 AM - 12:00 PM)</option>
                      <option value="2">Afternoon (12:00 PM - 06:00 PM)</option>
                      <option value="3">Evening (06:00 PM - 12:00 AM)</option>
                      <option value="4">Night (12:00 AM - 06:00 AM)</option>
                    </select>

                    <div className="mt-4">
                      <textarea
                        name="reason"
                        cols="10"
                        rows="3"
                        className="w-100 p-2 inputField"
                        onChange={getInputdata}
                        placeholder="Write shift reason"
                      ></textarea>
                    </div>
                  </div>

                  <button className="btn btn-primary py-2 px-5 mt-3">
                    submit{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="inline mx-2 mt-5 text-blue-600 text-left">
        <Link to={"/employee"} className="text-decoration-none fs-6">
          ⬅️ Go Back
        </Link>
      </p>
    </>
  );
}

export default ChangeShift;
