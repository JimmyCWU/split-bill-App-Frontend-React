import React from "react";
import { useState } from "react";
import "../../css/admin/AdminButton.css";
import axios from "axios";
import { ip_address } from "../../env/env.js";

const AdminShowAllMembers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const api = `http://${ip_address}/bill-service/api/bill/add`;

  const handleSubmit = (e) => {
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    console.log(token);
    const now = new Date();
    const date = JSON.stringify(now);
    axios
      .post(
        api,
        {

        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("ok");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <button className="btn" onClick={handleShow}>
        Show All Members
      </button>

    </div>
  );


}
export default AdminShowAllMembers;