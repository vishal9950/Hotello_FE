import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeLink: 1 };
  }
  closeSideBar = () => {
    this.props.changeSidebarStyle({ display: 'none' });
  }
  changeLinkStyle = (linkId) => {
    this.setState({
      activeLink: linkId,
    });
  }
  render() {
    // if (this.state.location.pathname === 'http://localhost:3001/adminMain/users' && this.state.activeLink === 2) {
    //   this.changeLinkStyle(1);
    // }
    // if (this.state.location.pathname === 'http://localhost:3001/adminMain/bookings' && this.state.activeLink === 1) {
    //   this.changeLinkStyle(2);
    // }

    if (this.props.link !== this.state.activeLink) {
      this.setState({
        activeLink: this.props.link,
      });
    }
    return (
      <div
        className="navbar"
      >
        {/* <button className="w3-button w3-xlarge w3-hide-large hamburger" onClick={this.closeSideBar}>&#9776;</button> */}
        <Link className="NavbarLink" to="/adminMain/users" >
          <button
            className="linky "
            style={this.state.activeLink === 1 ? { backgroundColor: '#48bc48', color: 'white' } : {}}
            onClick={() => { this.changeLinkStyle(1); this.props.changeTableType('users'); }}
          >Manage Users
          </button>
        </Link>
        <Link className="NavbarLink" to="/adminMain/bookings" >
          <button
            className="linky "
            style={this.state.activeLink === 2 ? { backgroundColor: '#48bc48', color: 'white' } : {}}
            onClick={() => { this.changeLinkStyle(2); this.props.changeTableType('booking'); }}
          >Manage Bookings
          </button>
        </Link>
      </div>
    );
  }
}


export default Sidebar;
Sidebar.propTypes = {
  changeSidebarStyle: PropTypes.func.isRequired,
  // sidebarStyle: PropTypes.objectOf.isRequired,
  changeTableType: PropTypes.func.isRequired,
};
