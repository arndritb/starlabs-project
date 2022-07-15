import React from "react";
import { Github, Twitter, Facebook } from "../components/AllSvgs";
import styled from "styled-components";


const Icons = styled.div`
position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 20px;
    top: 25%;
`

const SocialIcons = () => {
    return(
        <Icons>
            <Github width={25} height={25}  />
            <Twitter width={25} height={25}/>
            <Facebook width={25} height={25} />
        </Icons>
    )
}

export default SocialIcons;