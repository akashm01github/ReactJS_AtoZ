import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='px-[5%] py-[2%]'>
        <h1 className='mb-2 text-3xl'>Count -  {count} </h1>
        <button onClick={()=>{
            setCount((prev)=>prev+1);
            console.log("Component Re-render.......")
            
        }} className='bg-blue-600 rounded text-2xl px-6 py-1 active:scale-90'>Increment</button>
    </div>
  )
}

export default Counter