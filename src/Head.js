import React from "react";
import "./Head.css";

const Head = () => {

    return (
      <div className="Head">
        <div> 
        <svg className="logo-box" >
            <text x="50%" y="50%" fill="white" className="logo">Good Day, My App</text>
        </svg>
        </div>
        <button className="btn">Add Party</button>
      </div>
    );
}
export default Head;