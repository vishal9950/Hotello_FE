import React from 'react';
import PropTypes from 'prop-types';
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
        username: this.state.username,
        password: this.state.password,
      }),
    };
    fetch('/publicLogin', config).then(response => response.text()).then(console.log);
  }
  render() {
    return (
      <div className="login-body" >
        <input type="email" className="login-field" placeholder="Email ID" onChange={event => this.setState({ username: event.target.value })} />
        <input type="password" className="login-field" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
        <button type="button" className="login-field login-button" onClick={() => { this.login(); }}>LOGIN</button>
      </div>);
  }
}
LoginBody.defaultProps = {
};
LoginBody.propTypes = {
};
export default LoginBody;
