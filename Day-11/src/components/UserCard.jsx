import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='w-60 bg-[#E8EDF2]  border p-4 border-gray-500 rounded flex flex-col gap-4'>
        <div className='h-40'>
            <img className='w-full h-full object-cover rounded' src={user.image} alt="" />
        </div>

        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
        <div className='flex justify-between'>
            <button className='px-3 py-1 rounded bg-red-600 text-white active:scale-90 transition-all cursor-pointer'>Delete</button>
            <button className='px-3 py-1 rounded bg-blue-600 text-white active:scale-90 transition-all cursor-pointer'>Update</button>
        </div>
    </div>
  )
}

export default UserCard