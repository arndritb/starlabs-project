import React from "react";
import './Work.css'


export const Work = () => {
    return(
        <div className="workbox">

            <h1 className='helloja'>My repositories</h1>
            <div className="innerworkbox">
                    

                <div className="timeline-area">
                    <div className='divi'>
                        <h2 className='projectname'>arndritb.dev</h2>
                        <h3>my portfolio;</h3>
                        <span className='htmldot'></span><span className='language'>HTML</span>
                    </div>

                    <div className='divi'>
                        <h2 className='projectname'>Tenzie-Game</h2>
                        <h3>Game about rolling a dice</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>

                    <div className='divi'>
                        <h2 className='projectname'>Portfolio</h2>
                        <h3>Portfolio with animations</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>
                </div>

                
                <div className="timeline-area">
                    <div className='divi'>
                        <h2 className='projectname'>arndritb.dev</h2>
                        <h3>my portfolio;</h3>
                        <span className='htmldot'></span><span className='language'>HTML</span>
                    </div>

                    <div className='divi'>
                        <h2 className='projectname'>Tenzie-Game</h2>
                        <h3>Game about rolling a dice</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>

                    <div className='divi'>
                        <h2 className='projectname'>Portfolio</h2>
                        <h3>Portfolio with animations</h3>
                        <span className='jsdot' ></span><span>JavaScript</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Work;