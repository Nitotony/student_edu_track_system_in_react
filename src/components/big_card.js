import React from "react";
import "./big_card.css"
const BigCard=(props)=>{

    
    return (
      <div className="BigCard" style={{backgroundColor:props.background}}>
        <div className="Logo_Big">
          <span className="Logo_Big_spec">{props.logo}</span>
        </div>
        <div className="BigDetails">
          <div className="Big_count">
            <h4>{props.count}</h4>
          </div>
          <div className="Big_title">
            <p>{props.title}</p>
          </div>
        </div>
      </div>


    );


}
export default BigCard;