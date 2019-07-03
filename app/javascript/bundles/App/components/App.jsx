import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Photos from './Photos'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/photos" component={Photos} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;