import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext';

const Home = () => {
    console.log("Home is Rendering.........");

    const { count, setCount } = useContext(MyShop);

    return (
        <div>
            <h1>Home-{count}</h1>
            <button onClick={()=>setCount(count+1)} className='bg-orange-500 p-2 mt-5 text-white cursor-pointer active:scale-90 rounded'>Increment</button>
        </div>
    )
}

export default Home