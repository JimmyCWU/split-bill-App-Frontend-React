import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./HomePage";
import WelcomePage from "./WelcomePage";
import AdminPage from "./AdminPage";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/HomePage" element={<HomePage />}/>
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
  );
}

export default App;
