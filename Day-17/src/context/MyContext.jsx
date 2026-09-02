import { createContext, useState } from "react";

export const MyShop = createContext();

export const MyContextProvider = ({ children }) => {

    const [productsData, setProductsData] = useState([]);


    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setcartItems] = useState([]);


    const incrementQuantity = (id) => {
        setcartItems((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, quantity: val.quantity + 1 } : val
            })
        })
    }


     const decrementQuantity = (id) => {
        setcartItems((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, quantity: val.quantity - 1 } : val
            }).filter((val)=>val.quantity > 0)
        })
    }


    return <MyShop.Provider value={{ incrementQuantity, decrementQuantity, productsData, setProductsData, isCartOpen, setIsCartOpen, cartItems, setcartItems }}>
        {children}
    </MyShop.Provider>
}