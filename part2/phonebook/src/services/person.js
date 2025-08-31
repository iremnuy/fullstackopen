import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const addPerson = (newName, newNumber) => {
 return (axios.post(baseUrl, { name : newName , number : newNumber })
      .then(response => {
        console.log('Response from server:', response)
        return response.data
      }).then(data => {
        console.log('Data received:', data)
        return data
      })
      .catch(error => {
        console.error('There was an error!', error);
      }))   

}

export default { addPerson }



