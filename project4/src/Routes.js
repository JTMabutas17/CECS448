import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Header from './components/Home';
import Menu from './components/Menu';
import Locations from './components/Locations';
import About from './components/About';
import SignIn from './components/SignIn';
import Order from './components/Order';
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Home" component={Header} />
                    <Route path="/Menu" component={Menu} />
                    <Route path="/Locations" component={Locations} />
                    <Route path="/About" component={About} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/Order" component={Order} />
                </Switch>
            </Router>
        )
    }
}
