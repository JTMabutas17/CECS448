import React, { Component } from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
export default class Header extends Component {
   render() {
      return (
         <div className="slide-container">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(./images/lollicup/Ads/flavors.png)`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(./images/lollicup/Ads/delivery.jpg`}}>
            </div>
          </div>
        </Slide>
      </div>
         );
   }
}