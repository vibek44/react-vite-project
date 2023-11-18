import React from "react";
import {useState} from "react"

const Button=({text,onClick})=><button onClick={onClick}>{text}</button>

const StatisticLine=({text,value})=><tr>
    <td>{text}</td> 
    <td>{value}</td>
</tr>

const Statistic=({good,neutral,bad})=>{
    let total=good+bad+neutral;
    let average=(good-bad)/total
    let positive=(good/total)*100+'%'
    return(<>
        <table>
            <tbody>
                <StatisticLine text='good' value={good}/>
                <StatisticLine text='bad'  value={bad}/>
                <StatisticLine text='neutral' value={neutral}/>
                <StatisticLine text='all' value={total}/>
                <StatisticLine text='average' value={average}/>
                <StatisticLine text='positive' value={positive}/>
            </tbody>
        </table>
    </>)
}
    

const App=()=>{
    const [good,setGood]=useState(0)
    const [bad, setBad]=useState(0)
    const [neutral, setNeutral]=useState(0)
    
    const handleGood=()=>setGood(good+1)
    
    const handleNeutral=()=>setNeutral(neutral+1)

    const handleBad=()=>setBad(bad+1)

    return(<>
        <h3>Give feedback</h3>
        <Button onClick={handleGood} text='good'/>
        <Button onClick={handleNeutral} text='neutral'/>
        <Button onClick={handleBad} text='bad'/>
        <h3>Statistics</h3>
        {(good+bad+neutral>0)?<Statistic good={good} bad={bad} neutral={neutral}/>:
          <p>No feedbacks given</p>
        }

    </>)
}


export default App;
