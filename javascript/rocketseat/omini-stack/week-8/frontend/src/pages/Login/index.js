import React, { useState } from "react";
import "./styles.css";
import api from "../../services/api";

// import logo from "../../assets/img/tinder.png";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      username
    });
    const { _id } = response.data;
    history.push(`/dev/${_id}`);
    console.log(_id);
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        {/* <img src={logo} alt="logo" /> */}
        <input
          type="text"
          placeholder="usuario no github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
