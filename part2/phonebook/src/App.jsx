import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number : '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form
      onSubmit={(event) => {event.preventDefault() 
      //prevent same name from being added with some
      if (persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
        return
      } 
      setPersons(persons.concat({ name : newName , number : newNumber }))
      setNewName('')
      setNewNumber('')}}>

        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
          number : <input value={newNumber} onChange={(event)=> setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App