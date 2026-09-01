import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCards';
import CartScreen from './pages/CartScreen';

const App = () => {

  const [productsData, setProductsData] = useState([]);


  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setcartItems] = useState([]);

  console.log("Cart Items ->",cartItems);



  console.log(productsData)

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
      <Navbar setIsCartOpen={setIsCartOpen} />



      {isCartOpen ?


        (
          <div>
            <CartScreen cartItems={cartItems} />
          </div>
        )


        :
        (
          <div className='flex gap-10 flex-wrap p-3 justify-center'>
            {
              productsData.map((product) => {
                return <ProductCards setcartItems={setcartItems} product={product} key={product.id} />
              })
            }
          </div>
        )
      }



    </div>
  )
}

export default App