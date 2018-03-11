import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSuspend, userDelete, updateUser, bookingCancel } from '../../redux/actions/index';
// import { TablePagination } from 'react-pagination-table';
// import './Table.css';


class TableButton extends React.Component {
    manageUser=(type, email) => {
      if (type === 'Suspend') this.suspendUser(email);
      if (type === 'Delete') this.deleteUser(email);
      if (type === 'Cancel') this.cancelBooking(email);
      if (type === 'Edit') this.editUser(email);
      if (type === 'Cancel') this.cancelBooking(email);
    }
    suspendUser=(email) => {
      const confirmation = global.confirm(`Suspend ${email}?`);
      if (confirmation === true) {
        fetch('/suspendUser', {
          method: 'PUT',
          headers: {
            authorization: window.localStorage.getItem('token'),
          },
          body: JSON.stringify({
            email,
          }),
        }).then((res) => {
          if (res.status === 200) { this.props.userSuspended(email); }
        });
      }
    }
    deleteUser=(email) => {
      const confirmation = global.confirm(`Delete ${email}?`);
      if (confirmation === true) {
        fetch('/deleteUser', {
          method: 'DELETE',
          headers: {
            authorization: window.localStorage.getItem('token'),
          },
          body: JSON.stringify({
            email,
          }),
        }).then((res) => {
          if (res.status === 200) { this.props.userDeleted(email); }
        });
      }
    }

    editUser = (email) => {
      this.props.updateUser(email);
    }
    cancelBooking=(bookingId) => {
      const confirmation = global.confirm(`Cancel booking ${bookingId}?`);
      if (confirmation === true) {
        fetch(`/adminCancelBooking/${bookingId}`, {
          headers: {
            authorization: window.localStorage.getItem('token'),
          },
        }).then((res) => {
          console.log('the cancel status is: ', res.status);
          if (res.status === 200) { this.props.bookingCancelled(bookingId); }
        });
      }
    }
    render() {
      let imgClass = '';
      if (this.props.class === 'Suspend') {
        imgClass = 'SuspendIcon';
        for (let i = 0; i < this.props.userData.length; i += 1) {
          if (this.props.userData[i].email === this.props.email) {
            if (this.props.userData[i].suspended === 'true') { imgClass = 'SuspendDisabled'; }
          }
        }
      }

      if (this.props.class === 'Edit') {
        return (
          <Link to="/adminMain/edit">
            <button
              className={this.props.class}
              onClick={() => this.manageUser(this.props.class, this.props.email)}
            ><img className={imgClass} src={this.props.imgSrc} alt={this.props.alt} />
            </button>
          </Link>
        );
      }
      if (this.props.class === 'Delete') imgClass = 'DeleteIcon';
      if (this.props.class === 'Cancel') {
        imgClass = 'cancelIcon';
        for (let i = 0; i < this.props.bookingData.length; i += 1) {
          if (this.props.bookingData[i].bookingid === this.props.email) {
            if (this.props.bookingData[i].status === 'cancelled') { imgClass = 'CancelDisabled'; }
          }
        }
      }
      return (
        <button
          className={this.props.class}
          onClick={() => this.manageUser(this.props.class, this.props.email)}
          disabled={this.props.disable}
        ><img className={imgClass} src={this.props.imgSrc} alt={this.props.alt} />
        </button>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  userSuspended: (email) => {
    dispatch(userSuspend(email));
  },
  userDeleted: (email) => {
    dispatch(userDelete(email));
  },
  bookingCancelled: (bookingId) => {
    dispatch(bookingCancel(bookingId));
  },
  updateUser: (email) => {
    dispatch(updateUser(email));
  },
  bookingCancelled: (bookingId) => {
    dispatch(bookingCancel(bookingId));
  },
});
const mapStateToProps = state => ({
  userData: state.users.userData,
  bookingData: state.bookings.bookingData,
});
export default connect(mapStateToProps, mapDispatchToProps)(TableButton);
TableButton.propTypes = {
  class: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userData: PropTypes.arrayOf.isRequired,
  bookingData: PropTypes.arrayOf.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  userSuspended: PropTypes.func.isRequired,
  userDeleted: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  bookingCancelled: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  userDeleted: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  bookingCancelled: PropTypes.func.isRequired,
};
