import React from "react";
import "./Head.css";
import { useState } from "react";
import AddPartyPopup from "./AddPartyPopup.js";


const Head = () => {
  const [ButtonPop, setButtonPop] = useState(false);


    return (
      <div className="Head">
        <div>
          <svg className="logo-box">
            <text x="50%" y="50%" fill="white" className="logo">
              Good Day, My App
            </text>
          </svg>
        </div>
        <button className="btn" onClick={() => setButtonPop(true)}>
          Add Party
        </button>
        <AddPartyPopup trigger={ButtonPop} setButtonPop={setButtonPop} />
      </div>
    );
}
export default Head;