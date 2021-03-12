import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let data = this.props.portfolioData;
    return (
      <section id="hokage">
        <div className="hokage-content">
          <ul>
            <li>
              <img className="hokage-pic" src="images/Hokage_Hashirama.png" alt="" />
            </li>

            <li>
              <img className="hokage-pic" src="images/Tobirama_Senju.png" alt="" />
            </li>

            <li>
              <img className="hokage-pic" src="images/The_Third_Hokage.png" alt="" />
            </li>

            <li>
              <img className="hokage-pic" src="images/Hokage_Minato.png" alt="" />
            </li>

            <li>
              <img className="hokage-pic" src="images/Tsunade_as_Hokage.png" alt="" />
            </li>

            <li>
              <img className="hokage-pic" src="images/Sixth_Hokage.png" alt="" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}