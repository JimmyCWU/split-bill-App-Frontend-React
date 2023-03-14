import React from "react";
import { useState } from "react";
import "./AdminButton.css";
import axios from "axios";

const AdminShowAllPartys = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const api = "http://192.168.1.150/party-service/api/party/add";

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
          Show All Partys
        </button>

      </div>
    );

    
}
export default AdminShowAllPartys;