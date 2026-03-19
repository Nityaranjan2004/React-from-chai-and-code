import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div> 
      <h1> custom app</h1>
    </div>
  )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'click me to visit google'
// }


const anotherUser = "chsi and react";


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
