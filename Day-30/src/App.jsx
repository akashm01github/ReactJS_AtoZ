import React from 'react'
import NavBar from './components/NavBar'
import Usercard from './components/Usercard'

const App = () => {
  return (
    <div className='p-3 h-screen'>
      <NavBar/>
      <Usercard/>
    </div>
  )
}

export default App