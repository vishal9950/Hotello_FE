import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => (

  <button className="submitButton" type="submit" onClick={() => { props.onClick(props); }}> Modify </button>

);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
