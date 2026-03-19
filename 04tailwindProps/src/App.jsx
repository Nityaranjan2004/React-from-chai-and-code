import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
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
      <h1 className='bg-grenen-400 text-black p-5 rounded-xl'>tailwind test</h1>
      <Card channels="nitya" someobj = {myobj} />
      <Card />
    </>
  )
}

export default App
