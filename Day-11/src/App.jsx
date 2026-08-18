import React, { useState } from 'react'
import NavBar from './components/NavBar'
import UserCard from './components/UserCard'
import CreateProduct from './components/CreateProduct';

const App = () => {


  const [toggle, setToggle] = useState(true);

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);


  const [updatedUser, setUpdatedUser] = useState();

  console.log(updatedUser)


  const deleteUser = (id)=>{
    console.log(id)
    
    const filterUser = users.filter((user,idx)=>idx != id)

    setUsers(filterUser)
    localStorage.setItem("users", JSON.stringify(filterUser))
  }







  return (
    <div className='p-6 flex flex-col gap-6'>
      <NavBar setToggle={setToggle} />
      <div>


        {toggle ? (
          <div className='flex flex-wrap p-2 justify-center gap-10'>
            {users.map((user,idx) => {
              return <UserCard key={idx} setUpdatedUser={setUpdatedUser}  deleteUser={deleteUser} idx={idx} user={user} setToggle={setToggle} />
            })}
          </div>
        )

          :
          (
            <div className='flex justify-center'>
              <CreateProduct updatedUser={updatedUser}  users={users} setUsers={setUsers} setToggle={setToggle} />
            </div>
          )

        }

      </div>
    </div>
  )
}

export default App