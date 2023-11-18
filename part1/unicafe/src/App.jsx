import React from "react";
import {useState} from "react"

const Button=({text,onClick})=><button onClick={onClick}>{text}</button>
const Statistic=({good,neutral,bad})=><>
      <p>good {good} </p>
      <p>neutral {neutral}</p>
      <p>bad {bad} </p>

     </>

const App=()=>{
    const [good,setGood]=useState(0)
    const [bad, setBad]=useState(0)
    const [neutral, setNeutral]=useState(0)
    
    const handleGood=()=>setGood(good+1)
    
    const handleNeutral=()=>setNeutral(neutral+1)

    const handleBad=()=>setBad(bad+1)
    return(
        <>
        <h3>Give feedback</h3>
        <Button onClick={handleGood} text='good'/>
        <Button onClick={handleNeutral} text='neutral'/>
        <Button onClick={handleBad} text='bad'/>
        <p>Statistics</p>
        <Statistic good={good} bad={bad} neutral={neutral}/>
        </>
    )
}


export default App;
