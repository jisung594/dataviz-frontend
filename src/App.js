import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Form from './Components/Form'
import Graph from './Components/Graph'
import Profile from './Components/Profile'
import './Styling/App.scss'

function App() {

  return (
    <BrowserRouter>

        <div className="App">
          <Navbar />
          <div className="main-container">
            <Switch>
              <Route component={Home} path="/" exact/>
              <Route component={Form} path="/form" />
              <Route component={Graph} path="/graph" />
              <Route component={Profile} path="/profile" />
            </Switch>
          </div>


        </div>

    </BrowserRouter>
  );
}

export default App;
