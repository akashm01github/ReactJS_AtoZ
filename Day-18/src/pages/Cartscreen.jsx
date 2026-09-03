import React, { useContext } from 'react'
import Cartcard from '../components/Cartcard'
import { MyShop } from '../context/MyContext'

const Cartscreen = () => {

    const {cartItems} = useContext(MyShop);

    

  return (
    <div className='h-screen  text-black'>

        <div className='flex flex-col gap-4 p-4'>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Cartcard key={item.id ?? index} item={item} />
            ))
          ) : (
            <p className='text-2xl'>Your cart is empty</p>
          )}
        </div>
    </div>
  )
}

export default Cartscreen