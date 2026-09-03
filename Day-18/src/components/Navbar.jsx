import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const Navbar = () => {

    const {setIsCartOppen} = useContext(MyShop);
  return (
    <div className=' bg-[#3E0F8D] text-white rounded-2xl text-xl flex items-center justify-between p-6'>
        <h1 className='text-2xl font-black'>Logo</h1>
        <div className='flex items-center gap-10'>
            <p onClick={()=>setIsCartOppen(false)} className='cursor-pointer hover:bg-[#D96868] rounded px-3 py-2 active:scale-90 select-none'>Home</p>
            <p onClick={()=>setIsCartOppen(true)} className='cursor-pointer hover:bg-[#FF9D9D] rounded px-3 py-2 active:scale-90 select-none'>Cart</p>
        </div>

        <h3>Login</h3>
    </div>
  )
}

export default Navbar   