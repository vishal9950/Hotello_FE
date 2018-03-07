import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userSuspend } from '../../redux/actions/index';
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
        // console.log(res.status);
        if (res.status === 200) { this.props.userSuspended(email); }
      });
    }
    render() {
      let imgClass = 'SuspendIcon';
      for (let i = 0; i < this.props.userData.length; i += 1) {
        if (this.props.userData[i].email === this.props.email) {
          if (this.props.userData[i].suspended === 'true') { imgClass = 'SuspendDisabled'; }
        }
      }
      return (
        <button
          className={this.props.class}
          onClick={() => this.suspendUser(this.props.email)}
        ><img className={imgClass} src={this.props.imgSrc} alt={this.props.alt} />
        </button>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  userSuspended: (email) => {
    dispatch(userSuspend(email));
  },
});
const mapStateToProps = state => ({
  userData: state.users.userData,
});
export default connect(mapStateToProps, mapDispatchToProps)(TableButton);
TableButton.propTypes = {
  class: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userData: PropTypes.arrayOf.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  userSuspended: PropTypes.func.isRequired,
};

