import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const Navbar = () => {

    const { setIsCartOppen } = useContext(MyShop);

    return (
        <div className='bg-[#092328] rounded-md sticky top-0 z-50 text-[#FDF4D2] p-4 flex justify-between items-center'>
            <h1 className='text-xl font-black'>LOGO</h1>

            <div className='flex items-center gap-15'>
                <p onClick={() => setIsCartOppen(false)} className='cursor-pointer px-2 py-1 hover:bg-[#FFB900] hover:text-black hover:rounded 
            select-none'>Home</p>
                <p onClick={() => setIsCartOppen(true)} className='cursor-pointer px-3 py-1 hover:bg-[#F9D2BA] hover:text-black hover:rounded 
            select-none'>Cart</p>
            </div>

            <button>Login</button>
        </div>
    )
}

export default Navbar