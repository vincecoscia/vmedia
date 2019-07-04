import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Albums from './Albums'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {

  state = {
    logged_in: this.props.logged_in
  }

  render() {

    console.log(this.state.logged_in)
    return (
        <div className="container">
          <Router>
            <div id="content-wrap">
              <Navbar logged_in={this.state.logged_in}/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/albums" component={Albums} />
                {/* <Route path="/admins/sign_in" /> */}
              </Switch>
            </div>
            <Footer logged_in={this.state.logged_in} />
          </Router>
        </div>
    )
  }

  componentDidMount() {
    const {logged_in} = this.state
    this.setState({ logged_in })
  }
}

export default App;