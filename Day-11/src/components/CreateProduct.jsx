import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'

const CreateProduct = ({ setUsers, setToggle, users, updatedUser }) => {



    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: updatedUser
    });

    const submitHandeler = (data) => {


        if (updatedUser) {
            //update code
            const updatedUsers = users.map((val) => {
                return val.id === updatedUser.id
                    ? { ...data}
                    : val
            })

            setUsers(updatedUsers)
            localStorage.setItem("users", JSON.stringify(updatedUsers))

        }
        else {
            const arr = [...users, { ...data, id: nanoid() }]
            console.log(arr)
            setUsers(arr);
            localStorage.setItem("users", JSON.stringify(arr))
        }

        setToggle((prev) => !prev)
    }


    return (
        <div className='bg-[#F7EAE0] w-90 rounded'>
            <form onSubmit={handleSubmit(submitHandeler)} className='p-5 flex flex-col gap-4'>


                <input {...register("name", {
                    required: "Name is Required",
                    pattern: {
                        value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                        message: "Blank Space is Not Allowed"
                    }
                })} className='border border-gray-500 p-2 outline-0 rounded' type="text" placeholder='Name' />

                {errors.name && <p>{errors.name.message}</p>}


                <input {...register("email", {
                    required: "Email is Required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please Enter Valid Email"
                    }
                })} className='border border-gray-500 p-2 outline-0 rounded' type="text" placeholder='Email' />

                {errors.email && <p>{errors.email.message}</p>}


                <input {...register("mobile", {
                    required: "Mobile is Required",
                    minLength: {
                        value: 10,
                        message: "Minimum 10 Digits are Required"
                    }
                })} className='border border-gray-500 p-2 outline-0 rounded' type="number" placeholder='Contact' />


                {errors.mobile && <p>{errors.mobile.message}</p>}


                <input {...register("image", {
                    required: "Image is Required"
                })} className='border border-gray-500 p-2 outline-0 rounded' type="text" placeholder='Image' />


                {errors.image && <p>{errors.image.message}</p>}

                <button className='bg-[#8B1E2D] text-white p-2 outline-0 rounded'>Add User</button>
            </form>
        </div>
    )
}

export default CreateProduct