import React, { useRef } from 'react'

const App = () => {
  const inpRef = useRef({});


  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inpRef.current.productName.value)
    console.log(inpRef.current.price.value)
    console.log(inpRef.current.image.value)
  }


  return (
    <div>
      <form onSubmit={handelSubmit} action="" className='bg-gray-300 px-10 flex flex-col gap-10 py-5'>
        <input ref={(e)=>(inpRef.current.productName = e)} type="text" className='border px-2 py-1' placeholder='enter the name' />
        <input ref={(e)=>(inpRef.current.price = e)} type="text" className='border px-2 py-1' placeholder='enter the price' />
        <input ref={(e)=>(inpRef.current.image = e)} type="text" className='border px-2 py-1' placeholder='enter the image' />
        <button className='border px-5 py-1'>Submit</button>
      </form>
    </div>
  )
}

export default App