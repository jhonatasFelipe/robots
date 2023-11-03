import React from "react";


const Card  = ({ robot })=>{
    return <div className="card">
         <h3>{robot.first_name}</h3>
         <img src={robot.avatar}/>
    </div>
}

export default Card;