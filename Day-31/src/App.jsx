import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {

  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState([])

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

  
  return (
    <div className='h-screen p-7'>
      <Navbar setToggle={setToggle}/>
      {
        toggle ? <Form users={users} setUsers={setUsers} setToggle={setToggle}/> : (
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