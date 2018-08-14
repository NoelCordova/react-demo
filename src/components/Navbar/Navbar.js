import React, { Component } from 'react';
import logo from '../../logo.svg';
import  './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
      </div>
    )
  }
}
