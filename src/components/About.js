import React, { Component } from 'react';
import bakery from '../images/bakery.jpg';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {

    let imgStyle = {
      height:400,
      padding: 20
    };

    return(

      <div className="about">

      <h1>About Our Cakes</h1>
      <img src={bakery} style={imgStyle} alt="photo of bakery"/>
      <p>Sin: <i>without</i></p>
      <p>Our cakes are designed for every type of diet, including gluten free, dairy free, paleo, and Whole30.</p>

      <button className="btn"><Link to="./Portfolio">View Our Cakes</Link></button>

      </div>
    );
  }
}
