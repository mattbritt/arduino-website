import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SoftwarePage from './pages/SoftwarePage';
import HardwarePage from './pages/HardwarePage';
import ProjectsPage from './pages/ProjectsPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
 
        <NavBar />


        <Route exact path='/' component={HomePage} />
        <Route path='/software' component={SoftwarePage} />
        <Route path='/hardware' component={HardwarePage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/about' component={AboutPage} />
      </div>
      </Router>
    );
  }
}

export default App;
