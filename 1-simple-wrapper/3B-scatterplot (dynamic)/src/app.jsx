import React from 'react'
import ScatterPlot from './scatterplot'

const data = Array.from( {length: 100}, () => [Math.random(), Math.random()] )

const App = () => <svg width={960} height={600} id='svg' >
  <ScatterPlot x={50} y={50} data={data} width={400} height={300} />
</svg>

export default App