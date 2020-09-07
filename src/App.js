import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import './Styling/App.css';

class App extends Component {

  state = {

  }

  componentDidMount() {
    // this.callBackend()
    //   .then(res => this.setState({
    //     devProjects: res[0],
    //     designProjects: res[1]
    //   }))
    //   .catch(err => console.log(err))
  }

  // callBackend = async () => {
  //   const response = await fetch('/upload')
  //   const body = await response.json()
  //
  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body
  // }


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
