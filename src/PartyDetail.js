import React, { useState } from "react";
import axios from "axios";
import Expense from "./Expense";
import AddMemberPopup from "./AddMemberPopup"

const PartyDetail = (props) =>{
    const {partyName, partyId} = props
  
    return (
      <div className="expenses">
        <h2>Party Name : {partyName}</h2>
        <button>Add A Bill</button>
        <AddMemberPopup partyId={partyId}/>
        <Expense />
      </div>
    );

}
export default PartyDetail;