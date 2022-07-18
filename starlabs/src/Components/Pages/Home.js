import React from "react";
import './Home.css';
import Me from '../Assets/Images/prof.png'

export const Home = () => {
    return(
        <div className="box">
            <div className="innerbox">
            {/* <h1>Home osht qitu maxwidth 1500</h1> */}

                <div className="subbox" id="one">
                    <div className="text">
                        <h1>Hi,</h1>
                        <h3>I'm Arndrit.</h3>
                        <h6>I design and Code simple yet beautiful websites.</h6>
                    </div>
                </div>
                <div className="subbox" id="two">
                    <img className="pic" src={Me} alt='Profile Pic' />
                </div>
            </div>
        </div>
    )
}

export default Home;