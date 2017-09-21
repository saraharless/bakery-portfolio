import React, { Component } from 'react';
import cake1 from '../images/cake1.jpg';
import cake2 from '../images/cake2.jpg';
import cake3 from '../images/cake3.jpg';
import cake4 from '../images/cake4.jpg';

export default class Portfolio extends Component {
  render() {
    let imgStyle = {
      height:400,
      padding: 20
    };
    return(

      <div>

      <h1>A Sampling of Our Cakes</h1>

      <img src={cake1} style={imgStyle} alt="watercolor wedding cake"></img>
      <img src={cake2} style={imgStyle} alt="cake"></img>
      <img src={cake3} style={imgStyle} alt="cake"></img>
      <img src={cake4} style={imgStyle} alt="cake"></img>

      </div>

    )
  }
}
