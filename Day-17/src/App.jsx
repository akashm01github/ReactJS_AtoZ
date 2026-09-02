import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCards';
import CartScreen from './pages/CartScreen';
import { MyShop } from './context/MyContext';

const App = () => {

  const  {productsData,setProductsData, isCartOpen, cartItems} = useContext(MyShop);

  // console.log("Cart Items ->",cartItems);

  // console.log(productsData)

  const getProductsData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products');

      setProductsData(res.data);

    } catch (error) {
      console.log("Error: ", error)
    }
  }

  useEffect(() => {
    getProductsData();
  }, [])


  return (

    <div className='p-3 flex flex-col gap-10  '>
      <Navbar/>



      {isCartOpen ?


        (
          <div>
            <CartScreen/>
          </div>
        )


        :
        (
          <div className='flex gap-10 flex-wrap p-3 justify-center'>
            {
              productsData.map((product) => {

                let isInCart = cartItems.find((val)=> val.id === product.id);

                // console.log(isInCart)

                return <ProductCards product={product} key={product.id} isInCart={isInCart} />
              })
            }
          </div>
        )
      }



    </div>
  )
}

export default App