import { createContext, useState } from "react";

export const MyShop = createContext();


export const MyContextProvider = ({ children }) => {

    const [isCartOppen, setIsCartOppen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    return (<MyShop.Provider value={{isCartOppen, setIsCartOppen, cartItems, setCartItems}}>
        {children}
    </MyShop.Provider>)
}

