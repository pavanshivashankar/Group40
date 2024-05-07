import React, { useEffect, useState } from "react";
import CaretakerDash_Navbar from "../../components/caretakerDashboard/CareTakerDash_Navbar";
import { toast } from "react-toastify";
import { useParams, Link, useNavigate } from "react-router-dom";

function UpdateShift() {
  const { id } = useParams();

  const [inputData, setInputData] = useState();
  const [data, setData] = useState([]);
  const [shift, setShift] = useState([]);

  const navigate = useNavigate();

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
    console.log(inputData);
    try {
      const response = await fetch(`http://localhost:4000/staff/shift/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({shift: shift.shift}),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        deleteHandler()
        navigate("/caretaker/employee");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const deleteHandler = async () => {
    try {
      const response = await fetch(`http://localhost:4000/shiftChange/${id}`, {
        method: 'DELETE',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // setData(prevData => prevData.filter(staff => staff._id !== id));
        // toast.success(data.message)
        console.log("well")
      } else {
        // toast.error(data.message)
        console.log("not well")
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/staff/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setData(resData);
          //   console.log(inputData);
        } else {
          console.error("Failed to fetch events:", response.status);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const shiftData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/shiftChange/${id}`,
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
          // console.log(shift);
        } else {
          console.error("Failed to fetch events:", response.status);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    shiftData();
    fetchData();
  }, []);

  return (
    <>
      <CaretakerDash_Navbar />
      <section style={{ marginTop: "5.5rem" }}>
        <div className="container mt-4 ">
          <div className="row justify-content-center">
            <div className=" col-md-6 p-3 shadow mt-4">
              <h3 className="fw-bold">Update Shift {id} </h3>
              <div className="mt-3">
                <form action="" method="" onSubmit={updateShiftHandler}>
                  <div className="d-flex mb-4" style={{ gap: "12px" }}>
                    <div className="w-50">
                      <input
                        type="text"
                        name="employeeId"
                        value={id}
                        className="w-100 p-2 inputField"
                        onChange={getInputdata}
                        placeholder="Employee ID"
                      />
                    </div>
                    <div className="w-50">
                      <input
                        type="text"
                        name="employeeName"
                        className="w-100 p-2 inputField"
                        onChange={getInputdata}
                        value={data.name}
                        readOnly
                        placeholder=" Employee Name"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <select
                      name="shift"
                      onChange={(e) =>
                        setInputData((preValues) => ({
                          ...preValues,
                          shift: e.target.value,
                        }))
                      }
                      value={shift.shift}
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
                  </div>

                  <button className="btn btn-primary py-2 px-5 mt-3">
                    Update{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="inline mx-2 mt-5 text-blue-600 text-left">
        <Link to={"/caretaker/employee"} className="text-decoration-none fs-6">
          ⬅️ Go Back
        </Link>
      </p>
    </>
  );
}

export default UpdateShift;
