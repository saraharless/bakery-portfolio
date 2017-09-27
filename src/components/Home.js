import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import drakeoncake from '../images/drakeoncake.jpg';

export default class Home extends Component {
  render() {

    let imgStyle = {
      height:400,
      padding: 20
    };

    return (
      <div className="home">
      <h1>Sin Bakery</h1>
      <img src={drakeoncake} style={imgStyle} alt="drake on cake trend"></img>
      <p>Baked Goods that will not make you feel bad.</p>
      <button className="btn"><Link to="./About">View Our Mission Statment</Link></button>
      </div>
    );
  }
}
