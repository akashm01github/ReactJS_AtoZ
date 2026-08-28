import { createContext, useState } from "react";

export const MyShop = createContext();


//! MAKING PROVIDER

export const MycontextProvider = ({ children }) => {

    console.log("Context is Rendering.........");

    const [count, setCount] = useState(0)

    return <MyShop.Provider value={{ count, setCount }}>
        {children}
    </MyShop.Provider>
}

