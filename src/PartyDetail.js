import React, { useState } from "react";
import axios from "axios";
import Expense from "./Expense";

const PartyDetail = (props) =>{
    const {partyName} = props
  
    return (
      <div className="expenses">
        <h2>Party Name : {partyName}</h2>
        <button>Add A Bill</button>
        <Expense />
      </div>
    );

}
export default PartyDetail;