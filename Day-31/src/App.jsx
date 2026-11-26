import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {

  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState([])

  console.log(users)
  
  return (
    <div className='h-screen p-7'>
      <Navbar setToggle={setToggle}/>
      {
        toggle ? <Form setUsers={setUsers} setToggle={setToggle}/> : (
          <div className='flex flex-wrap '>
            {users.map((user,idx)=>{
              return <Usercard key={idx} user={user}/>
            })}
          </div>
        )
      }
    </div>
  )
}

export default App