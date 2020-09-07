import React, { Component } from 'react';
import Form from './Components/Form';
import Graph from './Components/Graph';

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
