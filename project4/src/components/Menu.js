import React, { Component } from 'react';

export default class Hokage extends Component {
  render() {
    return (
      <section id="menu">
      <h1 className="hokages-header">Menu</h1>
        <div className="hokage-container">
          <div className="container">
            <div className="card">
              <img src="images/lollicup/Drinks/black-tea.png" />
              <div className="card__head">Black Tea</div>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/flavored-milk.png" />
              <div className="card__head">Flavored Milk</div>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/green-tea.png" />
              <div className="card__head">Green Tea</div>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/iced-coffee.png" />
              <div className="card__head">Iced Coffee</div>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/juice.png" />
              <div className="card__head">Juice</div>
            </div>
            <div className="card">
              <img src="images/lollicup/Drinks/milk-tea.png" />
              <div className="card__head">Milk Tea</div>
            </div>
          </div>
        </div>
      
        <p className="scrolldown">
          <a className="smoothscroll" href="#menu"><i className="icon-up-circle"></i></a>
        </p>
      
      </section>
    );
  }
}