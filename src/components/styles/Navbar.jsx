import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navContent'>
    <div className='logo-container'>
        <img src={logo} alt="logo"/>
    </div>
    <nav className='nav'>
        <Link to="/">
            <button>Home </button>
        </Link>
        <Link to="/projects">
            <button>Projects </button>
        </Link>
        <Link to="/contact">
            <button>Contact</button>
        </Link>
    </nav>
    </div>
  )
}

export default Navbar