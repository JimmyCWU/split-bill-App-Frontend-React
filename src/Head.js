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
          <h1 className="Head-Wellcome">Welcome</h1>
        </div>
        <div className="add-party-button">
          <AddPartyPopup />
        </div>
      </div>
    );
}
export default Head;