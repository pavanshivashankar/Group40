import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";

function EditStaff() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    shift: "",
  });

  const id = useParams().id;
  console.log(id);
  const navigate = useNavigate();

  function getInputdata(e) {
    setInputData((preValues) => {
      return {
        ...preValues,
        [e.target.name]: e.target.value,
      };
    });
  }

  const updateStaffHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/staff/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/admin/staffs");
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
        const response = await fetch(`http://localhost:4000/staff/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const resData = await response.json();
          setInputData(resData);
          console.log(inputData);
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
            <div className="container mt-4 ">
              <div className="row justify-content-center">
                <div className=" col-md-6 shadow p-3">
                  <h3 className="fw-bold">Update Staff details: {inputData._id} </h3>
                  <div className="mt-3">
                    <form action="" method="" onSubmit={updateStaffHandler}>
                      <div className="d-flex" style={{ gap: "12px" }}>
                        <div className="mb-3 w-50">
                          <input
                            type="text"
                            name="name"
                            onChange={getInputdata}
                            value={inputData.name}
                            className="w-100 p-2 inputField"
                            placeholder="Enter staff name"
                          />
                        </div>
                        <div className="mb-3 w-50">
                          <input
                            type="email"
                            name="email"
                            onChange={getInputdata}
                            value={inputData.email}
                            className="w-100 p-2 inputField"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="mb-3 w-50">
                          <input
                            type="tel"
                            name="phoneNumber"
                            onChange={getInputdata}
                            value={inputData.phoneNumber}
                            minLength={10}
                            maxLength={10}
                            className="w-100 p-2 inputField"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-4" style={{ gap: "12px" }}>
                        <select
                          name="role"
                          onChange={getInputdata}
                          value={inputData.role}
                          className="w-100 p-2 inputField"
                        >
                          <option selected disabled>
                            {" "}
                            --Select Role--{" "}
                          </option>
                          <option value="Admin">Admin</option>
                          <option value="AnimalSpecialist">
                            AnimalSpecialist
                          </option>
                          <option value="AnimalCaretaker">
                            AnimalCaretaker
                          </option>
                          <option value="Employee">Employee</option>
                          {/* <option value="Visitor">Visitor</option> */}
                        </select>
                      </div>
                      <div className="d-flex mb-4" style={{ gap: "12px" }}>
                        <select
                          name="shift"
                          onChange={getInputdata}
                          value={inputData.shift}
                          className="w-100 p-2 inputField"
                        >
                          <option selected disabled>
                            {" "}
                            --Select Shift--{" "}
                          </option>
                          <option value="1">
                            Morning (06:00 AM - 12:00 PM)
                          </option>
                          <option value="2">
                            Afternoon (12:00 PM - 06:00 PM)
                          </option>
                          <option value="3">
                            Evening (06:00 PM - 12:00 AM)
                          </option>
                          <option value="4">Night (12:00 AM - 06:00 AM)</option>
                        </select>
                      </div>

                      <button className="btn btn-primary py-2 px-5 mt-3">
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
{/* 
            <p className="inline mx-2 mt-5 text-blue-600 text-left">
              <Link to={"/admin/staff"} className="text-decoration-none fs-6">
                ⬅️ Go Back
              </Link>
            </p> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default EditStaff;
