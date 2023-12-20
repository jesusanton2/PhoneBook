import React, { useState } from 'react';


const Filter = ({persons}) => {
    const [ filter , setFilter] = useState('')
  
    const handleFilterChange = (event) =>{
      console.log(event.target.value)
      setFilter(event.target.value)
    
    }
    const findPerson = (event) =>{
      event.preventDefault()
  
      const filterFind = filter.toLowerCase() //Varaible filterFind guarda la palbara ingresada, ignora minisculas y mayu.
  
      const findPersons = persons.filter(person => person.name.toLowerCase().includes(filterFind))
  
      if(findPersons.length > 0){
        const names = findPersons.map(person => person.name).join(', ')
        alert(`${names}`)
      }else{
        alert(`This person isnt in the phonebook `)
      }
  
  
     
    }
  
    
  
    return(
       <div> filter shown with <input value={filter} onChange={handleFilterChange} />
       <button type='button' onClick={findPerson}>find</button>  </div>
  
    )
  
  }


export default Filter