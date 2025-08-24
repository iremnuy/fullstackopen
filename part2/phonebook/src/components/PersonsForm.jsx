
const PersonsForm = ({newName,newNumber,setNewName,setNewNumber,persons,setPersons}) => {
  const addNewPerson = (event) => {
    event.preventDefault() 
    //prevent same name from being added with some
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    } 
    setPersons(persons.concat({ name : newName , number : newNumber }))
    setNewName('')
    setNewNumber('')
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