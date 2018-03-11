import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { userSuspend, userDelete, updateUser, copyAdminUser } from '../../redux/actions/index';
import logo from '../../images/group-26.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isLoggedIn: true,
    };
  }

  onClickHandler = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
    });
  }

  closeDropDown = () => {
    if (this.state.isDropdownOpen) {
      this.setState({
        isDropdownOpen: false,
      });
    }
  }

  doLogout=() => {
    const config = {
      method: 'POST',
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    };
    fetch('/logout', config).then(response => response.text()).then((token) => {
      window.localStorage.setItem('token', token);
      this.setState({ isLoggedIn: false });
    });
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="Header-head" onClick={() => { this.closeDropDown(); }}>
          <img src={logo} className="logoImg" />
          <span className="Header-user">
            <button className="Header-drop-usr-btn" onClick={() => { this.onClickHandler(); }}>
              <i id="Header-user-icon" className="material-icons">person</i>
            </button>
          </span>
          <span className={this.state.isDropdownOpen ? 'Header-drop-opened' : 'Header-drop-closed'}>
            <Link to="/adminMain/edit" >
              <div className="Header-dropdown-items" onClick={() => { this.props.copyAdminUser(); }}>
                Your Profile
              </div>
            </Link>
            <div className="Header-dropdown-line" />
            <div className="Header-dropdown-items" onClick={() => { this.doLogout(); }}>
            Logout
            </div>
          </span>
        </div>
      );
    }

    return <Redirect to="/login" />;
  }
}

Header.propTypes = {
  copyAdminUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  copyAdminUser: () => {
    dispatch(copyAdminUser());
  },
});

export default connect(null, mapDispatchToProps)(Header);
