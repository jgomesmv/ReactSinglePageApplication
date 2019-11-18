import './square.component.scss';

import React, { Component } from 'react';

export default class SquareComponent extends Component { 
  render () {
    return (
      <button 
        className="c-square__button" 
        onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
