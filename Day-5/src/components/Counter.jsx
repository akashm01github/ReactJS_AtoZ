import React, { useState } from 'react'


const Counter = () => {
    let [count, serCount] = useState(0);
    return (
        <div>
            <h1 className='text-2xl mb-5 mt-5'>Counter - {count}</h1>
            <button className='bg-red-600 text-xl text-white px-5 py-2 active:scale-80 transition-all' onClick={() => {
                serCount((prev) => prev + 1);
                serCount((prev) => prev + 1);
                serCount((prev) => prev + 1);
            }}>Click Here</button>
        </div>
    )
}

export default Counter