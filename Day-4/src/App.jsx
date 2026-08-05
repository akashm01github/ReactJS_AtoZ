import React, { useState } from 'react'
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';


const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is - {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increment</button>
    </div>
  )
}

export default App