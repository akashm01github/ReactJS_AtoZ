import React from 'react'

const App = () => {
  let reactElement = React.createElement("div", {}, [
    React.createElement("h1", {}, "Hi"),
    React.createElement("h2", {}, "Hello"),
    React.createElement("h3", {}, "Jay Sri Ram")
  
  ])

  return reactElement
}

export default App