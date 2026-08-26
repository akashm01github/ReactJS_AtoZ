import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  console.log("App Rendering.....");


  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Mounting Phase");

    return ()=>{
      console.log("UnMounting Phase")
    }
  },[])

  return (
    <div className='p-6 flex flex-col gap-10'>
      <h1>Hello - {count}</h1>

      <button onClick={()=>setCount(count+1)} className='bg-blue-500 p-2 cursor-pointer'>Incremnt</button>


      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App