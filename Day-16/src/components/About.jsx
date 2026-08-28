import React, { useContext, useEffect } from 'react'
import { MyShop } from '../context/MyContext';

const About = () => {

    const interVal = setInterval(() => {
        console.log("Hey i am in About😁")
    }, 1000);


    useEffect(() => {
        console.log("About is Rendering.........");

        return () => {
            clearInterval(interVal);
            console.log("I am Triggred because About Chole Geche......")
        }
    }, [])

    return (
        <div>
            <h1>This is About</h1>
        </div>
    )
}

export default About