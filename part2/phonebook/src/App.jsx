import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number : '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const filteredPersons =  (persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())))

  useEffect(() => {
    console.log('Effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
    console.log('Promise fulfilled')
    setPersons(response.data)
    })
  })
    

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>Add a new</h2>
      <PersonsForm newName={newName} newNumber={newNumber}  setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}> </Persons>
    </div>
  )
}

export default App