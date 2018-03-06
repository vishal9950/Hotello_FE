import React from 'react';
import PropTypes from 'prop-types';
import './AdminLoginPage.css';
import Login from '../Login';

class AdminLoginPage extends React.Component {
  render() {
    return (
      <div className="admin-login-page">
        <Login />
      </div>);
  }
}
AdminLoginPage.defaultProps = {
};
AdminLoginPage.propTypes = {
};
export default AdminLoginPage;

