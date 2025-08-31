import axios from 'axios';

const Persons = ({ persons,setPersons }) => {

    const handleDelete = (name) => {
        if (window.confirm(`Delete ${name} ?`)) {
            //deletion confirmed use axios to delete the person with the id 
            const id = persons.find(person => person.name === name).id
            console.log("deleting person with id: ", id)
            axios.delete(`http://localhost:3001/persons/${id}`).then(()=>setPersons(persons.filter(person => person.id !== id) ))

    }
    }

    return (
        <ul>
        {persons.map((person, index) => (
            <li key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.name)}>delete</button>
            </li>
        ))}
        </ul>
    );
    }

export default Persons;