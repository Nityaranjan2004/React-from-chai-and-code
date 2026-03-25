import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"nitya",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl'>tailwind test</h1>
      <Card channels="nitya" someobj = {myobj} />
      <Card />
    </>
  )
}

export default App
