

const Header=({course})=><h1>{course.name}</h1>

const Part=({part})=><p>{part.name} {part.exercises}</p>
 
const Total=({course})=><p>Total: {course.parts.reduce((sum,nel)=>sum+nel.exercises,0)} exercises</p>



const Course=({course})=><div>          
  <Header course={course}/>
  {course.parts.map(part=><Part  key={part.id} part={part}/>)}
  <Total course={course}/>
</div>


export default Course