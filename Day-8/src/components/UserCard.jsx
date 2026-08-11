import React from 'react'

const UserCard = ({elem}) => {
  return (
    <div className='p-4 flex flex-col gap-4 mr-10 border border-gray-400 rounded bg-white'>
        <div className='w-50 h-60 rounded overflow-hidden'>
            <img className='w-full h-full' src={elem.image} alt="" />
        </div>

        <div>
            <h1>{elem.name}</h1>
            <p>{elem.email}</p>
            <button className='bg-red-600 w-full rounded mt-4 py-2 text-white'>Delete</button>
        </div>
    </div>
  )
}

export default UserCard