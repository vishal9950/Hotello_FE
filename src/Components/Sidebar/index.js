import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
  closeSideBar = () => {
    this.props.changeStyle({ display: 'none' });
  }
  render() {
    return (
      <div className="w3-sidebar w3-bar-block w3-collapse w3-animate-left" style={{ ...this.props.sidebarStyle, width: '200px' }}>
        <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={this.closeSideBar}>Close &times;</button>
        <Link to="/manageUsers"><button className="linky" onClick={this.closeSideBar}>Manage Users</button></Link>
        <Link to="/manageBookings"><button className="linky" onClick={this.closeSideBar}>Manage Booking</button></Link>
      </div>
    );
  }
}

export default Sidebar;
