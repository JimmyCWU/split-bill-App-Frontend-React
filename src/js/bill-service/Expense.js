import React from "react";
import axios from "axios";
import { useState } from "react";
import "../../css/bill-service/Expense.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ExpenseItem from "./ExpenseItem";
import { ip_address } from "../../env/env.js";


const Expense = () => {
  const [result, setResult] = useState("");
  const [partyId, setPartyId] = useState("");
  const [list, setList] = useState([]);
  const token = '';
  const api = `http://${ip_address}/bill-service/api/bill/2`;
  React.useEffect(() => {
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    console.log(token);
    axios
      .get(api, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      //console.log(res.data.results[0].gender)
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="expenses">
        {list.map((data, index) => {
          return (
            <ExpenseItem
              key={index}
              billName={data.billName}
              totalAmount={data.totalAmount}
              billId={data.billId}
              createTime={data.createTime}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Expense;
