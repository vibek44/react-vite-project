import { useState } from 'react'
import Filter from './components/filter'
import ContactForm from './components/contactform'
import Person from './components/person'
import { useEffect } from 'react'
import contactService from './services/communication'


const  App=()=> {
  const [persons, setPersons] = useState([])
  const [name, setName]=useState('')
  const [number, setNumber]=useState('')
  const [search, setSearch]=useState(null)

  useEffect(()=>{
    contactService
    .getAll()
    .then(initialPersons=>setPersons(initialPersons))    
  },[])

  const peopleToShow=search ?
      persons.filter(person=>
        person.name.toLowerCase().includes(search.toLowerCase()))
      :persons

  
  const handleSearch=(e)=>setSearch(e.target.value)

  const handleName=(e)=>setName(e.target.value)
  
  const handleNumber=(e)=>setNumber(e.target.value)

  const handleSubmit=(e)=>{
    e.preventDefault()
    let tname=name.trim()
    let tnumber=number.trim()
    if(tname && tnumber){
      let result =persons.find(person=>person.name.toLowerCase()===tname.toLowerCase())
      if(result){
        alert(`${result.name} is already added in phonebook,Replace old number with new`)
        const updatedPerson={...result,number:tnumber}
        contactService
         .update(result.id,updatedPerson)
         .then(returnedPerson=>{
             console.log(returnedPerson);
            setPersons(persons.map(person=>person.id!==returnedPerson.id ? person : returnedPerson ))
          })
      }else{
        const person={ 
          name:tname,
          number:tnumber.toString() 
        }
        contactService
        .create(person)
        .then(resData=>{
          setPersons(persons.concat(resData))
          setName('')
          setNumber('')
        })
      }
    }else{
       alert(`Name or phone input field is empty `)
    }
  }
  //delete functionality
  const handleRemove=(id)=>{
    const person=persons.find(person=>person.id===id)
    confirm(`Delete ${person.name}`)
    contactService
    .remove(id)
    .then(res=>{
      setPersons(persons.filter(person=>
        person.id!==id 
      ))
    })
  }

  return(
    <div>
      <h2>Phonebook</h2> 
      <Filter handleSearch={handleSearch}/>
      <h4> Add Contacts</h4>
      <ContactForm name={name} number={number} handleSubmit={handleSubmit} 
        handleNumber={handleNumber} handleName={handleName} />
      <h2>Contact</h2>
      { peopleToShow.map(person=>
          <Person key={person.id} person={person} 
           removePerson={()=>handleRemove(person.id)} text='delete'/>
      )}
    </div>
  )
}

export default App
