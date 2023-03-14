import React from "react";
import { useState } from "react";
import "./AdminButton.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import AdminUsersData from "./AdminUsersData"

const AdminShowAllUsers = () =>{
  const [list, setList] = useState([]);
  const handleClose = () => setList(false);
  const handleShow = () => setList(true);
  const api = "http://192.168.1.150/user-service/api/user/admin/findAll";

  const handleSubmit = (e) => {
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    axios
      .get(api, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("ok");
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    return (
      <div>
        <button className="btn" onClick={handleSubmit}>
          Show All Users
        </button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Username</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data, index) => {
            return (
              <AdminUsersData
                key={index}
                userId={data.userId}
                username={data.username}
                name={data.name}
              />
            );
          })}
          </tbody>
        </Table>
      </div>
    );

    
}
export default AdminShowAllUsers;