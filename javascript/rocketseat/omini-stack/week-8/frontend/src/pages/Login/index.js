import React from "react";
import "./styles.css";

// import logo from "../../assets/img/tinder.png";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        {/* <img src={logo} alt="logo" /> */}
        <input type="text" placeholder="Digite seu usuario no github" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
