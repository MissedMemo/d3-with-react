import React from 'react'
import { render } from 'react-dom'
import BarChart from './barchart.jsx'

const App = () => <svg width={960} height={600} id='svg' >
  <BarChart x={40} y={50} width={600} height={400} />
</svg>

render(
  <App />,
  document.getElementById('root')
)