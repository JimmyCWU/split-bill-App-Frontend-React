import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Expense.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ExpenseItem from "./ExpenseItem";

const Expense = () =>{
    const [result, setResult] = useState('');
    const [partyId,setPartyId] = useState('');
    const [list,setList] = useState([]);
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmR5dXNlciIsImlhdCI6MTY3NTkzMDk0OSwiZXhwIjoxNjc1OTMyNzQ5fQ.LWmRxc88XonKM6hAlvf7pYDsDSYRz3p9BHWrfXaYZnU";
    const api = `http://192.168.1.150/api/bill/2`;
    React.useEffect(() => {
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
        });},[]);
    return (
      <div>
        <div className="expenses">
          {list.map((data, index) => {
            return (
              <ExpenseItem
                key={index}
                billName={data.billName}
                totoalAmount={data.totalAmount}
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
