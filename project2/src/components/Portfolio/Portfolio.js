import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let data = this.props.portfolioData;
    return (
      <section id="hokage">
        <ul>
           <li>
             <a href="">Behance</a>
             <img className="hokage-pic"  src="images/Hokage_Hashirama.png" alt="" />
           </li>
           
            <li>
             <a href="">Flickr</a>
             <img className="hokage-pic"  src="images/Tobirama_Senju.png" alt="" />
           </li>
           
            <li>
             <a href="">LinkedIn</a>
             <img className="hokage-pic"  src="images/The_Third_Hokage.png" alt="" />
           </li>
           
           <li>
             <a href="">Faceboook</a>
             <img className="hokage-pic"  src="images/Hokage_Minato.png" alt="" />
           </li>
           
           <li>
             <a href="">Twitter</a>
             <img className="hokage-pic"  src="images/Tsunade_as_Hokage.png" alt="" />
           </li>
           
           <li>
             <a href="">Twitter</a>
             <img className="hokage-pic"  src="images/Sixth_Hokage.png" alt="" />
           </li>
        </ul>
      </section>
    );
  }
}