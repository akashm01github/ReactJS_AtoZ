import React, { useRef, useState } from 'react'

const Form = () => {
    
    console.log("App Rerendering.......")
    
    const [products, setProducts] = useState({});

    console.log(products)

    const fomrRef = useRef({});

    const handelSubmit = (e)=>{
        e.preventDefault();

        console.log()
        console.log()
        console.log()
        console.log()


        const obj = {
            pName:fomrRef.current.productName.value,
            price: fomrRef.current.price.value,
            category:fomrRef.current.category.value,
            image:fomrRef.current.image.value
        }


        setProducts(obj);
    }



    return (
        <div className='w-80 bg-white'>
            <form onSubmit={handelSubmit} action="" className='flex flex-col gap-4 p-6 rounded'>
                <input ref={(e)=>fomrRef.current.productName = e} className='p-2 border border-gray-400 rounded-md outline-0' type="text" placeholder='Product Name' />
                <input ref={(e)=>fomrRef.current.price = e} className='p-2 border border-gray-400 rounded-md outline-0' type="text" placeholder='Product Price' />
                <span>Select Category</span>
                <select ref={(e)=>fomrRef.current.category = e} name="" id="" className='p-2 border border-gray-400 rounded-md outline-0'>
                    <option value="mens">Mens</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </select>

                <input ref={(e)=>fomrRef.current.image = e} className='p-2 border border-gray-400 rounded-md outline-0' type="text" placeholder='Product Iamge' />
                <button className='bg-blue-600 text-white p-2 text-xl font-semibold rounded'>Create</button>
            </form>
        </div>
    )
}

export default Form;