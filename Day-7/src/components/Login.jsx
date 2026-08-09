import React from 'react'

const Login = ({setToggle}) => {
    return (
        <div className='bg-white w-90 p-6 rounded flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Login</h1>
            <form className='flex flex-col gap-4' action="">
                <input className='p-2 border border-gray-400 rounded outline-0' type="text" placeholder='Email' />
                <input className='p-2 border border-gray-400 rounded outline-0' type="text" placeholder='Password' />
                <button className='bg-blue-600 p-2 rounded font-bold 
                text-white cursor-pointer active:scale-90'>Login</button>
            </form>
            <p className='mt-3'>
                Did Not Have an Account? <span onClick={()=>setToggle((prev)=>!prev)} className='font-bold text-blue-700
                 cursor-pointer'>Register Here</span>
            </p>
        </div>
    )
}

export default Login