import React from "react";
import "./smallcard.css"

const SmallCard=(props)=>{

    return (
      <div className="SmallCard">
        <button onClick={props.funk}>
          <div className="Small_logo">
            <span>{props.logo}</span>
          </div>
          <div className="topic">
            <p>{props.topic}</p>
          </div>
        </button>
      </div>
    );

}


export default SmallCard;