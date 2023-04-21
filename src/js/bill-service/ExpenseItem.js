import { useState } from "react";
import "./Expense";
import "../../css/bill-service/ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import BillDetail from "./BillDetail.js";

const ExpenseItem = (props) => {
  //const [billName, setBillName] = useState('');
  //const [totalAmount, setTotalAmount] = useState(props.amountAmount);
  //const[memberId,setMemberId] = useState(props.memberId);
  const { billName, totalAmount, billId, createTime } = props;
  //const [partyId, setPartyId] = useState(props.partyId);
  return (
    <div>
      <div className="expense-party">
        <ExpenseDate createTime={createTime} />
        <div className="expense-name">
          <h3>{billName}</h3>
        </div>
        <h3>$ {totalAmount}</h3>
        <BillDetail totalAmount={totalAmount} />
      </div>
    </div>
  );
}
export default ExpenseItem;