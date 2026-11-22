import React, { useState } from 'react'

const App = () => {

  //! DRY APPORACH  

  const [formData, setFormData] = useState({
      userName: "",
      email: "",
      password: ""
  });

  const handelChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  return (
    <div className='w-screen h-screen bg-gray-400 flex justify-center items-center flex-col gap-10'>
      <div className='w-[80%] px-10 border py-10 flex flex-col gap-10 bg-white rounded-2xl'>

        <input name='userName' onChange={handelChange}   type="text" placeholder='Enter the Name'  className='px-2 rounded py-2 outline-0 border w-[90%]'/>

        <input name='email' onChange={handelChange}   type="text" placeholder='Enter the Email' className='px-2 rounded py-2 outline-0 border w-[90%]' />

        <input name='password' onChange={handelChange}   type="text" placeholder='Enter the password' className='px-2 rounded py-2 outline-0 border w-[90%]' />
      </div>

      <h1>NAME: {formData.userName} </h1>
      <h1>EMAIL: {formData.email} </h1>
      <h1>PASSWORD: {formData.password} </h1>
      
    </div>
  )
}

export default App






//! BETTER FORSE APPORACH  

// import React, { useState } from 'react'

// const App = () => {


//   const [formData, setFormData] = useState({
//       userName: "",
//       email: "",
//       password: ""
//   });

//   console.log(formData)

//   return (
//     <div className='w-screen h-screen bg-gray-400 flex justify-center items-center flex-col gap-10'>
//       <div className='w-[80%] px-10 border py-10 flex flex-col gap-10 bg-white rounded-2xl'>

//         <input onChange={(e)=>setFormData({...formData, userName:e.target.value})}   type="text" placeholder='Enter the Name'  className='px-2 rounded py-2 outline-0 border w-[90%]'/>

//         <input onChange={(e)=>setFormData({...formData, email:e.target.value})}   type="text" placeholder='Enter the Email' className='px-2 rounded py-2 outline-0 border w-[90%]' />

//         <input onChange={(e)=>setFormData({...formData, password:e.target.value})}   type="text" placeholder='Enter the password' className='px-2 rounded py-2 outline-0 border w-[90%]' />
//       </div>

//       <h1>NAME: {formData.userName} </h1>
//       <h1>EMAIL: {formData.email} </h1>
//       <h1>PASSWORD: {formData.password} </h1>
      
//     </div>
//   )
// }

// export default App






//   //! BRUTE FORSE APPORACH  


// import React, { useState } from 'react'


// const App = () => {


//   const [userName, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log(userName);
//   console.log(email);
//   console.log(password);

//   return (
//     <div className='w-screen h-screen bg-gray-400 flex justify-center items-center flex-col gap-10'>
//       <div className='w-[80%] px-10 border py-10 flex flex-col gap-10 bg-white rounded-2xl'>

//         <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter the Name'  className='px-2 rounded py-2 outline-0 border w-[90%]'/>

//         <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter the Email' className='px-2 rounded py-2 outline-0 border w-[90%]' />

//         <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter the password' className='px-2 rounded py-2 outline-0 border w-[90%]' />
//       </div>

//       <h1>NAME: {userName} </h1>
//       <h1>EMAIL: {email} </h1>
//       <h1>PASSWORD: {password} </h1>
      
//     </div>
//   )
// }

// export default App