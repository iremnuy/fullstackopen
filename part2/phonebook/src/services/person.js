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

const updatePerson = (id, updatedPerson, setNotification) => {
 return (axios.put(`${baseUrl}/${id}`, updatedPerson)
      .then(response => {
        console.log('Response from server:', response)
        return response.data
      }).then(data => {
        console.log('Data received:', data)
        return data
      })
      .catch(error => {
        //notification 
        setNotification({message:`Information of ${updatedPerson.name} has already been removed from server`, type: 'error'})
        setTimeout(() => {
          setNotification({message:null,type:null})
        }, 5000)
        console.log('There was an error!', error)
      }))   

}

export default { addPerson, updatePerson }



