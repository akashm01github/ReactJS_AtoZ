import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import Productcard from './components/Productcard';
import Cartscreen from './pages/Cartscreen';
import { MyShop } from './context/MyContext';

const App = () => {

  const [productsData, setProductsData] = useState([]);

  const {isCartOppen,cartItems} = useContext(MyShop);



  const getProductsData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProductsData(res.data);
  }

  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <div className='bg-[#EEEEEE] p-3 flex flex-col gap-10'>
      <Navbar/>


      {
        isCartOppen ? (
          <div>
            <Cartscreen/>
          </div>
        ) : (
          <div className='flex flex-wrap gap-10 justify-center'>
            {
              productsData.map((product) => {
                const isInCart = cartItems.find((val)=>val.id == product.id);
                
                return <Productcard isInCart={isInCart} product={product} key={product.id} />
              })
            }
          </div>
        )
      }




    </div>
  )
}

export default App