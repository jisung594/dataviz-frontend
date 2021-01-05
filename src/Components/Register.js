import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Register = () => {
  const [formInput, setInput] = useState({});
  const [registeredState, setState] = useState({'state':false, 'id':0})

  let registerUser = (e) => {
    e.preventDefault()

    if (formInput['password'] !== formInput['password_conf']) {
      alert('Please confirm password correctly.')
    } else {
      let formData = new FormData();
      formData.append('username', formInput['username'])
      formData.append('first_name', formInput['first_name'])
      formData.append('last_name', formInput['last_name'])
      formData.append('email', formInput['email'])
      formData.append('password', formInput['password'])

      fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          if (data['status'] === 'new') {
            setState({'state': !registeredState.state, 'id':data['id']})
            alert(`${formInput['username']} is successfully registered`)
          } else {
            alert(`${formInput['username']} is already registered`)
          }

        })
        .catch(console.error)
    }
  }

  if (registeredState.state) {
    return <Redirect to={`/profile/${registeredState['id']}`}/>
  }
  

  return (
    <div className='form'>
      <h2> Register </h2>
      <form onSubmit={(event) => registerUser(event)}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='text'
          name='first_name'
          placeholder='First Name'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='text'
          name='last_name'
          placeholder='Last Name'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
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
        <input
          type='password'
          name='password_conf'
          placeholder='Confirm Password'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input type='submit'/>
      </form>
    </div>
  )

}

export default Register;
