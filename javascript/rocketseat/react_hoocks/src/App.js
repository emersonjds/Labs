import React, { useState, useEffect } from 'react';

function App() {
  const [names, setName] = useState([]);
  const [newName, setNewName] = useState('');

  const addName = () => {
    setName([...names, newName]);
    setNewName('');
  };

  useEffect(() => {
    const dataNames = localStorage.getItem('names');
    if (dataNames) {
      setName(JSON.parse(dataNames));
    }
  }, []);

  //componentDidUpdate, execute all times when change value on names
  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  return (
    <>
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input value={newName} onChange={e => setNewName(e.target.value)} />
      <button type="button" onClick={addName}>
        Adicionar novo nome
      </button>
    </>
  );
}

export default App;
