import { useState } from 'react'

const Header=({course})=><h1>{course.name}</h1>

const Part=({part})=><p>{part.name} {part.exercises}</p>

const Content=({course})=>course.parts.map(part=><Part key={part.exercises} part={part}/>)
 
const Total=({course})=><p>Total: {course.parts.reduce((sum,nel)=>sum+nel.exercises,0)}</p>

const Course=({course})=><>          
  <Header course={course}/>
  <Content course={course}/>
  <Total course={course}/>
</>

const App=()=> {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <>
     {courses.map(course=><div><Course key={course.id} course={course}/></div>)}
    </>)
    
}

export default App
