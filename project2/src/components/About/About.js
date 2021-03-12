import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let data = this.props.aboutData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h1>About Naruto</h1>
               <p>
               {
                 data.aboutme
               }
               </p>
            </div>
         </div>
      </section>
    );
  }
}