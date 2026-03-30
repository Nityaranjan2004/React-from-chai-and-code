import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-white text-2xl mb-6">
        Learn about redux toolkit
      </h1>

      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
