import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/locations">Location</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/order">Order</Link></li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}