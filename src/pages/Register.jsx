import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [inputData, setInputData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate()

  function getInputdata(e) {
    setInputData((preValues) => {
      return {
        ...preValues,
        [e.target.name]: e.target.value,
      };
    });
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    
    try {
        const { name, userName, email, password, cpassword } = inputData;

        if (password !== cpassword) {
            throw new Error('Password do not match');
        }

        const response = await fetch('http://localhost:4000/user/register', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                name,
                email,
                password,
                confirmPassword: cpassword,
            }),
        });
        if (response.ok) {
            const data = await response.json()
            navigate("/login")
            toast.success(data.message)
            console.log(data)
        } else{
            const errorData = await response.json()
            toast.error(errorData.message)
        }
        
    } catch (error) {
        console.error('Error registering user:', error.message);
        toast.error(error.message);
    }
};

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card mt-5 cbody">
              <div className="card-body ">
                <div className="text-center">
                  <h1 className="logo p-1 ">
                    {" "}
                    <span className="fw-bold logoText">T</span>
                    <span className="world">ZOO</span>{" "}
                  </h1>
                </div>
                <h3 className="text-center mt-3 mb-4 text-muted fw-bold text-decoration-underline">
                  create an account. SignUp
                </h3>
                <form
                  action=""
                  method=""
                  onSubmit={registerHandler}
                  className="text-center"
                >
                  <input
                    type="text"
                    name="name"
                    onChange={getInputdata}
                    value={inputData.name}
                    placeholder="Enter name"
                    className="mb-3 inputForm text-dark fw-bold p-2 w-100"
                  />
                  <input
                    type="text"
                    name="userName"
                    onChange={getInputdata}
                    value={inputData.userName}
                    placeholder="Enter username"
                    className="mb-3 inputForm text-dark fw-bold p-2 w-100"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={getInputdata}
                    value={inputData.email}
                    placeholder="Enter email"
                    className="mb-3 inputForm text-dark fw-bold p-2 w-100"
                  />
                  <input
                    type="password"
                    name="password"
                    onChange={getInputdata}
                    value={inputData.password}
                    placeholder="Enter password"
                    className="mb-3 inputForm text-dark fw-bold p-2 w-100"
                  />
                  <input
                    type="cpassword"
                    name="cpassword"
                    onChange={getInputdata}
                    value={inputData.cpassword}
                    placeholder="Confirm password"
                    className="mb-3 inputForm text-dark fw-bold p-2 w-100"
                  />
                  <button className="btnCss fw-bold px-4 py-1">Register</button>
                </form>
                <p className="text-center mt-2 mb-0 ">
                  Already have account?{" "}
                  <Link to={"/login"} className="loginLink">
                    login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
