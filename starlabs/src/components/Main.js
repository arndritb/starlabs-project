import React from 'react';
import styled from 'styled-components'
import './main.css';
//need to import in navbar
import SocialIcons from '../subComponents/SocialIcons';


//components
// import Landing from './Landing';
import Navbar from '../components/Navbar';
import Landing from './Landing';







// const Sidebar = styled.div`
// cursor: pointer;
// border-top: 1px solid #282828;
// display: flex;
// flex-direction: column;
// align-items: center;
// width: 100%;
// margin-top: 10vh;
// font-weight: 400;
// `

// const Skills = styled.div`
// text-align: center;
//     width: 100%;
//     display: block;
//     font-size: 1.3rem;
//     color: #909096;
//     line-height: 3.2rem;
//     border-bottom: 1px solid #282828;

// &:hover,
// &:focus{
//     color: #08fdd8;
// }
// &:active{
//     color: #08fdd8;
//}
// `;

// const Work = styled.div`
//     text-align: center;
//     width: 100%;
//     display: block;
//     font-size: 1.3rem;
//     color: #909096;
//     line-height: 3.2rem;
//     border-bottom: 1px solid #282828;

// &:hover,
// &:focus{
//     color: #08fdd8;
// }
// &:active{
//     color: #08fdd8;
// }
// `;

// const Contact = styled.div`
// text-align: center;
//     width: 100%;
//     display: block;
//     font-size: 1.3rem;
//     color: #909096;
//     line-height: 3.2rem;
//     border-bottom: 1px solid #282828;

// &:hover,
// &:focus{
//     color: #08fdd8;
// }
// &:active{
//     color: #08fdd8;
// }
// `;


function Main () {
    return(
        <>
        
        <div className='maincontainer'>

            <div className='leftspace'>
                <h1>Main</h1>
                <h1>Main</h1>
                <h1>Main</h1>
                <h1>Main</h1>
                <h1>Main</h1>
                <h1>Main</h1>
            </div>

            <div className='navbariright'>
                <Navbar />
            </div>

            
        </div>

        </>
    )
}

export default Main;