import React from 'react'
import { useState } from 'react'
import Button from './Components/Button/Button.jsx'
import Counting from './Components/Counter/Counter.jsx'


import './App.css'


export  default function App() {
const [Counter,setCounter] = useState(0)
const  Increment=(type)=>{
    setCounter(Counter +1 )
}
const Decrement=(type)=>{
  if (Counter > 0) {
    setCounter(Counter - 1);
  } else {
    console.log("No se puede disminuir más.");
  }
}

const  Reset=(type)=>{
  setCounter(0)
}
return (
  <>
    <Button title="Suma" onClick={Increment}/>
    
    <Button title="Resta" onClick={Decrement}/>

    <Button title="Reset" onClick={Reset}/>


    <Counting Counter= {Counter} />

    
    

</>
)


}