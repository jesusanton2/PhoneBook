import React, { useState } from 'react';

const PersonForm = ({persons , setPersons}) => {
    const [ newName , setNewName ] = useState('')
    const [ newNum , setNewNum] = useState('')

    const addPerson = (event) =>{
      event.preventDefault()
      const newPerson ={ name:newName , number: newNum }
     
      if(persons.find(person => person.name === newName)){
  
    
        alert(`${newName} is already added to phonebook`);
  
      }else{
  
        setPersons(persons.concat(newPerson))
  
        setNewName('')
        setNewNum('')
      }
     
    
    }
  
    const handleNameChange = (event) =>{
      console.log(event.target.value)
      setNewName(event.target.value)
    
    }
    
    const handleNumberChange = (event) =>{
      console.log(event.target.value)
      setNewNum(event.target.value)
    
    }
  
     return(
      <form>
          
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNum} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit" onClick={addPerson}>add</button>
          </div>
        </form>
     )
     
  }
export default PersonForm