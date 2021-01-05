import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UploadForm from './Components/UploadForm'
import GraphForm from './Components/GraphForm'
import Profile from './Components/Profile'

import Login from './Components/Login'
import Register from './Components/Register'

import './Styling/App.scss'

function App() {

  return (
    <BrowserRouter>

        <div className='App'>
          <Navbar />
          <div className='main-container'>
            <Switch>
              <Route component={Home} path='/' exact/>
              <Route component={UploadForm} path='/upload'/>
              <Route component={GraphForm} path='/graph'/>
              <Route component={Profile} path='/profile/:id'/>
              <Route component={Login} path='/login'/>
              <Route component={Register} path='/register'/>
            </Switch>
          </div>


        </div>

    </BrowserRouter>
  );
}

export default App;
