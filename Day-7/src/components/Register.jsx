import React, { useState } from 'react'

const Register = ({ setToggle, setUsers }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    

    



    const handelChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }


    const handelSubmit = (e) => {
        e.preventDefault();

        setUsers((prev)=>[...prev, formData]);

        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className='bg-white w-90 p-6 rounded flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Register</h1>
            <form onSubmit={handelSubmit} className='flex flex-col gap-4' action="">
                <input value={formData.name} name='name' onChange={handelChange} required className='p-2 border border-gray-400 rounded outline-0' type="text" placeholder='Name' />
                <input value={formData.email} name='email' onChange={handelChange} required className='p-2 border border-gray-400 rounded outline-0' type="text" placeholder='Email' />
                <input value={formData.password} name='password' onChange={handelChange} required className='p-2 border border-gray-400 rounded outline-0' type="text" placeholder='Password' />
                <button className='bg-blue-600 p-2 rounded font-bold 
                text-white cursor-pointer active:scale-90'>Register</button>
            </form>
            <p className='mt-3'>
                Already Have an Account? <span onClick={() => setToggle((prev) => !prev)} className='font-bold text-blue-700
                 cursor-pointer'>Login Here</span>
            </p>
        </div>
    )
}

export default Register