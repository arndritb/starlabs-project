import React from "react";
import '../Pages/Css/Skills.css';

export const Skillicons = (props) => {
    return(

        <div className="skill-box">
        <div className="skill-title">
            <div className="img">
                <img src={props.Img}  className='skill-icon'/>
            </div>
            <h1>{props.name}</h1>
        </div>
        </div>

    )
}