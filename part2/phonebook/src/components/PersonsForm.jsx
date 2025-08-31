import axios from 'axios'
import personService from '../services/person'

const PersonsForm = ({newName,newNumber,setNewName,setNewNumber,persons,setPersons}) => {
  const addNewPerson = (event) => {
    event.preventDefault() 
    //prevent same name from being added with some
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
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