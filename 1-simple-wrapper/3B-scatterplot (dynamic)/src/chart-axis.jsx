import React, { Component } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Text = styled.text`
    fill: black;
    font-family: sans-serif;
    font-size: 10px;
`;

class ChartAxis extends Component {
  constructor() {
    super();
    this.gRef = React.createRef();
  }

  componentDidUpdate() {
    this.d3Render();
  }

  componentDidMount() {
    this.d3Render();
  }

  d3Render() {
    const { location } = this.props;

    d3.select(this.gRef.current).call(d3[`axis${location}`](this.props.scale));
  }
  a;
  get labelPos() {
    const { location, scale } = this.props;

    switch (location) {
      case "Top":
        return { x: scale.range()[1] + 20, y: 0 };
      case "Right":
        return { x: 20, y: 0 };
      case "Bottom":
        return { x: scale.range()[1] + 25, y: 25 };
      case "Left":
        return { x: -25, y: 0 };
    }
  }

  render() {
    const { x, y, label } = this.props;

    return (
      <g ref={this.gRef} transform={`translate(${x}, ${y})`}>
        <Text {...this.labelPos}>{label}</Text>
      </g>
    );
  }
}

export default ChartAxis;
