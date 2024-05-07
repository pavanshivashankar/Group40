import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [inputData, setInputData] = useState( { userName:'', password:'' } );
    const navigate = useNavigate()
    function getInputdata(e){
        setInputData( (preValues)=>{
            return {
                ...preValues, [e.target.name]: e.target.value
            }
        } )
    }

    const loginHandler = async (e)=>{
        e.preventDefault();
        try {
    
            const response = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            });
            if (response.ok) {
                const resData = await response.json()
                const data = resData.user
                if(data.role === "Admin"){
                    navigate("/admin")
                  } else if( data.role === "AnimalSpecialist"){
                    navigate("/animal/dashboard")
                  } else if( data.role === "AnimalCaretaker"){
                    navigate("/caretaker/employee")
                  } else if( data.role === "Employee"){
                    navigate("/employee")
                  } else if( data.role === "Visitor"){
                    navigate("/visitor")
                  }
                toast.success(resData.message)
                console.log(data)
            } else{
                const errorData = await response.json()
                toast.error(errorData.message)
            }
            
        } catch (error) {
            console.error('Error registering user:', error.message);
            toast.error(error.message);
        }
    }


  return (
    <>
        <div className='container' >
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card mt-5 cbody" >
                        <div className="card-body ">
                            <div className="text-center">
                            <h1 className="logo p-1 ">  <span className="fw-bold logoText">T</span><span className="world">ZOO</span>  </h1>
                            </div>
                            <h3 className='text-center mt-3 mb-4 text-muted fw-bold text-decoration-underline' >Sign in</h3>
                            <form action='' method='' onSubmit={loginHandler} className='text-center' >
                                <input type="text" name='userName'onChange={getInputdata} value={inputData.userName} placeholder="Enter username"  className='mb-3 inputForm text-dark fw-bold p-2 w-100' />
                                <input type="password" name='password' onChange={getInputdata} value={inputData.password} placeholder="Enter password"  className='mb-3 inputForm text-dark fw-bold p-2 w-100' />
                                <button className="btnCss fw-bold px-4 py-1">Login</button>
                            </form>
                            <p className='text-center mt-2 mb-0 '>Don't have account? <Link to={'/'} className='loginLink' >Register</Link>  </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>

  )
}

export default Login