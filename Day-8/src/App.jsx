import React, { useState } from 'react'
import ContactForm from './components/ContactForm'
import Register from './components/Register'
import Login from './components/Login'
import UserCard from './components/UserCard'

const App = () => {

  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState([]);

   console.log(users)

  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>
      {toggle?
       users.map((elem,idx)=>{
        return <UserCard key={idx} elem={elem}/>
       })
       :<Register setUsers={setUsers} setToggle={setToggle}/>}
    </div>
  )
}

export default App