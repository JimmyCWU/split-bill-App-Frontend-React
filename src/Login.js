import React from "react";
import "./Login.css";
import { useState } from "react";
import LoginForm from "./Login"


const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <div>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          login
        </button>
        <LoginForm setModalOpen={modalOpen} />
      </div>
    );
}
export default Login;