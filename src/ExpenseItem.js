import { useState } from "react";
import "./Expense";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) =>{
    //const [billName, setBillName] = useState('');
    //const [totalAmount, setTotalAmount] = useState(props.amountAmount);
    //const[memberId,setMemberId] = useState(props.memberId);
      const {billName,totoalAmount,billId,createTime } = props;
      //const [partyId, setPartyId] = useState(props.partyId);
    return (
      <div>
        <div className="expense-party">
          <ExpenseDate createTime={createTime} />
          <div className="expense-name">
            <h3>{billName}</h3>
          </div>
          <h3>$ {totoalAmount}</h3>
        </div>
      </div>
    );
}
export default ExpenseItem;