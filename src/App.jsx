import React, { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'




const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  
  

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} />
      
      <h3>add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons}/>
      
      <h2>Numbers</h2>

      <Persons persons = {persons}/>
      
      
    </div>
  )
}

export default App
