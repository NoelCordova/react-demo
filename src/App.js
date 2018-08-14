import React, { Component } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Content content="Esto es un texto que se muestra de manera específica!"/>
        <Content content="Esto es otro ejemplo de un texto."/>
      </div>
    );
  }
}
