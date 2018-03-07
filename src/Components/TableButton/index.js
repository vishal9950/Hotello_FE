import PropTypes from 'prop-types';
import React from 'react';
// import { TablePagination } from 'react-pagination-table';
// import './Table.css';


class TableButton extends React.Component {
    suspendUser=(email) => {
      console.log(email);
      fetch('/suspendUser', {
        method: 'PUT',
        headers: {
          authorization: window.localStorage.getItem('token'),
        },
        body: JSON.stringify({
          email,
        }),
      }).then((res) => {
        console.log(res);
      });
    }
    render() {
      return (
        <button
          className={this.props.class}
          onClick={() => this.suspendUser(this.props.email)}
        ><img className={this.props.imgClass} src={this.props.imgSrc} alt={this.props.alt} />
        </button>
      );
    }
}

export default TableButton;
TableButton.propTypes = {
  class: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

