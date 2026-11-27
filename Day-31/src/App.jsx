import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {

  const [toggle, setToggle] = useState(false);

  const [updatedData, setUpdatedData] = useState(null);

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || []
  })

  console.log(users)

  // localStorage.setItem("naam", "Akash Mukherjee");

  // const myName = localStorage.getItem("naam");

  // console.log(myName);


  // const myObj = {
  //   userName:"Akash",
  //   age:25,
  //   skils:["JS", "React"]
  // }


  // localStorage.setItem("myInfo", JSON.stringify(myObj));

  // const myNewInfo = JSON.parse(localStorage.getItem("myInfo"));

  // console.log(myNewInfo.skils)


  // ! DELETE USER
  const deleteUser = (id) => {

    const filterUser = users.filter((val, idx) => {
      return idx !== id
    })

    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  }





  return (
    <div className='h-screen p-7'>
      <Navbar setToggle={setToggle} />
      {
        toggle ? <Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle} /> : (
          <div className='flex flex-wrap '>
            {users.map((user, idx) => {
              return <Usercard ind={idx} deleteUser={deleteUser} setToggle={setToggle} setUpdatedData={setUpdatedData} key={idx} user={user} />
            })}
          </div>
        )
      }
    </div>
  )
}

export default App