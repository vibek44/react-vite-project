import { useState } from 'react'
import Filter from './components/filter'
import ContactForm from './components/contactform'
import Person from './components/person'


const  App=()=> {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [name, setName]=useState('')

  const [number, setNumber]=useState('')

  const [search, setSearch]=useState(null)

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
