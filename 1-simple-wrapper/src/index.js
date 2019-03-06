import React from 'react'
import { render } from 'react-dom'
//import Axis from './axis'

const App = () => <svg width={300} height={250} style={{ backgroundColor: 'green' }}></svg>

render(
  <App />,
  document.getElementById('root')
)