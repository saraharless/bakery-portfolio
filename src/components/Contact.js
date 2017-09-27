import React, { Component } from 'react';

export default class Contact extends Component {
  render() {

    let imgStyle = {
      height:400,
      padding: 20
    };

    return (
      <div className="contact">

      <h1>Contact Us</h1>
      <h3>We are located in Austin, Texas</h3>
      <p>sinbakery@gmail.com</p>
      <p>555 512-9999</p>
      <p><a href="https://github.com">Github</a></p>
      <p><a href="httpL//facebook.com">Facebook</a></p>


      </div>
    );
  }
}
