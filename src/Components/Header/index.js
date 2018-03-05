import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
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

  render() {
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
          <div className="Header-dropdown-items">
            Logout
          </div>
        </span>
      </div>
    );
  }
}

export default Header;
