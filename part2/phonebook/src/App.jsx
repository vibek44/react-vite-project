import { useState } from 'react'
import Notification from './components/Notification'
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
  const [message, setMessage]=useState({errormsg:null,successmsg:null})

  const peopleToShow=search ?
      persons.filter(person=>
        person.name.toLowerCase().includes(search.toLowerCase()))
      :persons

  useEffect(()=>{
    contactService
    .getAll()
    .then(initialPersons=>setPersons(initialPersons))    
  },[])
  
  const handleSearch=(e)=>setSearch(e.target.value)

  const handleName=(e)=>setName(e.target.value)
  
  const handleNumber=(e)=>setNumber(e.target.value)

  const handleSubmit=(e)=>{
    e.preventDefault()
    let tname=name.trim()
    let tnumber=number.trim()
    if(tname && tnumber){                           //update funtionality
      let result =persons.find(person=>person.name.toLowerCase()===tname.toLowerCase())
      if(result){
        confirm(`${result.name} is already added in phonebook,Replace old number with new`)
        const updatedPerson={...result,number:tnumber}
        contactService
         .update(result.id,updatedPerson)
         .then(resData=>{
            setPersons(persons.map(person=>person.id!==resData.id ? person : resData ))
          })
          .catch(err=>{
            console.log(err.msg);
          })
      }else{                                         //create functionality
        const person={ 
          name:tname,
          number:tnumber.toString() 
        }
        contactService
        .create(person)
        .then(resData=>{
          setPersons(persons.concat(resData))
          setMessage({...message,successmsg:`Added ${resData.name}`})
          setName('')
          setNumber('')
          setTimeout(() => {
            setMessage({...message,successmsg:null})
          },5000);
        })
        
      }
    }else{
       alert(`Name or phone input field is empty `)
    }
  }
                                                     //delete functionality
  const handleRemove=(id)=>{
    const user=persons.find(person=>person.id===id)
    confirm(`Delete ${user.name}`)
    contactService
    .remove(id)
    .then(res=>{
      setPersons(persons.filter(person=>
        person.id!==id 
      ))
    })
    .catch(err=>{
      setMessage({...message,errormsg:`Information of ${user.name} is already deleted`})
      setTimeout(()=>setMessage({...message,errormsg:null}),5000)
      setPersons(persons.filter(person=>person.id!==user.id))
    })
  }

  return(
    <div>
      <h2>Phonebook</h2> 
      <Notification message={message}/>
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
