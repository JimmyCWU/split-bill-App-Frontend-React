import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./AddBill.css";
import AddBillWhoNeedToPay from "./AddBillWhoNeedToPay";

const AddBill = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    const [name, setName] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [expense, setExpense] = useState('');
    const [income,setIncome] = useState('');
    const [billName, setBillName] = useState('');
    const [billType, setBillType] = useState('');
    const [WhoNeedtoPayinputList, setInputList] = useState([
      { name: "", cost: "" },
    ]);

    const[WhoPaytheBillInputList, setWhoPaytheBillInputList] = useState([ 
      { name: "", cost: "" },
    ]);

    const [WhoPayinputlist, setWhoPayList] = useState([{ name: "", cost: "" }]);
    const handldeSubmit = () => {
       const api = `http://192.168.1.150/bill-service/api/bill/add`;
       axios
         .post(api, 
        {
          billName:billName,
          totalAmount: totalAmount,
          memberIdMap:WhoNeedtoPayinputList,
          billType:billType
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
           console.log();
         });

    }
    ////// below functions are "who need to pay"
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...WhoNeedtoPayinputList];
      list[index][name] = value;
      setInputList(list);
    };

    const handleAddClick = () => {
       setInputList([...WhoNeedtoPayinputList, { name: "", cost: "" }]);
    }

    const handleRemoveClick = (index) => {
      const list = [...WhoNeedtoPayinputList];
      list.splice(index, 1);
      setInputList(list);
    };
/////// below functions are " Who pay the bill"
    const handleBillInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...WhoPaytheBillInputList];
        list[index][name] = value;
        setWhoPaytheBillInputList(list);
    };
    const handleBillAddClick = () => {
       setWhoPaytheBillInputList([...WhoPaytheBillInputList, { name: "", cost: "" }]);
    }

    const handleBillRemoveClick = (index) => {
      const list = [...WhoPaytheBillInputList];
      list.splice(index, 1);
      setWhoPaytheBillInputList(list);
    };

  ////below function is "bill type"
    const handleBillType = (e) => {
        setBillType(e.target.value);
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
                    <input name="BillName" placeholder="BillName" onChange={(e) => setBillName(e.target.value)}></input>
                  </div>
                  <div className="input-box">
                    <input
                      name="Total Amount"
                      placeholder="Total Amount"
                      onChange={(e) => setTotalAmount(e.target.value)}
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
                      onChange={handleBillType}
                    ></input>
                  </div>
                  <div>
                    <label for="Transfer">Transfer</label>
                    <input
                      type="radio"
                      id="Transfer"
                      value="0"
                      name="billType"
                      onChange={handleBillType}
                    ></input>
                  </div>
                  <div>
                    <label for="GoDutch">GoDutch</label>
                    <input
                      type="radio"
                      id="GoDutch"
                      value="2"
                      name="billType"
                      onChange={handleBillType}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <div className="label-box">
                  <h3>who needs to pay</h3>
                </div>
                {WhoNeedtoPayinputList.map((x, i) => {
                  return (
                    <div className="bill-Type-box">
                      <input
                        name="name"
                        value={x.name}
                        placeholder="Username"
                        onChange={(e) => handleInputChange(e, i)}
                      />
                      <input
                        name="cost"
                        value={x.cost}
                        placeholder="Cost"
                        onChange={(e) => handleInputChange(e, i)}
                      />
                      <div>
                        {WhoNeedtoPayinputList.length !== 1 && (
                          <button
                            className="mr10"
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove
                          </button>
                        )}
                        {WhoNeedtoPayinputList.length - 1 === i && (
                          <button type="button" onClick={handleAddClick}>
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="input-box">
                <div className="label-box">
                  <h3>who pay the bill</h3>
                </div>
                <div>
                  {WhoPaytheBillInputList.map((x, i) => {
                    return (
                      <div className="bill-Type-box">
                        <input
                          name="name"
                          value={x.name}
                          placeholder="Username"
                          onChange={(e) => handleBillInputChange(e, i)}
                        />
                        <input
                          name="cost"
                          value={x.cost}
                          placeholder="Cost"
                          onChange={(e) => handleBillInputChange(e, i)}
                        />
                        <div>
                          {WhoPaytheBillInputList.length !== 1 && (
                            <button
                              onClick={() => handleBillRemoveClick(i)}
                            >
                              Remove
                            </button>
                          )}
                          {WhoPaytheBillInputList.length - 1 === i && (
                            <button type="button" onClick={handleBillAddClick}>
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })} 
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