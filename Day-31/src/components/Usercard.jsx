import React from 'react'

const Usercard = ({user}) => {



  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xl font-semibold text-white">
          <img className='w-full h-full rounded-full' src={user.image} alt="" />
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-stone-900">{user.userName}</h2>
          <p className="text-sm text-stone-500">User</p>
        </div>
      </div>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-3">
          <dt className="text-stone-500">Email</dt>
          <dd className="truncate font-medium text-stone-800">{user.email}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-stone-500">Mobile</dt>
          <dd className="font-medium text-stone-800">{user.mobile}</dd>
        </div>
      </dl>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
          Delete
        </button>
        <button className="flex-1 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2">
          Edit
        </button>
      </div>
    </div>
  )
}

export default Usercard