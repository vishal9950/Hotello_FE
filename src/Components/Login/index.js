import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import LoginBody from '../LoginBody';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <LoginBody />
      </div>);
  }
}
Login.defaultProps = {
};
Login.propTypes = {
};
export default Login;
