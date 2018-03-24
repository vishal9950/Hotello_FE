import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAdminUser } from '../../redux/actions';
import './LoginBody.css';

class LoginBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      invalidCredentials: false,
    };
  }
  login=() => {
    const config = {
      method: 'post',
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    };
    fetch('/adminLogin', config).then(response => response.text()).then((token) => {
      const check = token.split('.');
      if (check.length !== 3) {
        window.localStorage.setItem('token', null);
        this.setState({
          username: '',
          password: '',
          invalidCredentials: true,
        });
      } else {
        window.localStorage.setItem('token', token);
        fetch('/adminDetails', {
          method: 'GET',
          headers: {
            authorization: window.localStorage.getItem('token'),
          },
        }).then(user => user.json()).then((data) => {
          console.log('admin data', data);
          this.props.updateAdminUser(data);
        });
        this.setState({
          username: '',
          password: '',
          isLoggedIn: true,
          invalidCredentials: false,
        });
      }
    });
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="login-body" >
        Sign In
          <input type="email" required value={this.state.username} className="login-field" placeholder="Email ID" onChange={event => this.setState({ username: event.target.value })} />
          <input type="password" required value={this.state.password} className="login-field" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
          <div className={this.state.invalidCredentials === true ? 'Invalid' : 'Valid'}> Invalid Credentials!</div>
          <button type="button" className="login-button" onClick={() => { this.login(); }}>
          Login
          </button>

        </div>);
    }

    return <Redirect to="/adminMain/users" />;
  }
}
LoginBody.defaultProps = {
};
LoginBody.propTypes = {
  updateAdminUser: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  updateAdminUser: (data) => {
    dispatch(updateAdminUser(data));
  },

});
export default connect(null, mapDispatchToProps)(LoginBody);
