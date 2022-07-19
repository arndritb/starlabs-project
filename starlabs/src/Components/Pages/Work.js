import React from "react";
import '../Pages/Css/Work.css';


export const Work = () => {
    return(
        <div className="workbox">

            <h1 className='helloja'>My repositories</h1>
            <div className="innerworkbox">
                    

                <div className="timeline-area">
                    <div className='divi'>

                        <div
                            onClick={() => {
                                window.open("https://github.com/arndritb", "_blank")
                            }}
                        >
                            <h2 className='projectname'>arndritb.dev</h2>
                        </div>
                        <h3>my portfolio;</h3>
                        <span className='htmldot'></span><span className='language'>HTML</span>
                    </div>



                    <div className='divi'>
                        
                        <div 
                            onClick={() => {
                                window.open("https://github.com/arndritb/tenziesgame", "_blank")
                            }}
                        >
                            <h2 className='projectname'>Tenzie-Game</h2>
                        </div>

                        <h3>Game about rolling a dice</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>

                    <div className='divi'>
                        
                        <div
                            onClick={() => {
                                window.open("https://github.com/arndritb/portfolio-animation", "_blank")
                            }}
                        >
                            <h2 className='projectname'>Portfolio</h2>
                        </div>

                        <h3>Portfolio with animations</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>
                </div>

                
                <div className="timeline-area">
                    <div className='divi'>

                        <div
                            onClick={() => {
                                window.open("https://github.com/arndritb", "_blank")
                            }}
                        >
                            <h2 className='projectname'>arndritb.dev</h2>
                        </div>
                        <h3>my portfolio;</h3>
                        <span className='htmldot'></span><span className='language'>HTML</span>
                    </div>



                    <div className='divi'>
                        
                        <div 
                            onClick={() => {
                                window.open("https://github.com/arndritb/tenziesgame", "_blank")
                            }}
                        >
                            <h2 className='projectname'>Tenzie-Game</h2>
                        </div>

                        <h3>Game about rolling a dice</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>

                    <div className='divi'>
                        
                        <div
                            onClick={() => {
                                window.open("https://github.com/arndritb/portfolio-animation", "_blank")
                            }}
                        >
                            <h2 className='projectname'>Portfolio</h2>
                        </div>

                        <h3>Portfolio with animations</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>
                </div>

                

            </div>

        </div>
    )
}

export default Work;