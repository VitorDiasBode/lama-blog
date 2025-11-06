import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext.jsx';

function Login() {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })
  const [error, SetError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const handleInputChange = (e) => {
  setInputs((prev) => ({...prev, [e.target.name]:e.target.value}));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/")
    } catch (err) {
      SetError(err.response.data);
    }
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