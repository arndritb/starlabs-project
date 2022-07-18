import React from "react";

export const Skillicons = (props) => {
    return(
        <div className="skill-title">
        <div className="img">
        <h1>{props.name}</h1>
        <img src={props.Img}/>
            {/* <img src={props.Img} /> */}
        </div>
        {/* <title>{props.title}</title> */}
    </div>
    )
}