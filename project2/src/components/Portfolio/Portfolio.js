import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let data = this.props.portfolioData;
    return (
      <section id="hokage">
        <div className="hokage-container">
          {/* <div className="hokage-content"> */}
            <ul>
              <li>
                <div className="hokage-pic hashirama" >
                  <p>First hokage</p>
                </div>
              </li>

              <li>
                <img className="hokage-pic" src="images/Tobirama_Senju.png" alt="" />
                <p>Second hokage</p>
              </li>

              <li>
                <img className="hokage-pic" src="images/The_Third_Hokage.png" alt="" />
                <p>Third hokage</p>
              </li>

              <li>
                <img className="hokage-pic" src="images/Hokage_Minato.png" alt="" />
                <p>Fourth hokage</p>
              </li>

              <li>
                <img className="hokage-pic" src="images/Tsunade_as_Hokage.png" alt="" />
                <p>Fifth hokage</p>
              </li>

              <li>
                <img className="hokage-pic" src="images/Sixth_Hokage.png" alt="" />
                <p>Sixth hokage</p>
              </li>
            </ul>
          {/* </div> */}
        </div>
      </section>
    );
  }
}