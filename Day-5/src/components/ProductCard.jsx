import React from 'react'

const ProductCard = ({product,deleteProduct}) => {

    
  return (
    <div className='border-2 mt-4 w-75 p-2 flex flex-col gap-2 rounded'>
        <div className='w-full h-40'>
            <img className='w-full h-full object-cover' src={product.image} alt="" />
        </div>

        <h1 className='font-bold'>{product.title.trim()}</h1>
        <p>{product.price}</p>
        <h1>Product Category</h1>

        <button onClick={()=>deleteProduct(product.id)} className='px-5 py-2 text-white bg-red-500 active:scale-80 transition-all cursor-pointer'>Delete</button>
    </div>
  )
}

export default ProductCard