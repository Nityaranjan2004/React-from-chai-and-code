import { useState } from 'react'
import './App.css'
import UserContextprovider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextprovider>
      {/* Now everything inside this provider can access: */}
      <h1>React with chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextprovider>
  )
}

export default App
