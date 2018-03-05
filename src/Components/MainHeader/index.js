import React from 'react';
import '../ActionBar/ActionBar.css';
import IconButton from '../IconButton';
import InputText from '../InputText';
import ActionBar from '../ActionBar';
import './MainHeader.css';

class MainHeader extends React.Component {
  w3Open = () => {
    this.props.changeStyle({ display: 'block' });
  }
  render() {
    return (
      <div className="w3-main" style={{ marginLeft: '200px' }}>
        <div className="foo">
          <button className="w3-button w3-xlarge w3-hide-large" onClick={this.w3Open}>&#9776;</button>
          <IconButton type="add" />
          <IconButton type="filter_list" />
          <InputText placeholder="Search..." />
          <span id="ActionBar-search"><IconButton type="search" /></span>
        </div>
      </div>
    );
  }
}

export default MainHeader;
