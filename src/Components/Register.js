import React from 'react'

const Register = () => {
  return (
    <div className="form">
      <h2> Register </h2>
      <form>
        <input type='text' placeholder='Username'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Password'/>
        <input type='text' placeholder='Confirm Password'/>
        <input type='submit'/>
      </form>
    </div>
  )

}

export default Register;
