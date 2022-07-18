import React from "react";
import './Skills.css';
import data from '../Assets/Data/data'

// import image from '../Assets/Images'


export const Skills = (props) => {
    return(
         <div className="container">
             <div className="innerboxi">
                <div className="skillsbox">
                    <h1 className="skills">skills</h1>
                </div>
                    <br></br>
                <div className="using"><h1>Using now: </h1></div>
                <div class="innercontainer">  

                    <div className="card">
                        <img 
                            src={`../images/${props.coverImg}`}
                            className='card--image' 
                        />
                        <p>{props.name}</p>
                    </div>


                    {/* <div><img src={atom} alt='Atom' className="react" /><h1>React</h1></div>
                    <div><img src={atom} alt='Atom' className="reac" /></div> 
                    <div><img src={atom} alt='Atom' className="rea" /></div> 
                    <div>3</div>  
                    <div>4</div>  
                    <div>5</div>  
                    <div>6</div>  
                    <div>1</div>  
                    <div>2</div>   */}
                </div>


                {/* <div className="learning"><h1>Learning:</h1></div>
                <div class="innercontainer">  
                    <div>2</div>  
                    <div>3</div>  
                    <div>4</div>  
                    <div>5</div>  
                    <div>6</div>  
                    <div>1</div>  
                    <div>2</div>  
                </div>
                <div className="other"><h1>Other skills:</h1></div>
                <div class="innercontainer">  
                    <div>2</div>  
                    <div>3</div>  
                    <div>4</div>  
                    <div>5</div>  
                    <div>6</div>  
                    <div>1</div>  
                    <div>2</div>  
                </div> */}
             </div>
         </div>


    )
}

export default Skills;