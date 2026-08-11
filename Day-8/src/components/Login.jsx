import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className='w-100 bg-white p-6 flex flex-col gap-4 rounded'>
      <h1 className='text-xl font-semibold'>Login Form</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="email" placeholder='Email' className='w-full border border-gray-500 p-2 outline-0 rounded' />
        <input type="text" placeholder='Password' className='w-full border border-gray-500 p-2 outline-0 rounded' />
        <button className='bg-orange-600 py-2 text-white font-bold rounded-xl active:scale-90'>Login</button>
      </form>
      <p>Don't Have an Account? <span onClick={()=>setToggle((prev)=>!prev)} className='cursor-pointer'><strong>Register</strong></span></p>
    </div>
  )
}

export default Login