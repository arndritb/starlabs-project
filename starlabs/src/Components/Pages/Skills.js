import React from "react";
import './Skills.css';
//import data from '../Assets/Data/data'
// import image from '../Assets/Images'
// import { Skillicons } from "./Skillicons";

//images

//using
import react from '../Assets/Images/atom.png'
import bootstrap from '../Assets/Images/bootstrap.png'
import css from '../Assets/Images/css.png'
import figma from '../Assets/Images/figma.png'
import github from '../Assets/Images/github.png'
import html from '../Assets/Images/html.png'
import js from '../Assets/Images/js.png'

//learning
// import react from '../Assets/Images/atom.png'
// import bootstrap from '../Assets/Images/bootstrap.png'
// import css from '../Assets/Images/css.png'
// import js from '../Assets/Images/js.png'
import mysql from '../Assets/Images/mysql.png'
import java from '../Assets/Images/java.png'

//other
import english from '../Assets/Images/english.png'
import german from '../Assets/Images/german.png'







import { useNavigate } from "react-router-dom";



export const Skills = () => {
    return(
        <div className="inner">
            {/* <div className="header"> */}
            <h1 className="headeri">Using</h1>
                <div className="container">
                    
                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={react}  className='skill-icon'/>
                                </div>
                                <h1>React</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={bootstrap} className='skill-icon' />
                                </div>
                                <h1>bootstrap</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={css}  className='skill-icon'/>
                                </div>
                                <h1>css</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={figma}  className='skill-icon'/>
                                </div>
                                <h1>figma</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={github} className='skill-icon' />
                                </div>
                                <h1>github</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={html} className='skill-icon' />
                                </div>
                                <h1>html</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={js} className='skill-icon' />
                                </div>
                                <h1>Javascript</h1>
                            </div>
                            </div>
                </div>



                <h1 className="headeri">Learning</h1>
                <div className="container">

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={react} className='skill-icon' />
                                </div>
                                <h1>React</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={bootstrap}  className='skill-icon'/>
                                </div>
                                <h1>bootstrap</h1>
                            </div>
                            </div>


                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={css} className='skill-icon' />
                                </div>
                                <h1>css</h1>
                            </div>
                            </div>

                                <div className="skill-box">
                                <div className="skill-title">
                                <div className="img">
                                    <img src={js} className='skill-icon' />
                                </div>
                                <h1>Javascript</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={mysql}  className='skill-icon'/>
                                </div>
                                <h1>Mysql</h1>
                            </div>
                            </div>

                            <div className="skill-box">
                            <div className="skill-title">
                                <div className="img">
                                    <img src={java}  className='skill-icon'/>
                                </div>
                                <h1>java</h1>
                            </div>
                            </div>

                </div>



                <h1 className="headeri">Other skills</h1>
                <div className="container">

                    <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={english}  className='skill-icon'/>
                        </div>
                        <h1>english</h1>
                    </div>
                    </div>

                    <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={german} className='skill-icon' />
                        </div>
                        <h1>German</h1>
                    </div>
                    </div>
                </div>






            {/* <Skillicons name={'well'} Img={react} />
            <Skillicons name={'well2'} Img={react} /> */}
            </div>
        // {/* </div> */}
    )

}





export default Skills;

