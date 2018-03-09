import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Field.css';

const Field = (props) => {
  if (!props.pattern) {
    if (props.type === 'email') {
      return (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          className="inputField"
          onChange={(event) => {
            props.update(event.target.value);
          }}
          readOnly
        />
      );
    }
    return (
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
  }
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      className="inputField"
      onChange={(event) => {
          props.update(event.target.value);
        }}
      pattern={props.pattern}
    />
  );
};


Field.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  pattern: PropTypes.func,
};

Field.defaultProps = {
  pattern: null,
};

export default Field;
