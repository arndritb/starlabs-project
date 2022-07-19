import React from "react";
import Records from '../Assets/records.json';

export const Data = () => {
    return(
        <div className="App">
        <h1 style={{paddingLeft: '30%', paddingTop: '50px', paddingBottom: '50px'}}>Here we fetch data from a .json file to complete backend challenge</h1>
        {/* Fetching data from a .json file "to complete backend challenge"
        <br></br> */}

        {
            //this is to check if we have data to map
            Records && Records.map(record => {
                return(
                    <div style={{paddingLeft: '50%'}} className="boxx" key={record.id}>
                        
                        
                        <strong>{record.title}</strong>
                        <br></br>
                        {record.content}
                        <br></br>
                        { record.tech && record.tech.map(data =>{
                            return(
                                <div key={record.id}>
                                    -- {data.name} -- 
                                </div>
                            )
                        })

                        }
                        <br></br>
                        <br></br>
                    </div>
                )
            })
        }

        </div>
    )
}
export default Data;