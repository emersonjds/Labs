import React, { useState } from 'react'

function App() {
  const [names, setName] = useState(['Emerson', 'Maria', 'Jose'])
  const [newName, setNewName] = useState('')

  const addName = () => {
    setName([...names, newName])
    setNewName('')
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
  )
}

export default App
