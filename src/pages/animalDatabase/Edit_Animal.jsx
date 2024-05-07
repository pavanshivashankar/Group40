import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AnimalDash_Navbar from "../../components/animalDashboard/AnimalDash_Navbar";
import { toast } from "react-toastify";

function Edit_Animal() {
  const { id } = useParams();
const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    speciesName: "",
    age: "",
    gender: "",
    habitatName: "",
    zookeeper: "",
    caretaker: "",
    note: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/animal/${id}`, {
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

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4000/animal/${id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const resMessage = await response.json()
        toast.success(resMessage.message);
        navigate("/animal/dashboard");
      } else {
        const errorMessage = await response.json();
        toast.error(errorMessage.message);
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
      <AnimalDash_Navbar />
      <section style={{ marginTop: "6rem" }}>
        <div className="container mt-4 ">
          <div className="row justify-content-center">
            <div className=" col-md-6">
              <h3 className="fw-bold">Update Animal Details {id} </h3>
              <div className="mt-3">
                <form onSubmit={updateHandler}>
                  <input
                    type="text"
                    name="name"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    placeholder="Enter animal name"
                  />
                  <input
                    type="text"
                    name="speciesName"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) =>
                      setData({ ...data, speciesName: e.target.value })
                    }
                    value={data.speciesName}
                    placeholder="Enter species name"
                  />
                  <input
                    type="number"
                    name="age"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    value={data.age}
                    placeholder="Enter age"
                  />
                  <select
                    name="gender"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                    value={data.gender}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="text"
                    name="habitatName"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) =>
                      setData({ ...data, habitatName: e.target.value })
                    }
                    value={data.habitatName}
                    placeholder="Enter habitat name"
                  />
                  <input
                    type="text"
                    name="zookeeper"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) =>
                      setData({ ...data, zookeeper: e.target.value })
                    }
                    value={data.zookeeper}
                    placeholder="Enter zookeeper name"
                  />
                  <input
                    type="text"
                    name="caretaker"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) =>
                      setData({ ...data, caretaker: e.target.value })
                    }
                    value={data.caretaker}
                    placeholder="Enter caretaker name"
                  />
                  <textarea
                    name="note"
                    cols="10"
                    rows="3"
                    className="w-100 p-2 mb-3 inputField"
                    onChange={(e) => setData({ ...data, note: e.target.value })}
                    value={data.note}
                    placeholder="Note details about animal"
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
          <Link to={"/animal/dashboard"} className="text-decoration-none fs-6">
            ⬅️ Go Back
          </Link>
        </p>
      </section>
    </>
  );
}

export default Edit_Animal;
