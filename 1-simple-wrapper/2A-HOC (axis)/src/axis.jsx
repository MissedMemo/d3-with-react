import React from 'react'
import * as d3 from 'd3'
import D3BlackBox from './d3-blackbox.jsx'

const Axis = D3BlackBox( function() {

  const scale = d3.scaleLinear()
                  .domain([0,10])
                  .range([0,200])

  const axis = d3.axisBottom(scale)

  d3.select(this.gRef.current).call(axis) // let D3 handle updating the DOM node

})

export default Axis