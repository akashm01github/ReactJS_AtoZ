//! BETTER APPROACH  

import React, { useState } from 'react'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handelChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]:value})
  }

  console.log(formData)

  return (
    <div className='border w-100 bg-white p-6 flex flex-col gap-4 rounded'>
      <h1 className='text-xl font-semibold'>Contact Form</h1>
      <input name='name' onChange={handelChange} type="text" placeholder='Name' className='w-full border border-gray-500 p-2 outline-0 rounded' />
      <input name='email' onChange={handelChange} type="email" placeholder='Email' className='w-full border border-gray-500 p-2 outline-0 rounded' />
      <input name='password' onChange={handelChange} type="text" placeholder='Password' className='w-full border border-gray-500 p-2 outline-0 rounded' />
    </div>
  )
}

export default ContactForm



































// //! BRUTE FORCE

// import React, { useState } from 'react'

// const ContactForm = () => {

//   const [name, setName] = useState("");

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");


//   console.log(name)
//   console.log(email)
//   console.log(password)

//   return (
//     <div className='border w-100 bg-white p-6 flex flex-col gap-4 rounded'>
//       <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='w-full border border-gray-500 p-2 outline-0 rounded' />
//       <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='w-full border border-gray-500 p-2 outline-0 rounded' />
//       <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' className='w-full border border-gray-500 p-2 outline-0 rounded' />
//     </div>
//   )
// }

// export default ContactForm