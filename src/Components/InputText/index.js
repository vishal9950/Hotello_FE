import React from 'react';
import { PropTypes } from 'prop-types';
import './InputText.css';

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    InputText.propTypes = {
      placeholder: PropTypes.string,
    };

    InputText.defaultProps = {
      placeholder: '',
    };
  }

  render() {
    return (
      <input className="InputText-input" type="text" placeholder={this.props.placeholder} />
    );
  }
}

export default InputText;
