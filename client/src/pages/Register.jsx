import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    password:''
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) =>{
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      const res = await axios.post('api/auth/register', inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    } 
    
  }

  return (
    
    <div className='auth'>
      <h1>Register</h1>
      <form >
        <input required type='text' placeholder='username' name='username' onChange={handleInputChange} />
        <input required type='email' placeholder='email'name='email' onChange={handleInputChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleInputChange} />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>Do you have an account? <br/><Link to="/login">Login</Link>
        </span>
      </form>  
    </div>
  )
}

export default Register