import React, { useEffect, useState } from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
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

  const updateEventHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/event/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const resMessage = await response.json();
        toast.success(resMessage.message);
        navigate("/admin/allEvents");
      } else {
        const errorMessage = await response.json();
        toast.error(errorMessage.message);
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("An unexpected error occurred");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/event/${id}`, {
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
        console.error(error);
      }
    };

    console.log(data);

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
                  <h3 className="fw-bold">Update event details: {id} </h3>
                  <div className="mt-3">
                    <form onSubmit={updateEventHandler}>
                      <input
                        type="text"
                        name="name"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        value={data.name}
                        placeholder="Enter event name"
                      />
                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Event Time:</label>
                        <input
                          type="date"
                          name="date"
                          onChange={(e) =>
                            setData({ ...data, date: e.target.value })
                          }
                          value={data.date ? data.date.slice(0, 16) : ""}
                          placeholder="Enter event date"
                        />
                      </div>
                      <input
                        type="text"
                        name="location"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={(e) =>
                          setData({ ...data, location: e.target.value })
                        }
                        value={data.location}
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
                            onChange={(e) => {
                              const { name, type, checked } = e.target;
                              setData((prevValues) => ({
                                ...prevValues,
                                [name]:
                                  type === "checkbox"
                                    ? checked
                                    : e.target.value,
                              }));
                            }}
                            checked={data.registrationRequired}
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
                              const { name, type, checked } = e.target;
                              setData((prevValues) => ({
                                ...prevValues,
                                [name]:
                                  type === "checkbox"
                                    ? checked
                                    : e.target.value,
                              }));
                            }}
                            checked={data.registrationOpen}
                            placeholder="Enter event date"
                          />
                        </div>
                      </div>

                      <input
                        type="number"
                        name="capacity"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={(e) =>
                          setData({ ...data, capacity: e.target.value })
                        }
                        value={data.capacity}
                        placeholder="Enter capacity"
                      />

                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Registration Start Date:</label>
                        <input
                          type="date"
                          name="registrationStartDate"
                          onChange={(e) =>
                            setData({ ...data, registrationStartDate: e.target.value })
                          }
                          value={data.registrationStartDate}
                          placeholder="Enter event date"
                        />
                      </div>
                      <div className="d-flex justify-content-start w-100 p-2 px-20 mb-3 inputField">
                        <label>Registration End Date:</label>
                        <input
                          type="date"
                          name="registrationEndDate"
                          onChange={(e) =>
                            setData({ ...data, registrationEndDate: e.target.value })
                          }
                          value={data.registrationEndDate ? data.registrationEndDate.slice(0, 16) : ""}
                          placeholder="Enter event date"
                        />
                      </div>
                      <textarea
                        name="description"
                        cols="10"
                        rows="3"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={(e) =>
                          setData({ ...data, description: e.target.value })
                        }
                        value={data.description}
                        placeholder="Write description about event"
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-primary py-2 px-5 mt-3"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <p className="inline mx-2 mt-5 text-blue-600 text-left">
              <Link
                to={"/admin/allEvents"}
                className="text-decoration-none fs-6"
              >
                ⬅️ Go Back
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default UpdateEvent;
