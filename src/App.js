import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import './Styling/App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
