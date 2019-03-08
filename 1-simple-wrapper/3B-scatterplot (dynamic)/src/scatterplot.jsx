import React from 'react'
import * as d3 from 'd3'
import ChartAxis from './chart-axis'

const ScatterPlot = ({x,y,data, width, height}) => {

  const xScale = d3.scaleLinear()
                   .domain([0,1])
                   .range([0,width])

  const yScale = d3.scaleLinear()
                   .domain([0,1])
                   .range([0,height])

  return <g transform={ `translate( ${x}, ${y} )` } >
    { data.map( ([x,y]) =>
      <circle cx={xScale(x)} cy={yScale(y)} r="5" />
    )}
    <ChartAxis x={0} y={0} scale={yScale} location="Left" />
    <ChartAxis x={0} y={height} scale={xScale} location="Bottom" />
  </g>
}

export default ScatterPlot