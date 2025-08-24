
const Persons = ({ persons }) => {
    return (
        <ul>
        {persons.map((person, index) => (
            <div key={person.name}>
            {person.name} {person.number}
            </div>
        ))}
        </ul>
    );
    }

export default Persons;