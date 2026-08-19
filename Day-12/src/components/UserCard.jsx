import React from 'react'

const UserCard = ({user,setUpdatedUser,setToggle,deleteUser}) => {
  return (
    <div className='w-60 p-3 flex flex-col gap-4 bg-[#D2C4B4] rounded'>
        <div className='h-40'>
            <img className='rounded-md w-full h-full object-cover' src={user.image} alt="" />
        </div>

        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <div className='flex justify-between items-center'>
            <button onClick={()=>{
              deleteUser(user.id)
            }} className='bg-red-500 px-3 py-1 rounded active:scale-90 transition-all cursor-pointer text-white'>Delete</button>
            <button onClick={()=>{
              setUpdatedUser(user);
              setToggle((prev)=>!prev);
            }} className='bg-blue-700 px-3 py-1 rounded active:scale-90 transition-all cursor-pointer text-white'>Update</button>
        </div>
    </div>
  )
}

export default UserCard