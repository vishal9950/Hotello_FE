import React from 'react';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> Add React router for 'Your Profile'
import './Header.css';

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
<<<<<<< HEAD
    if (this.state.isLoggedIn) {
      return (
        <div className="Header-head" onClick={() => { this.closeDropDown(); }}>
          <span className="Header-logo">Hotello</span>
          <span className="Header-user">
            <button className="Header-drop-usr-btn" onClick={() => { this.onClickHandler(); }}>
              <i id="Header-user-icon" className="material-icons">person</i>
            </button>
          </span>
          <span className={this.state.isDropdownOpen ? 'Header-drop-opened' : 'Header-drop-closed'}>
            <div className="Header-dropdown-items">
            Your Profile
            </div>
            <div className="Header-dropdown-line" />
            <div className="Header-dropdown-items" onClick={() => { this.doLogout(); }}>
=======
    return (
      <div className="Header-head" onClick={() => { this.closeDropDown(); }}>
        <span className="Header-logo">Hotello</span>
        <span className="Header-user">
          <button className="Header-drop-usr-btn" onClick={() => { this.onClickHandler(); }}>
            <i id="Header-user-icon" className="material-icons">person</i>
          </button>
        </span>
        <span className={this.state.isDropdownOpen ? 'Header-drop-opened' : 'Header-drop-closed'}>
          <Link to="/adminProfile">
            <div className="Header-dropdown-items">
            Your Profile
            </div>
          </Link>
          <div className="Header-dropdown-line" />
          <div className="Header-dropdown-items">
>>>>>>> Add React router for 'Your Profile'
            Logout
            </div>
          </span>
        </div>
      );
    }

    return <Redirect to="/login" />;
  }
}

export default Header;
