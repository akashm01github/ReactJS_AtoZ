import React from 'react'
import { useForm } from 'react-hook-form'

const inputClass =
  'w-full rounded-lg border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-stone-700'

const Form = ({ setUsers,setToggle }) => {

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const formSubmit = (userData) => {
    setUsers((prev)=>[...prev, userData]);
    reset();
    setToggle((prev)=>!prev)
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-stone-900">Add a user</h2>
      <p className="mt-1 text-sm text-stone-500">Fill in the details below to create a new user.</p>

      <form onSubmit={handleSubmit(formSubmit)} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input {...register("userName", {required: "User Name Is Required"})} id="name" type="text" placeholder="Enter the User Name" className={inputClass} />
          {errors.userName && <p className='text-red-600 mt-2'>{errors.userName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input {...register("email", {required: "User Email Is Required"})} id="email" type="text" placeholder="Enter the User Email Id" className={inputClass} />
          {errors.email && <p className='text-red-600 mt-2'>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="mobile" className={labelClass}>Mobile number</label>
          <input {...register("mobile", {required: "User Mobile Is Required"})} id="mobile" type="text" placeholder="Enter the User Mobile Number" className={inputClass} />
          {errors.mobile && <p className='text-red-600 mt-2'>{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="image" className={labelClass}>Image URL</label>
          <input {...register("image", {required: "User Image Is Required"})} id="image" type="text" placeholder="Enter the User Image URL" className={inputClass} />
          {errors.image && <p className='text-red-600 mt-2'>{errors.image.message}</p>}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            className="flex-1 rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Save user
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form