import { useEffect } from "react"
import React  from 'react'
import { data } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

const Github = () => {


  const data = useLoaderData()

  // const [data,setdata] = useState({})
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Nityaranjan2004')
  //   .then(responce=>responce.json())
  //   .then(
  //     data=>{console.log(data);
  //     setdata(data)
  //   })

  // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img className='text-center' src={data.avatar_url} alt="get picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const responce = await fetch('https://api.github.com/users/Nityaranjan2004')
  return responce.json()
}