import React from 'react';
import styled from 'styled-components'


const Box = styled.div`
background-color: #181818;
color: #909096;
font-size: 1.6rem;
width: 10rem;
height: 100vh;
position: absolute;
left: auto;
top: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
font-family: sf-mono;
`;



const Logo = styled.div`
background-color: black;
height: 13rem;
justify-content: start;
`

const Name = styled.h2`
color: white;
font-size: 2.7rem;
text-align: center;
justify-content: center;
margin-top: 4rem;

`

const Profession = styled.h6`
text-align: center;
margin-top: 3rem;
font-size: 0.9rem;
`

const Sidebar = styled.div`
cursor: pointer;
border-top: 1px solid #282828;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 10vh;

`

const About = styled.div`
text-align: center;
width: 100%;
display: block;
font-size: 1.4rem;
color: #909096;
line-height: 3.2rem;
border-bottom: 1px solid #282828;


&:hover,
&:focus{
    color: #08fdd8;
}
&:active{
    color: #08fdd8;
}


`;

const Skills = styled.div`
text-align: center;
    width: 100%;
    display: block;
    font-size: 1.4rem;
    color: #909096;
    line-height: 3.2rem;
    border-bottom: 1px solid #282828;


&:hover,
&:focus{
    color: #08fdd8;
}
&:active{
    color: #08fdd8;
}
`;

const Work = styled.div`
    text-align: center;
    width: 100%;
    display: block;
    font-size: 1.4rem;
    color: #909096;
    line-height: 3.2rem;
    border-bottom: 1px solid #282828;

&:hover,
&:focus{
    color: #08fdd8;
}
&:active{
    color: #08fdd8;
}
`;

const Contact = styled.div`
text-align: center;
    width: 100%;
    display: block;
    font-size: 1.4rem;
    color: #909096;
    line-height: 3.2rem;
    border-bottom: 1px solid #282828;

&:hover,
&:focus{
    color: #08fdd8;
}
&:active{
    color: #08fdd8;
}
`;

const SocialIcons = styled.div`

`


const Main = () => {
    return(
        <Box>
            <Logo>
                <Name>Arndrit</Name>
                <Profession>Web Developer</Profession>
            </Logo>

            
            <Sidebar>
                <About>// about</About>
                <Skills>// my skills</Skills>
                <Work>// work</Work>
                <Contact>// contact</Contact>
            </Sidebar>

            <SocialIcons>here</SocialIcons>

        </Box>
    )
}

export default Main;