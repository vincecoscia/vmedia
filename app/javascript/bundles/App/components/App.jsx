import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Photos from './Photos'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
        <div className="container">
          <Router>
            <div id="content-wrap">
              <Navbar/>
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/photos" component={Photos} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
    )
  }
}

export default App;