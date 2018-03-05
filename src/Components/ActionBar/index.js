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

  render() {
    return (
      <div className="ActionBar-outer">
        <IconButton type="add" />
        <IconButton type="filter_list" />
        <InputText placeholder="Search..." />
        <span id="ActionBar-search"><IconButton type="search" /></span>
      </div>
    );
  }
}


export default ActionBar;

