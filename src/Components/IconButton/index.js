import React from 'react';
import { PropTypes } from 'prop-types';
import './IconButton.css';

class IconButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    IconButton.propTypes = {
      type: PropTypes.string.isRequired,
    };
  }

  onClickIconBtn = () => {
    alert(this.props.type);
  }

  render() {
    return (
      <div className="IconButton-outer">
        <button className="IconButton-btn" onClick={() => { this.onClickIconBtn(); }}><i className="material-icons">{this.props.type}</i></button>
      </div>
    );
  }
}


export default IconButton;
