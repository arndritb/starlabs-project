import React, { useState } from "react";
import '../Pages/Css/Home.css';
import { YinYang } from "../Assets/AllSvgs";
import styled from 'styled-components';
import Intro from "./Intro";

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

export const Home = (props) => {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(



        <div className="box">

            <DarkDiv click={click} />
            <Center className="center" click={click}>
                <YinYang onClick={() => handleClick()} width={click? 120 : 200} height={click? 120 : 200} fill='currentColor' />
                <span className="clickme">click me</span>
            </Center>
            {click ? <Intro click={click} /> : null }
            
        </div>










        // <div className="box">
        //     <div className="innerbox">
        //     {/* <h1>Home osht qitu maxwidth 1500</h1> */}

        //         <div className="subbox" id="one">
        //             <div className="text">
        //                 <h1>Hi,</h1>
        //                 <h3>I'm Arndrit.</h3>
        //                 <h6>I design and Code simple yet beautiful websites.</h6>
        //             </div>
        //         </div>
        //         <div className="subbox" id="two">
        //             <img className="pic" src={Me} alt='Profile Pic' />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home;