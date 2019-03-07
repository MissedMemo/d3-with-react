import React from 'react'
import { render } from 'react-dom'
import Axis from './axis.jsx'

const App = () => <svg width={800} height={400} >
  <Axis x={40} y={50} />
</svg>

render(
  <App />,
  document.getElementById('root')
)