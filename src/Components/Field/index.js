import React, { Component } from 'react';
import './Field.css';

const Field = props => (
  <input
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    value={props.value}
    className="inputField"
    onChange={(event) => {
      props.update(event.target.value);
    }}
  />
);


export default Field;
