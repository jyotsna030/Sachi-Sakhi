import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar=()=> {
  return <nav>
    <div className="menuIcon">
        <ul className="navbar-list">
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
        </ul>
    </div>

  </nav> 
}

export default Navbar