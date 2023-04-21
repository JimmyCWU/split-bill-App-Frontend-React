import React from "react";
import "./css/Head.css";
import AddPartyPopup from "./js/party-service/AddPartyPopup.js";

const Head = () => {
  const getUsername = localStorage.getItem("username");
  const showName = JSON.parse(getUsername);
  return (
    <div className="Head">
      <div>
        <h1 className="Head-Wellcome">{showName}</h1>
      </div>
      <div className="add-party-button">
        <AddPartyPopup />
      </div>
    </div>
  );
}
export default Head;