import React from "react";
import "./Head.css";
import { useState } from "react";
import AddPartyPopup from "./AddPartyPopup.js";

const Head = () => {

    return (
      <div className="Head">
        <div>
          <svg className="logo-box">
            <text x="50%" y="50%" fill="white" className="logo">
              Good Day, My App
            </text>
          </svg>
        </div>
        <AddPartyPopup />
      </div>
    );
}
export default Head;