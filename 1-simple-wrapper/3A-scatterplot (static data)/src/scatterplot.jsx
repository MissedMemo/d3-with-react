import React from 'react'
import * as d3 from 'd3'

const xScale = d3.scaleLinear()
                 .domain([0,1])
                 .range([0,300])

const yScale = d3.scaleLinear()
                 .domain([0,1])
                 .range([0,200])

const ScatterPlot = ({x,y,data}) =>
  <g transform={ `translate( ${x}, ${y} )` } >
    { data.map( ([x,y]) =>
      <circle cx={xScale(x)} cy={yScale(y)} r="3" />
    )}
  </g>

export default ScatterPlot