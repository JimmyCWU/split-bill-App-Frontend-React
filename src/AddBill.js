import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./AddBill.css";
import AddBillWhoNeedToPay from "./AddBillWhoNeedToPay";

const AddBill = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [expense, setExpense] = useState('');
    const [income,setIncome] = useState('');
    const [inputList, setInputList] = useState([
      { name: "", cost: "" },
    ]);
    const handldeSubmit = () => {
       const api = `http://192.168.1.150/bill-service/api/bill/add`;
       axios
         .post(api, {

         })
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
           console.log();
         });

    }

    const handleAddClick = () => {
       setInputList([...inputList, { name: "", cost: "" }]);
    }
    return (
      <div>
        <button className="btn" onClick={handleShow}>
          Add A Bill
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add A Bill</Modal.Title>
          </Modal.Header>
          <form>
            <div>
              <div className="input-box">
                <div className="label-box">
                  <h3>Bill Details</h3>
                </div>
                <div className="input-area">
                  <div className="input-box">
                    <input name="BillName" placeholder="BillName"></input>
                  </div>
                  <div className="input-box">
                    <input
                      name="Total Amount"
                      placeholder="Total Amount"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <div className="label-box">
                  <h3>Bill Type</h3>
                </div>
                <div className="bill-Type-box">
                  <div>
                    <label for="AA">AA</label>
                    <input
                      type="radio"
                      id="AA"
                      value="1"
                      name="billType"
                    ></input>
                  </div>
                  <div>
                    <label for="Transfer">Transfer</label>
                    <input
                      type="radio"
                      id="Transfer"
                      value="0"
                      name="billType"
                    ></input>
                  </div>
                  <div>
                    <label for="GoDutch">GoDutch</label>
                    <input
                      type="radio"
                      id="GoDutch"
                      value="2"
                      name="billType"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <div className="label-box">
                  <h3>who needs to pay</h3>
                </div>
                <div className="input-area">
                  <input placeholder="name"></input>
                  <input placeholder="cost"></input>
                  <button onClick={handleAddClick}>add</button>
                </div>
              </div>
              <div className="input-box">
                <div className="label-box">
                  <h3>who pay the bill</h3>
                </div>
                <div className="input-area">
                  <input placeholder="name"></input>
                  <input placeholder="cost"></input>
                  <button>add</button>
                </div>
              </div>
            </div>
          </form>
          <Modal.Footer>
            <button onClick={handldeSubmit}>Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );

}
export default AddBill;