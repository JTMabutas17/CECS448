import React, { Component } from 'react';
export default class Header extends Component {
   render() {
      return (
         <React.Fragment>
            <section id="home">
               <header>
                  <div className="row banner">
                     <div className="banner-text">
                        <h1 className="responsive-headline">Lollicup Fresh</h1>
                        <hr />
                        <h3>
                           Home Page Template
                        </h3>
                     </div>
                  </div>

                  {/* <p className="scrolldown">
                     <a className="smoothscroll" href="#home"><i className="icon-up-circle"></i></a>
                  </p> */}

               </header>
            </section>
         </React.Fragment>
      );
   }
}