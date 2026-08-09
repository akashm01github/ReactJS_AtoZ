import React, { useState } from 'react'

const App = () => {
  console.log("Rendering......");
  const [count, setCount] = useState(0);

  let [user, setUser] = useState(0);


  const handelClick = () => {
    setUser(user++);
  }

  return (
    <div>
      <h1>Hey i am {user}</h1>
      <h1>Count - {count}</h1>
      <button onClick={handelClick}>Change Name</button>
      <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
    </div>
  )
}

export default App