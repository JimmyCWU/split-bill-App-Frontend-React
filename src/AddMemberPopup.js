import React from "react";
import { useState } from "react";
import "./AddPartyPopup.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddMemberPopup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [userIdList, setUserIdList] = useState([]);
  const [dynamicUserIdList, setDynamicUserIdList] = useState([]);
  const { partyId } = props;
  const api = "http://192.168.1.150/member-service/api/member/addMembers";
  const apiForSearch = `http://192.168.1.150/user-service/api/user/search/${username}`;

  const handleSearch = (e) => {
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    console.log(token);
    const now = new Date();
    const date = JSON.stringify(now);
    axios
      .get(apiForSearch, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
         if (res.data !== "") {
           dynamicUserIdList.push(res.data.userId);
           setDynamicUserIdList(dynamicUserIdList);
           alert("Valid user");
         }else{
           alert("Invalid user");
         };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    setUserIdList(dynamicUserIdList);
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    console.log(token);
    const now = new Date();
    const date = JSON.stringify(now);
    axios
      .post(
        api,
        {
          partyId: partyId,
          userIdList: userIdList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert("Add the member successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button className="btn" onClick={handleShow}>
        Add Members
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Members</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          </Form>
          <button onClick={handleSearch}>search</button>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleSubmit}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddMemberPopup;
