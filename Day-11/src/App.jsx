import React, { useState } from 'react'
import NavBar from './components/NavBar'
import UserCard from './components/UserCard'
import CreateProduct from './components/CreateProduct';

const App = () => {


  const [toggle, setToggle] = useState(true);

  const [users, setUsers] = useState([]);

  console.log(users)


  return (
    <div className='p-6 flex flex-col gap-6'>
      <NavBar setToggle={setToggle}  />
      <div>


        {toggle ? (
          <div className='flex flex-wrap p-2 justify-center gap-10'>
            {users.map((user)=>{
              return <UserCard user={user}  />
            })}
          </div>
        )

          :
          (
            <div className='flex justify-center'>
              <CreateProduct setUsers={setUsers} setToggle={setToggle}/>
            </div>
          )

        }

      </div>
    </div>
  )
}

export default App