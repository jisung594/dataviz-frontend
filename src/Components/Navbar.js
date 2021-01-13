import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/Navbar.scss'
import menu from '../Assets/menu-icon.png'


const Navbar = () => {

  let logOutHandler = () => {
    localStorage.clear()
  }

  return (
    <div className='navbar'>
      <div className='grid-col-1'>
        <img src={menu} id='menu-icon' alt='menu icon'/>

        <Link to='/' className='nav-option'> HOME </Link>
        <Link to='/upload' className='nav-option'> CREATE </Link>

        {/*
        <Link to='/upload' className='nav-option'> UPLOAD </Link>
        <Link to='/graph' className='nav-option'> GRAPH </Link>
        */}

      </div>
      <div className='grid-col-2'>
        <h3 id="logo-placeholder">data viz</h3>
      </div>
      <div className='grid-col-3'>
        <Link to='/profile' className='nav-acc'> ACCOUNT </Link>

        {
          !!localStorage.getItem('user')
          ? <Link to='/' className='nav-acc' onClick={logOutHandler()}> Logout </Link>
          : <div>
            <Link to='/login' className='nav-acc'> Login </Link>
            <Link to='/register' className='nav-acc'> Register </Link>
          </div>
        }


      </div>
    </div>
  )
}

export default Navbar;
