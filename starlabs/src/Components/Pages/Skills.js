import React from "react";
import './Skills.css';
import { Skillicons } from "./Skillicons";

//using
import react from '../Assets/Images/atom.png'
import bootstrap from '../Assets/Images/bootstrap.png'
import css from '../Assets/Images/css.png'
import figma from '../Assets/Images/figma.png'
import github from '../Assets/Images/github.png'
import html from '../Assets/Images/html.png'
import js from '../Assets/Images/js.png'

//learning
import mysql from '../Assets/Images/mysql.png'
import java from '../Assets/Images/java.png'

//other
import english from '../Assets/Images/english.png'
import german from '../Assets/Images/german.png'


export const Skills = () => {
    return(
        <div className="inner">
            {/* <div className="header"> */}
            <h1 className="headeri">Using</h1>
                <div className="container">
                    <Skillicons name={'React'} Img={react} />
                    <Skillicons name={'Bootstrap'} Img={bootstrap} />
                    <Skillicons name={'Css'} Img={css} />
                    <Skillicons name={'Figma'} Img={figma} />
                    <Skillicons name={'Github'} Img={github} />
                    <Skillicons name={'Html'} Img={html} />
                    <Skillicons name={'Javascript'} Img={js} />
                </div>

                <h1 className="headeri">Learning</h1>
                <div className="container">
                    <Skillicons name={'React'} Img={react} />
                    <Skillicons name={'Bootstrap'} Img={bootstrap} />
                    <Skillicons name={'Css'} Img={css} />
                    <Skillicons name={'Javascript'} Img={js} />
                    <Skillicons name={'Mysql'} Img={mysql} />
                    <Skillicons name={'Java'} Img={java} />
                </div>

                <h1 className="headeri">Other skills</h1>
                <div className="container">
                <Skillicons name={'English'} Img={english} />
                    <Skillicons name={'German'} Img={german} />
                </div>

            </div>
       
    )

}





export default Skills;

