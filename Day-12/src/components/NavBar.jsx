import React from 'react'

const NavBar = ({setToggle}) => {
  return (
    <div className='flex justify-between items-center p-6 bg-[#a4bf66] rounded-2xl'>
        <h1 className='text-3xl font-bold'>Logo</h1>
        <div className='flex justify-center gap-10 text-xl'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>

        <button onClick={()=>setToggle((prev)=>!prev)} className='bg-[#450C3F] active:scale-90 transition-all cursor-pointer text-white px-4 py-2 rounded text-md'>Create User</button>
    </div>
  )
}

export default NavBar