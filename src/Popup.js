import React from "react";
import "./App.js";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Popup(props) {
  const [num, setNum] = useState('');
  const api = "https://randomuser.me/api/";
  function inform(){
    axios.get(api)
        .then(res => {
          console.log(res.data.results[0].gender);
          setNum(res.data);
        })
        .catch(err => {
          //console.log(err);
          console.log(err.response);
        });
  }
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setButtonPop(false)}>
          close
        </button>
        <h3>My Popup</h3>
        <button onClick={inform}>api</button>
        <div>{num.map(item => <div>.results[0].gender</div>)}</div>
      </div>
    </div>
  ) : (
    ""
  );
}
