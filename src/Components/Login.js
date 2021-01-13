import React, { useState } from 'react'
import '../Styling/Form.scss'

const Login = () => {
  const [formInput, setInput] = useState({});

  let loginUser = (e) => {
    e.preventDefault()

    let formData = new FormData();
    formData.append('email', formInput['email'])
    formData.append('password', formInput['password'])

    fetch('http://127.0.0.1:5000/login', {
      method: "POST",
      body: formData
    })
      .then(res => res.json)
      .then(data => {
        // localStorage.setItem('token', data.jwt)
        // localStorage.setItem('user', data)
        console.log(data)
      })
  }


  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={(event) => loginUser(event)}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input type='submit'/>
      </form>
    </div>
  )

}

export default Login;
