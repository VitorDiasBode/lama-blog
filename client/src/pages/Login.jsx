import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })
  const [error, SetError] = useState(null)

  const handleInputChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/login", inputs)
      navigate("/")
    } catch (err) {
      SetError(err.response.data);
      
    }
    console.log(inputs);
  }



  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input required type='text' placeholder='username' name='username' onChange={handleInputChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleInputChange}/>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>Don't you have an account? <br/><Link to="/register">Register</Link>
        </span>
      </form>  
    </div>
  )
}

export default Login