import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    password:''
  });

  const handleInputChange = (e) =>{
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      const res = await axios.post('api/auth/register', inputs);
      // const res = await axios.get('/api/auth/test');
    } catch (error) {
      console.log(error)
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
        <p>Erro!</p>
        <span>Do you have an account? <br/><Link to="/login">Login</Link>
        </span>
      </form>  
    </div>
  )
}

export default Register