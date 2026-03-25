import React,{useState,useContext, useActionState} from 'react'
import UserContext from '../Context/UserContext';
function Login() {
    const [username,setUsername] = useState("");
    const [password,setPasword] = useState("");

    //this is all about send the data to the provider and provider will send it 
    // to all the components that are wrapped in the provider
    const {setUser} = useContext(UserContext)
    const handelSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>

      <input type="text"
       value={username}
       onChange={(e)=>setUsername(e.target.value)}
       placeholder='username' />

{"  "}


      <input type="text" 
      value={password}
      onChange={(e)=>setPasword(e.target.value)}
      placeholder='password' />


      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
