import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ setUsers, setToggle, users, updatedUser }) => {


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onChange",
    defaultValues: updatedUser
  });


  const formSubmit = (data) => {

    if (updatedUser) {
      const newupdatedUser = users.map((user) => {
        return user.id === updatedUser.id ? { ...data } : user
      })

      console.log(newupdatedUser)

      setUsers(newupdatedUser);
      localStorage.setItem("users", JSON.stringify(newupdatedUser));

    }

    else {
      const arr = [...users, { ...data, id: nanoid() }]
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    setToggle((prev) => !prev);
    reset();
  }



  return (
    <div className='bg-gray-300 rounded w-90 p-4'>
      <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-4'>
        <input {...register("name", {
          required: "Name is Required", pattern: {
            value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
            message: "Blank Space Not Accepted"
          }
        })} className='border outline-0 rounded border-gray-600 p-2' type="text" placeholder='Name' />

        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        <input {...register("email", {
          required: "Email is Required", pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "Enter Valid Email"
          }
        })} className='border outline-0 rounded border-gray-600 p-2' type="email" placeholder='Email' />

        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        <input {...register("image", { required: "Image is Required" })} className='border outline-0 rounded border-gray-600 p-2' type="url" placeholder='Iamge URL' />

        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}

        <input {...register("phone", {
          required: "Phone is Required", minLength: {
            value: 10,
            message: "Minimum 10 Digits Required"
          }
        })} className='border outline-0 rounded border-gray-600 p-2' type="number" placeholder='Phone Number' />

        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}


        <button className='bg-amber-600 rounded active:scale-90 transition-all cursor-pointer text-white font-semibold text-md p-2'>Submit</button>
      </form>
    </div>
  )
}

export default Form