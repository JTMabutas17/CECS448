import React, { Component } from 'react';
export default class Header extends Component {
   render() {
      return (
         <React.Fragment>
         <section id="home">
         <div className ="slideshow-container">

         <div className ="mySlides">
         <div className ="numbertext">1 / 3</div>
         <img src="../images/lollicup/Ads/flavors.png" style={{width:"100%"}}/>
         <div className ="text">Caption Text</div>
         </div>

         <div className ="mySlides">
         <div className ="numbertext">2 / 3</div>
         <img src="../images/lollicup/Ads/delivery.jpg" style={{width:"100%"}}/>
         <div className ="text">Caption Two</div>
         </div>

         <a className ="prev" onclick="plusSlides(-1)">&#10094;</a>
         <a className ="next" onclick="plusSlides(1)">&#10095;</a>
         </div>
         <br/>
         </section>
         </React.Fragment>
         );
   }
}