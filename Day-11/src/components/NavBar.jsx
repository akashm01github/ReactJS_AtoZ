import React from 'react'

const NavBar = ({setToggle}) => {
  return (
    <div className='bg-[#FFEED6] rounded p-3 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Logo</h1>

        <div className='flex justify-center items-center gap-10 text-md'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>

        <button onClick={()=>setToggle((prev)=>!prev)} className='bg-orange-500 p-2 text-white font-semibold rounded active:scale-90 transition-all cursor-pointer'>Create User</button>
    </div>
  )
}

export default NavBar