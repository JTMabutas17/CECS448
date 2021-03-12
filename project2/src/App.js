import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import About from './components/About';
import Abilities from './components/Abilities';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <hr />
        <Abilities />
        <hr />
        <Portfolio />
      </div>
    );
  }
}

export default App;