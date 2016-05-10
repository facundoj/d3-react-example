import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

class Axis extends Component {
    render() {
        let translate = `translate(${this.props.axisMargin - 3}, 0)`;

        return (<g class="axis" transform={translate}></g>);
    }
}

export default Axis;
