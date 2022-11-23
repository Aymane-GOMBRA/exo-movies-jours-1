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
                <li>
                    <NavLink to="/computers">Computers</NavLink>
                </li>
                <li>
                    <NavLink to="/hoc">HOC</NavLink>
                </li>
                <li>
                    <NavLink to="/render">Render</NavLink>
                </li>
                <li>
                    <NavLink to="/calendar">Calendar</NavLink>
                </li>
                <li>
                    <NavLink to="/counter">Counter</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar