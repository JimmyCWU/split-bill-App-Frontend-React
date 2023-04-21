import React from "react";
import "./css/App.css";
import Expense from "./js/bill-service/Expense";
import Head from "./Head";
import ShowParty from "./js/party-service/ShowParty";

function HomePage() {
  return (
    <div>
      <Head />
      <ShowParty />
    </div>
  );
}

export default HomePage;
