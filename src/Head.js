import React from "react";
import "./Head.css";
import { useState } from "react";
import AddPartyPopup from "./AddPartyPopup.js";
import Login from "./Login";

const Head = () => {
   const [userName, setUserName] = useState("My App");
    
    return (
      <div className="Head">
        <Login />
        <div>
          <svg className="logo-box">
            <text x="50%" y="50%" fill="white" className="logo">
              Good Day, {userName}
            </text>
          </svg>
        </div>
        <AddPartyPopup />
      </div>
    );
}
export default Head;