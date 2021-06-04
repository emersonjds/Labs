import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [names, setName] = useState([]);
  const [newName, setNewName] = useState('');

  const addName = useCallback(() => {
    setName([...names, newName]);
    setNewName('');
  }, [newName, names]);

  //componentDidMount, simulate that operation when a component it's started
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

  //We use "useMemo" to calculate anything that involves change in internal variables declared with useState,
  //so , when the variable tech to change the value, useMemo is involked
  const nameSize = useMemo(() => names.length, [names]);

  return (
    <>
      <h4>
        Understanding Hooks
      </h4>
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <br />
      <h4>Voce tem {nameSize} tecnologias cadastradas</h4>
      <input value={newName} onChange={e => setNewName(e.target.value)} />
      <button type="button" onClick={addName}>
        Adicionar novo nome
      </button>
    </>
  );
}

export default App;
