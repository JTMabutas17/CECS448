import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Order extends Component {
  render() {
    return (
      <section id="order">
        <div className="order-container">
      <div className="row">
      <div className="col-75">
      <div className="container">
      <form action="/action_page.php">

      <div className="row">
      <div className="col-50">
      <h3>Order Form</h3>
      <label for="fname">Drink Base</label>
      <input type="text" id="fname" name="firstname" value="John M. Doe" disabled />
      <label for="email">Drink Flavor</label>
      <input type="text" id="email" name="email" value="john@example.com" disabled/>
      <label for="adr">Toppings</label>
      <input type="text" id="adr" name="address" value="542 W. 15th Street" disabled />

      <div className="row">
      <div className="col-50">
      <label for="state">Sweetness Level</label>
      <input type="text" id="state" name="state" value="CA" disabled />
      </div>
      <div className="col-50">
      <label for="zip">Ice Level</label>
      <input type="text" id="zip" name="zip" value="10001" disabled />
      </div>
      </div>
      </div>

      </div>
      <br/>
      <Link>
      <p className="btn">Add Drink</p>
      </Link>
      <Link to="/Checkout">
      <p className="btn">Continue to Checkout</p>
      </Link>
      </form>
      </div>
      </div>
      </div>
      </div>
      </section>
    );
  }
}