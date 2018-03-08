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
    return (
      <div
        className="sidy w3-sidebar w3-card w3-bar-block w3-collapse w3-animate-left"
        style={{ ...this.props.sidebarStyle }}
      >
        <button className="w3-button w3-xlarge w3-hide-large" onClick={this.closeSideBar}>&#9776;</button>
        <Link to="/adminMain/users" >
          <button
            className="linky w3-button w3-hover-black"
            style={this.state.activeLink === 1 ? { backgroundColor: 'black', color: 'white' } : {}}
            onClick={() => this.changeLinkStyle(1)}
          >Manage Users
          </button>
        </Link>
        <Link to="/adminMain/bookings" >
          <button
            className="linky w3-button w3-hover-black"
            style={this.state.activeLink === 2 ? { backgroundColor: 'black', color: 'white' } : {}}
            onClick={() => this.changeLinkStyle(2)}
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
  sidebarStyle: PropTypes.object.isRequired,
};
