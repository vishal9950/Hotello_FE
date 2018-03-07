import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userSuspend, userDelete } from '../../redux/actions/index';
// import { TablePagination } from 'react-pagination-table';
// import './Table.css';


class TableButton extends React.Component {
    manageUser=(type, email) => {
      if (type === 'Suspend') this.suspendUser(email);
      if (type === 'Delete') this.deleteUser(email);
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

      return (
        <button
          className={this.props.class}
          onClick={() => this.manageUser(this.props.class, this.props.email)}
        //   onClick={() => this.suspendUser(this.props.email)}
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

