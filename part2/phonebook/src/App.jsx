import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number : '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const filteredPersons =  (persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())))

  return (
    <div>
      <h2>Phonebook</h2>
      <div> <input value={newFilter} onChange={(event)=> setNewFilter(event.target.value)}/>
      </div>

      <h2>Add a new</h2>
      <form
      onSubmit={(event) => {event.preventDefault() 
      //prevent same name from being added with some
      if (persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
        return
      } 
      setPersons(persons.concat({ name : newName , number : newNumber }))
      setFilteredPersons(persons.concat({ name : newName , number : newNumber}))
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
        {filteredPersons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App