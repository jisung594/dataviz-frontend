import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='grid-col-1'>
        <Link to='/' className='nav-option'> HOME </Link>
        <Link to='/form' className='nav-option'> UPLOAD </Link>
        <Link to='/graph' className='nav-option'> GRAPH </Link>
      </div>
      <div className='grid-col-2'>
        <h3 id="logo-placeholder">data viz</h3>
      </div>
      <div className='grid-col-3'>
        <Link to='/profile' className='nav-acc'> ACCOUNT </Link>
      </div>
    </div>
  )
}

export default Navbar;
