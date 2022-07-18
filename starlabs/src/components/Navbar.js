import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar(props){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [darkMode, setDarkMode] = useState(false);

    return(
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <NavLink exact to="/" className="nav-logo" >
                    </NavLink>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <NavLink 
                                exact to="/" 
                                activeClassName='active' 
                                className="nav-links" 
                                onClick={handleClick} >
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink 
                                exact to="/skills" 
                                activeClassName='active' 
                                className="nav-links" 
                                onClick={handleClick} >
                                Skills
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink 
                                exact to="/work" 
                                activeClassName='active' 
                                className="nav-links" 
                                onClick={handleClick} >
                                Work
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink 
                                exact to="/contact" 
                                activeClassName='active' 
                                className="nav-links" 
                                onClick={handleClick} >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <div className='nav-icon' onClick={handleClick}>
                        {/* 3 vijat per menu */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}>

                        </i>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;