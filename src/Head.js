import React from "react";
import "./Head.css";
import { useState } from "react";
import AddPartyPopup from "./AddPartyPopup.js";
import Login from "./Login";

const Head = () => {
   const [userName, setUserName] = useState('My App');
  
    return (
      <div className="Head">
        <div>
          <div className="neon">
            <span style={{ color: "#2ecce0" }}>A</span>
            <span style={{ color: "#fccf31" }}>P</span>
            <span style={{ color: "#fa7c49" }}>P</span>
          </div>
        </div>
        <AddPartyPopup />
      </div>
    );
}
export default Head;