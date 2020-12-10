import React, { useState } from 'react'

const Register = () => {
  const [formInput, setInput] = useState({});

  let registerUser = (e) => {
    // e.preventDefault()

    if (formInput['password'] !== formInput['password_conf']) {
      e.preventDefault()
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
        .then(res => {
          if (res.status === 200) {
            alert(`${formInput['username']} is successfully registered`)
          }
        })
        .catch(console.error)
    }

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
