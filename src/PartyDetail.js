import React, { useState } from "react";
import axios from "axios";
import Expense from "./Expense";
import AddBill from "./AddBill";
import AddMemberPopup from "./AddMemberPopup";
import './PartyDetail.css';

const PartyDetail = (props) =>{
    const {partyName, partyId} = props
  
    return (
      <div className="expenses">
        <div className="party-top-area">
          <h2>Party Name : {partyName}</h2>
          <AddBill />
          <AddMemberPopup />
        </div>
        <Expense />
      </div>
    );

}
export default PartyDetail;