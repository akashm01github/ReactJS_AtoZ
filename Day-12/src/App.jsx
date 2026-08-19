import React, { useState } from 'react'
import NavBar from './components/NavBar'
import UserCard from './components/UserCard';
import Form from './components/Form';

const App = () => {

  const [toggle, setToggle] = useState(true);

  const [updatedUser, setUpdatedUser] = useState()


  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);


  const deleteUser = (id)=>{
    const filterUser = users.filter((u)=>u.id !== id);

    setUsers(filterUser);

    localStorage.setItem("users", JSON.stringify(filterUser));
  }

  

  return (
    <div className='p-6 flex flex-col gap-10'>
      <NavBar setToggle={setToggle} />

      {toggle ?

        (<div className=' flex flex-wrap justify-center gap-10 py-5'>
          {users.map((user,idx)=>{
            return <UserCard setToggle={setToggle} deleteUser={deleteUser} setUpdatedUser={setUpdatedUser} key={idx} user={user}/>
          })}
        </div>)

        : (
          <div className='flex justify-center py-3'>
            <Form updatedUser={updatedUser}  users={users} setToggle={setToggle} setUsers={setUsers} />
          </div>
        )}

    </div>
  )
}

export default App