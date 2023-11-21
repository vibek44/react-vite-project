const Person=({person,removePerson,text})=><p>{person.name} {person.number}
 <button onClick={removePerson}>{text}</button>
</p>


export default Person

