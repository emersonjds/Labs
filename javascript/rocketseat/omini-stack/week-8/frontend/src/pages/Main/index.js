import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import api from "../../services/api";
import { FiHeart, FiX } from "react-icons/fi";

// import { Container } from './styles';
import "./styles.css";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });

      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      // when to do a connection, query params are send to server
      query: {
        user: match.params.id
      }
    });
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`devs/${id}/likes`, null, {
      headers: {
        user: match.params.id
      }
    });
    setUsers(users.filter(user => user._id !== id));
  }
  async function handleDesLike(id) {
    await api.post(`devs/${id}/deslikes`, null, {
      headers: {
        user: match.params.id
      }
    });
    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      {users.length ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDesLike(user._id)}>
                  <FiX
                    size={26}
                    color="#FF5864
"
                  />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <FiHeart size={26} color="#1CE8A9" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou :( </div>
      )}
    </div>
  );
}
