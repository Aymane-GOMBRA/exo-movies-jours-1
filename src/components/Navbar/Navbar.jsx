import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar