import { createContext, useState } from "react"

export const MyShop = createContext();



export const MyContextProvider = ({ children }) => {

    const [isCartOppen, setIsCartOppen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const incrementQuantity = (id) => {
        setCartItems((elem) => {
            return elem.map((val) => {
                return val.id == id ? { ...val, quantity: val.quantity + 1 } : val;
            })
        })
    }


      const decrementQuantity = (id) => {
        setCartItems((elem) => {
            return elem.map((val) => {
                return val.id == id ? { ...val, quantity: val.quantity - 1 } : val;
            }).filter((item)=>item.quantity > 0)
        })
    }

    return <MyShop.Provider value={{ isCartOppen, setIsCartOppen, cartItems, setCartItems, incrementQuantity, decrementQuantity }}>
        {children}
    </MyShop.Provider>
}




