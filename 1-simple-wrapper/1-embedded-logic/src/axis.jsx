import React, { Component } from 'react'
import * as d3 from 'd3'

class Axis extends Component {
  gRef = React.createRef()

  componentDidMount() {
    this.renderD3()
  }

  componentDidUpdate() {
    this.renderD3() // explicitly re-render, since DOM updated by D3, not React
  }

  renderD3 = () => {
    const scale = d3.scaleLinear()
                    .domain([0,10])
                    .range([0,200])
    const axis = d3.axisBottom(scale)
    d3.select(this.gRef.current).call(axis) // let D3 handle updating the DOM node
  }

  render() {
    const { y } = this.props
    return <g transform={ `translate( 10, ${y} )` } ref={ this.gRef } />
  }
}

export default Axis