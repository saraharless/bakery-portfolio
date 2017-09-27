import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../components/BaseLayout.js';
import About from '../components/About.js';
import Home from '../components/Home.js';
import Portfolio from '../components/Portfolio.js'
import Contact from '../components/Contact.js';
import References from '../components/References.js';
import apple from '../images/apple.jpg'

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={apple} alt="photo of bakery"/>
      </div>
    );
  }
}
