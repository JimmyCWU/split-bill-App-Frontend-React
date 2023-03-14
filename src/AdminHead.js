import React from "react";
import "./AdminHead.css";
import AdminShowAllUsers from "./AdminShowAllUsers.js";
import AdminShowAllPartys from "./AdminShowAllPartys.js";
import AdminShowAllMembers from "./AdminShowAllMembers.js";
import AdminShowAllBills from "./AdminShowAllBills.js";
import AdminShowAllBillDetails from "./AdminShowAllBillDetails.js";
import AdminShowAllNotifications from "./AdminShowAllNotifications.js";

const Head = () => {
    return (
      <div className="AdminHead">
        <div className="admin-button">
          <AdminShowAllUsers />
          {/* <AdminShowAllPartys />
          <AdminShowAllMembers />
          <AdminShowAllBills />
          <AdminShowAllBillDetails />
          <AdminShowAllNotifications /> */}
        </div>
        <div className="admin-button">
          <AdminShowAllPartys />
        </div>
        <div className="admin-button">
          <AdminShowAllMembers />
        </div>
        <div className="admin-button">
          <AdminShowAllBills />
        </div>
        <div className="admin-button">
          <AdminShowAllBillDetails />
        </div>
        <div className="admin-button">
          <AdminShowAllNotifications />
        </div>
      </div>
    );
}
export default Head;