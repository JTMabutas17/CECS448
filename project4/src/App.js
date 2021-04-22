import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Header from './components/Home';
import Menu from './components/Menu';
import Locations from './components/Locations';
import About from './components/About';
import SignIn from './components/SignIn';
import Order from './components/Order';
import Checkout from './components/Checkout';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Locations" component={Locations} />
            <Route path="/About" component={About} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Order" component={Order} />
            <Route path="/Checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;