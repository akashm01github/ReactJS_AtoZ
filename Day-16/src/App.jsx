import React, { useContext, useEffect, useState } from 'react'
import { MycontextProvider, MyShop } from './context/MyContext'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

  const [count, setCount] = useState(0);

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("App is Rendering.........");
  }, [])




  return (
    <div className='p-6 flex flex-col gap-10 w-[80%]'>
      <h1>Home-{count}</h1>
      <button onClick={() => setCount(count + 1)} className='bg-orange-500 p-2 mt-5 text-white cursor-pointer active:scale-90 rounded'>Increment</button>

      <button onClick={() => setToggle((prev)=>!prev)} className='bg-blue-600 px-5 py-2 mt-5 text-white cursor-pointer active:scale-90 rounded'>Toggle</button>
      {/* <MycontextProvider>
        <Home />
        <About />
      </MycontextProvider> */}
      {
        toggle ? <Contact /> : <About />
      }
    </div>
  )
}


export default App