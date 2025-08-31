import axios from 'axios'
import personService from '../services/person'

const PersonsForm = ({newName,newNumber,setNewName,setNewNumber,persons,setPersons}) => {
  const addNewPerson = (event) => {
    event.preventDefault() 
    //prevent same name from being added with some
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const personToUpdate = persons.find(person => person.name === newName)
        const updatedPerson = {...personToUpdate, number: newNumber}
        personService.updatePerson(personToUpdate.id, updatedPerson).then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        }).catch(error => {
          alert(`the person '${newName}' was already deleted from server`)
          setPersons(persons.filter(person => person.id !== personToUpdate.id))
        })

      }
      return
    } 
    
    //call the backend to add the new person
    personService.addPerson(newName, newNumber).then(addedPerson => {
      setPersons(persons.concat(addedPerson))
      setNewName('')
      setNewNumber('')
    }
    )
  }

    return (
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
          number : <input value={newNumber} onChange={(event)=> setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
  }


export default PersonsForm;