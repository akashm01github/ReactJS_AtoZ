import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const CartsCards = ({item}) => {

    const {incrementQuantity, decrementQuantity} = useContext(MyShop);

    return (
        <div
            key={item.id}
            className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
        >
            {/* Product Image */}
            <div className="h-28 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:w-28">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="flex flex-1 flex-col">
                <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                </h2>

                <p className="mt-1 text-lg font-bold text-gray-900">
                    ₹{item.price}
                </p>

                {/* Quantity */}
                <div className="mt-3 flex items-center gap-3">
                    <button onClick={()=>decrementQuantity(item.id)}  className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
                        -
                    </button>

                    <span className="font-medium">
                        {item.quantity}
                    </span>

                    <button onClick={()=>incrementQuantity(item.id)} className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
                        +
                    </button>
                </div>
            </div>

            {/* Remove */}
            <button className="self-start text-sm font-medium text-red-500 hover:text-red-600 sm:self-center">
                Remove
            </button>
        </div>
    )
}

export default CartsCards