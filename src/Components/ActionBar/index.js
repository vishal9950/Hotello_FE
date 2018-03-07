import React from 'react';
import IconButton from '../IconButton';
import InputText from '../InputText';
import './ActionBar.css';

class ActionBar extends React.Component {
  openSidebar = () => {
    this.props.changeSidebarStyle({ display: 'block' });
  }
  render() {
    return (
      <div className="w3-main" style={{ marginLeft: '200px' }}>
        <div className="foo">
          <button className="w3-button w3-xlarge w3-hide-large" onClick={this.openSidebar}>&#9776;</button>
          <IconButton type="add" />
          <IconButton type="filter_list" />
          <InputText placeholder="Search..." />
          <span id="ActionBar-search"><IconButton type="search" /></span>
        </div>
      </div>
    );
  }
}

export default ActionBar;
