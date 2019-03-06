import React from 'react'
import { render } from 'react-dom'
import Axis from './axis.jsx'

const App = () => <svg width={300} height={250} >
  <Axis />
</svg>

render(
  <App />,
  document.getElementById('root')
)