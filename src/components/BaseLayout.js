import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import About from './About.js';
import Portfolio from './Portfolio.js';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <div className="NavBar">
     <nav>
      <NavLink to='/'>Sin Bakery</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
     </nav>
     </div>
    <div>
    {this.props.children}
    </div>
    </div>
    )
  }
}
