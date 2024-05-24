import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  
    return (
    <nav>
        <Link to='/'>LOGO</Link>
        <ul>
            <li>
                <Link to='/Contact'>Contact</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>        
            <li>
                <Link to='/Login'><button>Login</button></Link>
            </li>        
        </ul>
    </nav>
  )
}

export default Navbar