import React, { useState } from "react";
import axios from "axios";
import Expense from "./Expense";
import AddBill from "./AddBill";
import AddMembers from "./AddMembers";
import './PartyDetail.css';

const PartyDetail = (props) =>{
    const {partyName} = props
  
    return (
      <div className="expenses">
        <div className="part-addBill-box">
          <h2 className="show-party-name">Party Name :{partyName}</h2>
          <AddBill />
          <AddMembers />
        </div>
        <Expense />
      </div>
    );

}
export default PartyDetail;