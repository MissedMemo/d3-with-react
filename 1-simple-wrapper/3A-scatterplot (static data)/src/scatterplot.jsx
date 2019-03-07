import React from 'react'
import * as d3 from 'd3'

const ScatterPlot = ({x,y,data}) =>
  <g transform={ `translate( ${x}, ${y} )` } >
    { data.map( ([x,y]) => <circle cx={x} cy={y} r="3" /> ) }
  </g>

export default ScatterPlot