// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  
  React.Children.map(props.children, child => {
    return React.cloneElement(child)
  }
  // 📜 https://react.dev/reference/react/Children
  // 📜 https://react.dev/reference/react/cloneElement
  return <Switch on={on} onClick={toggle} />
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = (on, children) => {
  if(on) {
    return children
  }
}

const ToggleOff = (on, children) => {
  if(!on) {
    return children
  }
}

const ToggleButton = (on, toggle) => {
  return <Switch on={true} toggle={true} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
