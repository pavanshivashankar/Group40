import React, { useState } from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddEvent() {
  const [inputData, setInputData] = useState({
    name: "",
    date: "",
    location: "",
    registrationRequired: false,
    registrationOpen: false,
    capacity: "",
    registrationStartDate: "",
    registrationEndDate: "",
    description: "",
  });

  const navigate = useNavigate();

  function getInputdata(e) {
    setInputData((preValues) => {
      return {
        ...preValues,
        [e.target.name]: e.target.value,
      };
    });
  }


  const addEventHandler = async (e) => {
    e.preventDefault();
    console.log(inputData)
    try {
      const response = await fetch("http://localhost:4000/event/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const data = await response.json();


      if (response.ok) {
        toast.success(data.message);
        navigate("/admin/allEvents");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

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
                  <h3 className="fw-bold">Add New Event </h3>
                  <div className="mt-3">
                    <form onSubmit={addEventHandler}>
                      <input
                        type="text"
                        name="name"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter event name"
                      />
                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Event Time:</label>
                        <input
                          type="date"
                          name="date"
                          // className="w-100 p-2 mb-3 inputField"
                          onChange={getInputdata}
                          placeholder="Enter event date"
                        />
                      </div>
                      <input
                        type="text"
                        name="location"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter location"
                      />

                      <div className="d-flex justify-content-around ">
                        <div className="d-flex justify-content-around w-100 p-2 px-20 mb-3 inputField">
                          <label>
                            <strong>registrationRequired:</strong>
                          </label>
                          <input
                            type="checkbox"
                            name="registrationRequired"
                            // className="w-100 p-2 mb-3 inputField"
                            onChange={(e) => {
                              const { name, value, type, checked } = e.target;
                              setInputData((prevValues) => ({
                                ...prevValues,
                                [name]: type === "checkbox" ? checked : value,
                              }));
                            }}
                            placeholder="Enter event date"
                          />
                        </div>
                        <div className="d-flex justify-content-around w-100 p-2 mb-3 inputField">
                          <label>
                            <strong>registrationOpen:</strong>
                          </label>
                          <input
                            type="checkbox"
                            name="registrationOpen"
                            onChange={(e) => {
                              const { name, value, type, checked } = e.target;
                              setInputData((prevValues) => ({
                                ...prevValues,
                                [name]: type === "checkbox" ? checked : value,
                              }));
                            }}
                            placeholder="Enter event date"
                          />
                        </div>
                      </div>

                      <input
                        type="number"
                        name="capacity"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter capacity"
                      />

                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Registration Start Date:</label>
                        <input
                          type="date"
                          name="registrationStartDate"
                          // className="w-100 p-2 mb-3 inputField"
                          onChange={getInputdata}
                          placeholder="Enter event date"
                        />
                      </div>
                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Registration End Date:</label>
                        <input
                          type="date"
                          name="registrationEndDate"
                          // className="w-100 p-2 mb-3 inputField"
                          onChange={getInputdata}
                          placeholder="Enter event date"
                        />
                      </div>
                      <textarea
                        name="description"
                        cols="10"
                        rows="3"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Write description about event"
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-primary py-2 px-5 mt-3"
                      >
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <p className="inline mx-2 mt-5 text-blue-600 text-left">
              <Link
                to={"/admin/allEvents"}
                className="text-decoration-none fs-6"
              >
                ⬅️ Go Back
              </Link>
            </p> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default AddEvent;
