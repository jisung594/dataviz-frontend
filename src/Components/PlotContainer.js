import React, { Component } from 'react';
import Form from './Form';
import Graph from './Graph';

class PlotContainer extends Component {
  render(){
    return (
      <div className="plot-container">
        <Form />
        <Graph />
      </div>
    );
  }
}

export default PlotContainer;
