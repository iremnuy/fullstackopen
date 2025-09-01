import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import axios from 'axios'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number : '040-123456' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState({message: null, type: null})
  const filteredPersons =  (persons.filter((person) => person?.name?.toLowerCase().includes(newFilter.toLowerCase())))

  useEffect(() => {
    console.log('Effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
    console.log('Promise fulfilled')
    setPersons(response.data)
    }) 
  }, [] ) //run only once after the first render, then wait for another rerender from some other cause
    

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h2>Add a new</h2>
      <Notification notification={notification} />
      <PersonsForm newName={newName} newNumber={newNumber}  setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setNotification={setNotification}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} setPersons={setPersons} > </Persons>
    </div>
  )
}

export default App