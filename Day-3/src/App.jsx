import React from 'react'
import About from './About'

const App = () => {
  return (
    <div>
      <h1>React Day-3</h1>
      <About name="Akash" age="25" work="Developer">
        <h1>Hello Akash Sir</h1>
      </About>
    </div>
  )
}

export default App;





//  const ui = React.createElement("div", {}, [
//     React.createElement("h1",{}, "This is Heading-1"),
//     React.createElement("h2",{}, "This is Heading-2"),
//   ])
//   return ui;