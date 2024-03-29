import React from "react";

import "../../css/bill-service/ExpenseDate.css";

const ExpenseDate = (props) => {
  const time = Date.parse(props.createTime);
  const da = new Date(time);
  const year = da.getFullYear();
  const month = da.getMonth();
  const date = da.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date-day">{date}</div>
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
