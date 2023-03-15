import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-1000.png'
import './Navbar.css'

function Navbar() {
  return (
    <div>
    <div className='logo-container'>
        <img src={logo} style={{ width: '100px', padding: '5px'}}/>
    </div>
    <nav className='nav'>
        <Link to="/my-portfolio/">
            <button>Home |</button>
        </Link>
        <Link to="/my-portfolio/projects">
            <button>Projects |</button>
        </Link>
        <Link to="/my-portfolio/contact">
            <button>Contact</button>
        </Link>
    </nav>
    </div>
  )
}

export default Navbar