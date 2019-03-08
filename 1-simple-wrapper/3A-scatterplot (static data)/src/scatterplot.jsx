import React from 'react'
import * as d3 from 'd3'

const ScatterPlot = ({x,y,data, width, height}) => {

  const xScale = d3.scaleLinear()
                   .domain([0,1])
                   .range([0,width])

  const yScale = d3.scaleLinear()
                   .domain([0,1])
                   .range([0,height])

  return <g transform={ `translate( ${x}, ${y} )` } >
    { data.map( ([x,y]) =>
      <circle cx={xScale(x)} cy={yScale(y)} r="3" />
    )}
  </g>
}

export default ScatterPlot