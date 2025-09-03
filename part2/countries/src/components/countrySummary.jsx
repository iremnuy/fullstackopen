
const CountrySummary = ({ country, setNewFilter}) => {
    return (
        <div>
        {country.name.common} 
        <button onClick={() => setNewFilter(country.name.common)}>show</button>
        </div>
    )
    }

export default CountrySummary;