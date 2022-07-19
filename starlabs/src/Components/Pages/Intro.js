import React from "react";
import styled from "styled-components";
import Me from '../Assets/Images/prof.png'
import './Home.css';


const Box = styled.div`

position: absolute;
left: 50%;
top: 30%;
transform: translate(-50%);

width: 55vw;
height: 40vh;
display: flex;


background: linear-gradient(
    to right,
    white 50%,
    black 50%) bottom,
    linear-gradient(
    to right,
    white 50%,
    black 50%) top;

    
background-repeat: no-repeat;
background-size: 100% 2px;

border-left: 2px solid white;
border-left: 2px solid black;


z-index: 1;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
${'' /* font-type: 'Oswald', sans-serif; */}
    font: 100 45px 'Oswald', sans-serif;
    ${'' /* text-transform: uppercase; */}
    ${'' /* letter-spacing: 6px; */}
    color: white;
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;


`

const Intro = () => {
    return(
        <Box>
            <SubBox>
                <Text>
                    <h1 className="hi">Hi,</h1>
                    <h3 className="myname">I'm Arndrit.</h3>
                    <h6 className="ibuild">I build things for the web.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <div>
                    <img className="pic" src={Me} alt="Profile Pic" />
                </div>
            </SubBox>
        </Box>
    )
}

export default Intro;