import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Locations from "./Locations/Locations";
import About from "./About/About";
import SignIn from "./SignIn/SignIn";
import Order from "./Order/Order";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
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
