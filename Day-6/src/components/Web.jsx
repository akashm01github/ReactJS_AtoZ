//! OPTIMIZED  APPROACH 

import React, { useState } from 'react'

const Web = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // let obj = {
    //     name: "Akash"
    // }

    // let data = "name";

    // obj[data] = "Aparna";

    // console.log(obj)

    console.log(formData)

    const handelChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]:value })
    }

    return (
        <div style={{ padding: "10px", backgroundColor: "grey" }}>
            <input name='name' onChange={handelChange} type="text" placeholder='Name' />
            <input name='email' onChange={handelChange} type="text" placeholder='email' />
            <input name="password" onChange={handelChange} type="text" placeholder='password' />
        </div>
    )
}

export default Web;




//! BRUTE FORCE

// import React, { useState } from 'react'

// const Web = () => {
//     const [user, setUser] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     console.log(user)
//     console.log(password)
//     console.log(email)
//   return (
//     <div style={{padding:"10px", backgroundColor:"grey"}}>
//         <input onChange={(e)=>setUser(e.target.value)} type="text" placeholder='Name' />
//         <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' />
//         <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' />
//     </div>
//   )
// }

// export default Web




//! BETTER APPROACH
// import React, { useState } from 'react'

// const Web = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     console.log(formData)

//     return (
//         <div style={{ padding: "10px", backgroundColor: "grey" }}>
//             <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder='Name' />
//             <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="text" placeholder='email' />
//             <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="text" placeholder='password' />
//         </div>
//     )
// }

// export default Web 