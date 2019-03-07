import React from 'react'
import { render } from 'react-dom'
import ScatterPlot from './scatterplot.jsx'

const App = () => <svg width={960} height={600} id='svg' >
  <ScatterPlot x={40} y={50} width={600} height={400} />
</svg>

render(
  <App />,
  document.getElementById('root')
)