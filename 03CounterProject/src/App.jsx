import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setCounter]= useState(15);
  //let counter = 5;
  const addValue = ()=>{
    //counter = counter + 1;
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    console.log("value added",counter);
    
  }

  const removevalue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai and react</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      
      <button
      onClick={removevalue}
      >remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
