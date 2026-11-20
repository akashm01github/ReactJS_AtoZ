import React from 'react'

const ProductCard = ({ product,deleteProduct }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">

      {/* Image */}
      <div className="relative h-56 bg-gray-50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-12">
          {product.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
        </div>

        <button onClick={()=>deleteProduct(product.id)} className="mt-5 w-full bg-red-500 hover:bg-red-600 active:scale-95 text-white font-medium py-2.5 rounded-lg transition cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  )
}

export default ProductCard