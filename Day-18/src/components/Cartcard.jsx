import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const Cartcard = ({ item }) => {

    const { incrementQuantity,decrementQuantity } = useContext(MyShop);

    return (
        <div className='flex items-center justify-between bg-white rounded-lg shadow p-3'>
            <div className='flex items-center gap-3'>
                {item.image && (
                    <img
                        src={item.image}
                        alt={item.name}
                        className='w-16 h-16 object-cover rounded'
                    />
                )}
                <div>
                    <h2 className='font-semibold text-blue-700'>{item.title}</h2>
                    <p className='font-bold'>₹{item.price}</p>
                </div>
            </div>

            <div className='flex items-center gap-3'>
                <button
                    onClick={() => decrementQuantity(item.id)}
                    className='w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300'
                >
                    -
                </button>

                <span className='w-6 text-center'>{item.quantity}</span>

                <button
                    onClick={() => incrementQuantity(item.id)}
                    className='w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300'
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Cartcard