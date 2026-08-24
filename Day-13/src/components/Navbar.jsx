import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {

    const {setIsCartOpen} = useContext(MyStore);
  return (
    <div className='h-10 bg-black p-7 rounded text-white flex items-center justify-between'>
        <div className='text-xl'>Logo</div>
        <div className='flex items-center gap-10 '>
            <p onClick={()=>setIsCartOpen(false)}  className='cursor-pointer'>Home</p>
            <p onClick={()=>setIsCartOpen(true)}  className='cursor-pointer'>Cart</p>
        </div>

        <button>Login</button>
    </div>
  )
}

export default Navbar