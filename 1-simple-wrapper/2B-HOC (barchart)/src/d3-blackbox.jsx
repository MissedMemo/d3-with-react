import React, { Component } from 'react'


export default renderD3 => {
  
  return class extends Component {

    gRef = React.createRef()

    componentDidMount() {
      renderD3.call(this)
    }
  
    componentDidUpdate() {
      renderD3.call(this)
    }
  
    render() {
      const { x, y } = this.props
      return <g transform={ `translate( ${x}, ${y} )` } ref={ this.gRef } />
    }
  }
}
