import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoginBody.css';

class LoginBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
      console.log(check.length);
      if (check.length !== 3) {
        window.localStorage.setItem('token', null);
        this.setState({
          username: '',
          password: '',
        });
      } else {
        window.localStorage.setItem('token', token);
        console.log('a:::::::', window.localStorage.getItem('token'));
      }
    });
  }
  render() {
    return (
      <div className="login-body" >
        <input type="email" value={this.state.username} className="login-field" placeholder="Email ID" onChange={event => this.setState({ username: event.target.value })} />
        <input type="password" value={this.state.password} className="login-field" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />

        <button type="button" className="login-field login-button" >
          <Link className="login-button-link" to={(window.localStorage.getItem('token') !== 'null') ? '/adminMain/users' : '/login'} onClick={() => { this.login(); }}>

          LOGIN
          </Link>
        </button>

      </div>);
  }
}
LoginBody.defaultProps = {
};
LoginBody.propTypes = {
};
export default LoginBody;
