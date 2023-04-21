import React, { useState } from "react";
import axios from "axios";
import Expense from "../../js/bill-service/Expense";
import AddBill from "../../js/bill-service/AddBill";
import AddMemberPopup from "../../js/member-service/AddMemberPopup";
import '../../css/party-service/PartyDetail.css';
import ShowUserInParty from './ShowUserInParty';

const PartyDetail = (props) => {
  const { partyName, partyId } = props

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