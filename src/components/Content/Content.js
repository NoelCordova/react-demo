import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <p className="main">
          { this.props.content }
        </p>
      </div>
    )
  }
}
