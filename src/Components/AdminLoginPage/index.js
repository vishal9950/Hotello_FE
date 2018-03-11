import React from 'react';
import PropTypes from 'prop-types';
import './AdminLoginPage.css';
import Login from '../Login';
import FormHeader from '../FormHeader';

class AdminLoginPage extends React.Component {
  render() {
    window.localStorage.setItem('token', null);
    return (
      <div className="admin-login-page">
        <FormHeader text="hotello" />
        <Login />
      </div>);
  }
}
AdminLoginPage.defaultProps = {
};
AdminLoginPage.propTypes = {
};
export default AdminLoginPage;
