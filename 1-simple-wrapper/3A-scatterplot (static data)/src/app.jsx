import React from 'react'
import ScatterPlot from './scatterplot'

const data = Array(100).fill( [Math.random(), Math.random()] )

const App = () => <svg width={960} height={600} id='svg' >
  <ScatterPlot x={10} y={10} data={data} />
</svg>

export default App