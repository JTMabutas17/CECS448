import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Resume />
        <Portfolio />
      </div>
    );
  }
}

export default App;