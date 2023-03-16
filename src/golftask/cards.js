import React from "react";

export default function Cards(){
    return(
        <>
        <div class="grid">
            <div class="card">
                <div className="card-img">
                    <img src="/images/truck.png"/>
                </div>
                    <p>Regular<br></br>Competation</p>
            </div>  
            <div class="card">
                <div className="card-img">
                    <img src="/images/flag.png"/>
                </div>
                    <p>Highly Quality<br></br>Equipment</p>
            </div>  
            <div class="card">
                <div className="card-img">
                    <img src="/images/tshirt.png"/>
                </div>
                    <p>Qualified<br></br>Instructor</p>
            </div>  
            <div class="card">
                <div className="card-img">
                    <img src="/images/grnd.png"/>
                </div>
                    <p>18 holes<br></br>Golf Course</p>
            </div>  
        </div>      
    </>
    )

}