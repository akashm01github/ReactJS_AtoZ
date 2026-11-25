import React from 'react'

const NavBar = () => {
  return (
    <div className='p-4 rounded flex items-center justify-between bg-black select-none'>
        <h1 className='text-orange-400 text-2xl font-bold'>Logo</h1>
        <div className='flex gap-9 font-semibold text-white'>
            <p className='hover:bg-gray-300 px-4 py-1 cursor-pointer hover:text-red-500'>Home</p>
            <p className='hover:bg-gray-300 px-4 py-1 cursor-pointer hover:text-red-500'>About</p>
            <p className='hover:bg-gray-300 px-4 py-1 cursor-pointer hover:text-red-500'>Contact</p>
        </div>
        <button className=' bg-amber-300 px-4 py-1 rounded cursor-pointer font-semibold active:scale-90 select-none'>Create User</button>
    </div>
  )
}

export default NavBar