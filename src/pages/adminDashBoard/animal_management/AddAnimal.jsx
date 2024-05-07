import React, { useState } from "react";
import Admin_Dash_Nav from "../../../components/adminDashboard/Admin_Dash_Nav";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddAnimal() {
  const [inputData, setInputData] = useState({
    name: "",
    speciesName: "",
    age: "",
    gender: "",
    habitatName: "",
    zookeeper: "",
    caretaker: "",
    note: "",
  });

  const navigate = useNavigate();

  const getInputdata = (e) => {
    setInputData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const addAnimalHandler = async (e) => {
    e.preventDefault();
    console.log(inputData);
    try {
      const response = await fetch("http://localhost:4000/animal/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        toast.success(data.message);
        navigate("/admin/allAnimals");
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
                  <h1 className="mt-3">Add New Animal</h1>
                  <div className="mt-3">
                    <form onSubmit={addAnimalHandler}>
                      <input
                        type="text"
                        name="name"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter animal name"
                      />
                      <input
                        type="text"
                        name="speciesName"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter species name"
                      />
                      <input
                        type="number"
                        name="age"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter age"
                      />
                      <select
                        name="gender"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="text"
                        name="habitatName"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter habitat name"
                      />
                      <input
                        type="text"
                        name="zookeeper"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter zookeeper name"
                      />
                      <input
                        type="text"
                        name="caretaker"
                        className="w-50 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Enter caretaker name"
                      />
                      <textarea
                        name="note"
                        cols="10"
                        rows="3"
                        className="w-100 p-2 mb-3 inputField"
                        onChange={getInputdata}
                        placeholder="Note details about animal"
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

            {/* <p className='inline mx-2 mt-5 text-blue-600 text-left'>
              <Link to={'/admin/allAnimal'} className='text-decoration-none fs-6' >⬅️ Go Back</Link>
        </p> */}
          </div>
        </section>

        {/* <section className="mt-lg-0 mt-5">
          <div className="mt-lg-0 mt-4 p-3">
          <div className="container mt-4 ">
                <div className="row justify-content-center">
                    <div className=" col-md-6 shadow p-3">
            <h1 className="mt-3">Add New Animal</h1>
            <div className="mt-3">
              <form onSubmit={addAnimalHandler}>
                <input
                  type="text"
                  name="name"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Enter animal name"
                />
                <input
                  type="text"
                  name="speciesName"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Enter species name"
                />
                <input
                  type="number"
                  name="age"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Enter age"
                />
                <select
                  name="gender"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="habitatName"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Enter habitat name"
                />
                <input
                  type="text"
                  name="zookeeper"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Enter zookeeper name"
                />
                <input
                  type="text"
                  name="caretaker"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Enter caretaker name"
                />
                <textarea
                  name="note"
                  cols="10"
                  rows="3"
                  className="w-50 p-2 mb-3 inputField"
                  onChange={getInputdata}
                  placeholder="Note details about animal"
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
          </div>
        </section> */}
      </div>
    </>
  );
}

export default AddAnimal;
