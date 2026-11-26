import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <nav className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-6 py-4 shadow-sm">
      <h1 className="text-lg font-semibold text-stone-900">Logo</h1>

      <div className="flex gap-10 text-sm font-medium text-stone-600">
        <a href="#" className="transition hover:text-teal-700">Home</a>
        <a href="#" className="transition hover:text-teal-700">About</a>
        <a href="#" className="transition hover:text-teal-700">Contact</a>
      </div>

      <button
        onClick={() => setToggle((prev) => !prev)}
        className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 active:scale-95"
      >
        Create User
      </button>
    </nav>
  )
}

export default Navbar