import React from 'react'

const ProductCards = ({ product, setcartItems }) => {
  const { title, price, image, category, rating } = product
  const fullStars = Math.round(rating?.rate || 0)

  return (
    <div className="flex flex-col w-80  bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="flex items-center justify-center h-48 bg-gray-50 p-4">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <span className="text-xs text-gray-500 capitalize">{category}</span>

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-10">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-sm text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < fullStars ? '★' : '☆'}</span>
          ))}
          <span className="text-gray-400 text-xs ml-1">
            ({rating?.count ?? 0})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-semibold text-gray-900">
            ${price?.toFixed(2)}
          </span>
          <button
            onClick={()=>setcartItems((prev)=>[...prev, product])}
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCards