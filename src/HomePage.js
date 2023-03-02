import React from "react";
import "./App.css";
import Expense from "./Expense";
import Head from "./Head";
import ShowParty from "./ShowParty";

function HomePage() {
  return (
    <div>
      <Head />
      <ShowParty />
    </div>
  );
}

export default HomePage;
