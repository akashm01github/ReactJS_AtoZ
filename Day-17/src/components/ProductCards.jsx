import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const ProductCards = ({ product, isInCart }) => {

  const { setcartItems, incrementQuantity, decrementQuantity } = useContext(MyShop);



  const { title, price, image, category, rating } = product
  const fullStars = Math.round(rating?.rate || 0)


  const addToCart = () => {
    setcartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product Added");
  }

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

          {/* BITTON */}

          {
            isInCart && isInCart.quantity > 0?

              <button className='border px-4 py-1 flex gap-5 rounded-2xl text-2xl'>
                <span onClick={() => incrementQuantity(product.id)} className='bg-blue-50 px-2 font-black cursor-pointer rounded-md  hover:bg-orange-400 active:scale-90'>+</span>

                <span>{isInCart.quantity}</span>


                <span onClick={() => decrementQuantity(product.id)} className='bg-blue-50 px-2 font-black cursor-pointer rounded-md  hover:bg-blue-400 active:scale-90' >-</span>

              </button> :


              <button
                onClick={() => addToCart()}
                type="button"
                className="px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
              >
                Add to cart
              </button>
          }


        </div>
      </div>
    </div>
  )
}

export default ProductCards