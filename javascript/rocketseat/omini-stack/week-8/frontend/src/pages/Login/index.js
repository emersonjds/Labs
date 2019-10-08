import React from "react";
import "./styles.css";

import logo from "../../assets/img/tinder.png";

export default function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
