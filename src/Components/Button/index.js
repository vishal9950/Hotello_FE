import React, { Component } from 'react';
import './Button.css';

const Button = props => (
  <div>
    <button type="button" onClick={() => { props.onClick(props); }}> Modify </button>
  </div>
);


export default Button;
