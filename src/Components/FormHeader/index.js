import React from 'react';
import PropTypes from 'prop-types';
import './FormHeader.css';

class LoginHeader extends React.Component {
  render() {
    return (
      <div className="form-header">
        <span className="Header-logo-login">{this.props.text}</span>
      </div>
    );
  }
}
// LoginHeader.defaultProps = {
// };
LoginHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
export default LoginHeader;
