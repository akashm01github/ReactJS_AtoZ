import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

    console.log("App Rerendering....")

    const {register, reset, handleSubmit, formState:{errors}} = useForm();

    const submitHandeler = (data)=>{
        console.log(data)
    }

    return (
        <div className='bg-white p-6 w-90 rounded'>
            <form onSubmit={handleSubmit(submitHandeler)} className='flex flex-col p-2 gap-3'>

                <input {...register("productName")}  type="text" placeholder='Product Name' className='p-2 border border-gray-400 outline-0  rounded' />

                <input {...register("price")}  type="text" placeholder='Product Price' className='p-2 border border-gray-400 outline-0  rounded' />

                <input {...register("image")}  type="url" placeholder='Product Image URL' className='p-2 border border-gray-400 outline-0  rounded' />

                <span className='font-semibold'>Product Category</span>
                <select {...register("category")}  name="" id="" className='p-2 border border-gray-400 outline-0  rounded'>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>

                <button className='bg-orange-400 p-2 text-white font-semibold rounded'>Submit</button>
            </form>
        </div>
    )
}

export default Contact