import './square.component.scss';

import React, { Component } from 'react';

export default class SquareComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render () {
    return (
      <button 
        className="c-square__button" 
        onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
