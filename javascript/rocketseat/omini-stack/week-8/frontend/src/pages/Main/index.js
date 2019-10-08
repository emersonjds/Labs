import React, { useEffect, useState } from "react";
import api from "../../services/api";

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
                  Core
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  Core
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
