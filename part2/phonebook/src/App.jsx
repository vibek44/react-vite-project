import { useState } from 'react'
import Person from './components/person'


const  App=()=> {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [name, setName]=useState('')

  const handleName=(e)=>{
    setName(e.target.value.trim())
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    let result =persons.find(person=>person.name.toLowerCase()===name.toLowerCase())
    if(result){
       return alert(`${name} is already added in facebook`)
    }
    const person={name}
    setPersons(persons.concat(person))
    setName('')
   
  }

  return (
     <div>
        <h2>Phonebook</h2> 
        <form onSubmit={handleSubmit}>
          <div>
           <input type="text" value={name} onChange={handleName}/>
          </div>
          <div>
           <button type='submit'>Add</button>
          </div>
          
        </form>
        <h2>Contact</h2>
        {persons.map(person=><Person key={person.name} person={person}/>)}
     </div>
  )
}

export default App
