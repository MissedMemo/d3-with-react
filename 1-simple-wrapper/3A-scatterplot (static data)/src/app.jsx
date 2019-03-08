import React from 'react'
import ScatterPlot from './scatterplot'

const data = Array.from( {length: 100}, () => [Math.random(), Math.random()] )

const App = () => <svg width={800} height={800} id='svg' >
  <ScatterPlot x={50} y={50} data={data} width={300} height={200} />
</svg>

export default App