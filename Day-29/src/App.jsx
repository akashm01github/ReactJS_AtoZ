import React, { useRef, useState } from 'react'

const App = () => {

  // const [productsDetails, setProductsDetails] = useState({
  //   productName: "",
  //   price: "",
  //   category: ""
  // })

  // const handelChnage = (e)=>{
  //   setProductsDetails({...productsDetails, [e.target.name]:e.target.value})
  // }


  const productsDetails = useRef({})


  const handelSubmit = (e) => {
    e.preventDefault();

    const obj = {
      productName: productsDetails.current.productName.value,
      price: productsDetails.current.price.value,
      category: productsDetails.current.category.value,

    }

    console.log(obj)
  }

  return (
    <div className='p-10'>
      <form onSubmit={(e) => handelSubmit(e)} action="" className='flex flex-col gap-10'>
        <input ref={(e) => { productsDetails.current.productName = e }} name='productName'
          type="text" placeholder='Enter the Product Name' className='w-[50%] border' />

        <input ref={(e) => { productsDetails.current.price = e }} name='price' type="text" placeholder='Enter the Price' className='w-[50%] border' />

        <select ref={(e) => { productsDetails.current.category = e }} name="category" id="" className='w-[50%] border'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>

        <button className='bg-blue-600 px-5 py-1 w-[50%] border'>Submit</button>
      </form>
    </div>
  )
}

export default App