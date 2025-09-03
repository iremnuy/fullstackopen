import { useState } from 'react'
import CountrySummary from './components/CountrySummary'
import CountryDetail from './components/CountryDetail'

function App() {
  //get the countires data from the restcountries api
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    fetch(`https://restcountries.com/v3.1/name/${event.target.value}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          console.log("data is" , data)
          setCountries(data)
        } else {
          setCountries([])
        }
      }).
      catch(error => {
        console.error('Error fetching countries:', error)
        setCountries([])
      })
  }

  console.log("countries are" , countries)

  const filteredCountries = countries.filter((country) =>
  country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  )
  

  return (
    <div>
      <div>
        find countries <input value={newFilter} onChange={handleFilterChange} /> 
      </div>
      <div>
        {filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length === 1 ? (
          <CountryDetail country={filteredCountries[0]} />
        ) : (
          filteredCountries.map((country) => (
            <CountrySummary key={country.cca3} country={country} setNewFilter={setNewFilter} />
            
          ))
        )}
      </div>
    </div>
  )

  



}

export default App
