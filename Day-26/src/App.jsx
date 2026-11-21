import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  

  const [user, setUser] = useState({
    name: "Akash"
  });

  console.log("App Rendering......")

  const changeName = () => {
      user.name = "Paban"
  }

  

  return (
    <div className='p-[4%]'>
      <h1 className='text-2xl'>Chage Count - <span className='text-orange-500 font-bold text-3xl'>{count}</span></h1>
      <h1 className='text-3xl'>Change Name - {user.name}</h1>
      <div className='flex gap-10 mt-10'>
        <button onClick={() => changeName()} className='bg-amber-500 px-5 py-1 select-none font-bold rounded active:scale-90'>Chage Name</button>


        <button onClick={() => {
          setCount(count + 1)
        }} className='bg-fuchsia-600 select-none px-5 py-1 font-bold rounded active:scale-90'>Incremnt</button>
      </div>
    </div>
  )
}

export default App