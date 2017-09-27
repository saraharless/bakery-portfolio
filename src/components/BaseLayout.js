import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import References from './References.js';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <div className='NavBar'>
     <nav>
      <NavLink activeClassName='selected' exact to='/'>Sin Bakery</NavLink>
      <NavLink activeClassName='selected' to='/home'>Home</NavLink>
      <NavLink activeClassName='selected' to='/about'>About</NavLink>
      <NavLink activeClassName='selected' to='/portfolio'>Portfolio</NavLink>
      <NavLink activeClassName='selected' to='/contact'>Contact</NavLink>
      <NavLink activeClassName='selected' to='/references'>References</NavLink>
     </nav>
     </div>
    <div>
    {this.props.children}
    </div>
    </div>
    )
  }
}
