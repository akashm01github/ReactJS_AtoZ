import React from 'react'

import myNameIsTwo, {one, three, four} from './test'

const App = () => {

  myNameIsTwo();

  one();

  three();

  four();

  return (
    <div>App</div>
  )
}

export default App