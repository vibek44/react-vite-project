import { useState } from 'react'
import Filter from './components/filter'
import ContactForm from './components/contactform'
import Person from './components/person'
import { useEffect } from 'react'
import axios from 'axios'


const  App=()=> {
  const [persons, setPersons] = useState([])

  const [name, setName]=useState('')

  const [number, setNumber]=useState('')

  const [search, setSearch]=useState(null)

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
      .then(res=>setPersons(res.data))    
  },[])

  const peopleToShow=search ?
  persons.filter(person=>
    person.name.toLowerCase().includes(search.toLowerCase())
  ):persons

  //const personToShow
  const handleSearch=(e)=>setSearch(e.target.value)

  const handleName=(e)=>{
    setName(e.target.value)
  }

  const handleNumber=(e)=>setNumber(e.target.value)

  const handleSubmit=(e)=>{
    e.preventDefault()
    let result =persons.find(person=>person.name.toLowerCase()===name.trim().toLowerCase())
    if(result){
       return alert(`${name} is already added in facebook`)
    }
    const person={ name:name.trim(),
      number:number.toString(),
      id:persons.length+1
    }
    setPersons(persons.concat(person))
    setName('')
    setNumber('')
     
  }

  return (
     <div>
        <h2>Phonebook</h2> 
        <Filter handleSearch={handleSearch}/>
        <h4> Add Contacts</h4>
        <ContactForm name={name} number={number} handleSubmit={handleSubmit} 
         handleNumber={handleNumber} handleName={handleName} />
        <h2>Contact</h2>
        {peopleToShow.map(person=><Person key={person.id} person={person}/>)}
     </div>
  )
}

export default App
