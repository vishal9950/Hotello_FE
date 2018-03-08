import React, { Component } from 'react';
import './Button.css';

const Button = props => (

  <button className="submitButton" type="button" onClick={() => { props.onClick(props); }}> Modify </button>

);


export default Button;
