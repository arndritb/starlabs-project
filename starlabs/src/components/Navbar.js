import React from "react";
import './navbar.css';
import { Link } from "react-scroll";
import SocialIcons from "../subComponents/SocialIcons";

function Navbar(){
    return(
        <>
            {/* <div className='box'>
                <div className='logo'>
                    <h2 className='name'>Arndrit</h2>
                    <h6 className='profession'>Web Developer</h6>
                </div>
            </div> */}
            <nav>



                <input type='checkbox' id="check" />
                    <label for='check' className='checkbtn'>
                        <i className='bars'>|||</i>
                    </label>

                <ul className="navmenu">
                    <li><Link to="intro" smooth={true} duration={1000} ><a href="#">Intro</a></Link></li>
                    <li><Link to="main" smooth={true} duration={1000} ><a href="#">Home</a></Link></li>
                    <li><Link to="skills" smooth={true} duration={1000} ><a href="#">Skills</a></Link></li>
                    <li><Link to="work" smooth={true} duration={1000} ><a href="#">Work</a></Link></li>
                    <li><Link to="contact" smooth={true} duration={2000} ><a href="#">Contact</a></Link></li>
                </ul>


                
            </nav>

        {/* <SocialIcons /> */}
        </>
    )
}

export default Navbar;