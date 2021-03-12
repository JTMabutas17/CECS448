import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import resumeData from './components/Resume/ResumeData';
import portfolioData from './components/Portfolio/PortfolioData';
import aboutData from './components/About/AboutData';
import headerData from './components/Header/HeaderData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerData={headerData}/>
        <About aboutData={aboutData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio portfolioData={portfolioData}/>
      </div>
    );
  }
}

export default App;