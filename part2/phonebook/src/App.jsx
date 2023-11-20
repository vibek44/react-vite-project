import { useState } from 'react'


const  App=()=> {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])


  const handleSubmit=(e)=>{
    e.preventDefault()
   console.log(e.target);
  }

  return (
     <div>
        <h2>Phonebook</h2> 
        <form onSubmit={handleSubmit}>
          <input type="text"/>
          <button type='submit'>submit</button>
        </form>
        <h2>Contact</h2>
        {persons.map(person=><p key={person.name}>{person.name}</p>)}
     </div>
  )
}

export default App
