import React from 'react';
import './ActionBar.css';
import IconButton from '../IconButton';
import InputText from '../InputText';

class ActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  w3Open = () => {
    this.props.changeStyle({ display: 'block' });
  }

  render() {
    return (
      <div className="ActionBar-outer">
        <button className="w3-button w3-teal w3-xlarge w3-hide-large" onClick={this.w3Open}>&#9776;</button>
        <IconButton type="add" />
        <IconButton type="filter_list" />
        <InputText placeholder="Search..." />
        <span id="ActionBar-search"><IconButton type="search" /></span>
      </div>
    );
  }
}


export default ActionBar;

