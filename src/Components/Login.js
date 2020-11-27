import React from 'react'
import '../Styling/Form.scss'

const Login = () => {
  return (
    <div className="form">
      <h2> Login </h2>
      <form>
        <input type='text' placeholder='Email or Username'/>
        <input type='text' placeholder='Password'/>
        <input type='submit'/>
      </form>
    </div>
  )

}

export default Login;
