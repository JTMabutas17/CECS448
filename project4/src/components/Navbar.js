import React, { Component } from 'react';
// import './Navbar.css';
// import { Navbar, Nav, Form, Button } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#menu">Menu</a></li>
                        <li><a className="smoothscroll" href="#locations">Locations</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>            
                        <li><a className="smoothscroll" href="#signin">Sign In</a></li>
                        <li><a className="smoothscroll" href="#order">Order</a></li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}
