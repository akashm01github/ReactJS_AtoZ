import React, { useState } from 'react'

const Register = ({ setToggle, setUsers }) => {


    //! INPUT CHANGE FUNCTION 
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        password: "",
        image:""
    })




    //! HANDEL CHANGE FUNCTION 
    const handelChage = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, formData]);

        setFormData({
            name: "",
            email: '',
            password: "",
            image:""
        })
    }

    return (
        <div className='w-100 bg-white p-6 flex flex-col gap-4 rounded'>
            <h1 className='text-xl font-semibold'>Register Form</h1>
            <form onSubmit={handelSubmit} action="" className='flex flex-col gap-4'>
                <input value={formData.name} onChange={handelChage} name='name' required type="text" placeholder='Name' className='w-full border border-gray-500 p-2 outline-0 rounded' />
                <input value={formData.email} onChange={handelChage} name='email' required type="email" placeholder='Email' className='w-full border border-gray-500 p-2 outline-0 rounded' />
                <input value={formData.image} onChange={handelChage} name='image' required type="url" placeholder='Iamge Address' className='w-full border border-gray-500 p-2 outline-0 rounded' />
                <input value={formData.password} onChange={handelChage} name='password' required type="text" placeholder='Password' className='w-full border border-gray-500 p-2 outline-0 rounded' />
                <button onChange={handelChage} className='bg-purple-600 text-white py-2 font-bold rounded-xl active:scale-90'>Register</button>
            </form>
            <p>Already Have an Account? <span onClick={() => setToggle((prev) => !prev)} className='cursor-pointer'><strong>Login</strong></span></p>
        </div>
    )
}

export default Register