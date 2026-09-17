import React, { useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { NavLink, Route, Routes } from 'react-router';

const App = () => {
  const [toggle, setToggle] = useState("home");
  return (
    <div className='p-3'>
      <nav className='flex bg-amber-200 justify-between rounded p-4'>
        <h3 className='text-xl font-bold'>Logo</h3>
        <div className='flex gap-20 cursor-pointer'>
      
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact' >Contact</NavLink>
  
        </div>
        <button>Login</button>
      </nav>

      

      <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App