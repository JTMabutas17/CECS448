import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class DrinkBase extends Component {
  render() {
    return (
      <section id="menu">
        <h1 className="menus-header">Step 1: Drink Base</h1>
        <div className="menu-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Drinks/black-tea.png" />
              <p>Black Tea</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/flavored-milk.png" />
              <p>Flavored Milk</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/green-tea.png" />
              <p>Green Tea</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/iced-coffee.png" />
              <p>Iced Coffee</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/juice.png" />
              <p>Juice</p>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/milk-tea.png" />
              <p>Milk Tea</p>
            </div>
          </div>
        </div>


        <div className="btn-container">
          <Link to="/DrinkFlavor">
            <p className="btn" onclick="myFunction()">Next Step</p>
          </Link>
          <Link to="/checkout">
            <p className="btn" onclick="myFunction()">Checkout</p>
          </Link>
        </div>
      </section>
    );
  }
}