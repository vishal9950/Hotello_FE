import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TablePagination } from 'react-pagination-table';
import { getUserData, getBookingData } from '../../redux/actions';
import '../BookingTable/Table.css';


class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   type: '',
      userDataLength: 0,
    };
  }
  componentWillMount() {
    this.props.changeSelectedLink(1);
    // console.log(window.localStorage.getItem('token'));
    // if (this.props.type === 'users' && this.state.type !== 'users') {
    fetch('/viewRegisteredUsers', {
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    }).then(response => response.json()).then((responseObj) => {
      console.log('USER DATA FROM DB IS: ', responseObj);
      this.props.getUsers(responseObj);
    }).then(() => {
      this.setState({
        // type: 'users',
        userDataLength: this.props.userData.length,
      });
    });
    // } else if (this.props.type === 'booking' && this.state.type !== 'booking') {
    //   fetch('/adminViewBookings', {
    //     headers: {
    //       authorization: window.localStorage.getItem('token'),
    //     },
    //   }).then(response => response.json()).then((responseObj) => {
    //     console.log('BOOKING DATA FROM DB IS: ', responseObj);
    //     this.props.getBookings(responseObj);
    //   }).then(() => {
    //     this.setState({
    //       type: 'booking',
    //       bookingDataLength: this.props.bookingData.length,
    //     });
    //   });
    // }
  }
  render() {
    // console.log(this.props.type);
    // if (this.props.type === 'users' && this.state.type !== 'users') {
    //   fetch('/viewRegisteredUsers', {
    //     headers: {
    //       authorization: window.localStorage.getItem('token'),
    //     },
    //   }).then(response => response.json()).then((responseObj) => {
    //     console.log('USER DATA FROM DB IS: ', responseObj);
    //     this.props.getUsers(responseObj);
    //   }).then(() => {
    //     this.setState({
    //       type: 'users',
    //       userDataLength: this.props.userData.length,
    //     });
    //   });
    // } else if (this.props.type === 'booking' && this.state.type !== 'booking') {
    //   fetch('/adminViewBookings', {
    //     headers: {
    //       authorization: window.localStorage.getItem('token'),
    //     },
    //   }).then(response => response.json()).then((responseObj) => {
    //     console.log('BOOKING DATA FROM DB IS: ', responseObj);
    //     this.props.getBookings(responseObj);
    //   }).then(() => {
    //     this.setState({
    //       type: 'booking',
    //       bookingDataLength: this.props.bookingData.length,
    //     });
    //   });
    // }
    // if (this.state.type === 'users') {
    // const dataLength = this.props.userData.length;
    return (
      <div className="UsersTable">
        {this.state.userDataLength ? <TablePagination
          headers={this.props.userHeader}
          data={this.props.userData}
          columns={this.props.userColumns}
          perPageItemCount={5}
          totalCount={this.state.userDataLength}
          arrayOption={[['size', 'all', ' ']]}
        /> : null}
      </div>
    );
    // } else if (this.state.type === 'booking') {
    // const dataLength = this.props.bookingData.length;
    //   return (
    //     <div>
    //       {this.state.bookingDataLength ? <TablePagination
    //         headers={this.props.bookingHeader}
    //         data={this.props.bookingData}
    //         columns={this.props.bookingColumns}
    //         perPageItemCount={5}
    //         totalCount={this.state.bookingDataLength}
    //         arrayOption={[['size', 'all', ' ']]}
    //       /> : null}
    //     </div>
    //   );
    // }

    // return null;
  }
}
const mapDispatchToProps = dispatch => ({
  getUsers: (responseArray) => {
    dispatch(getUserData(responseArray));
  },
  getBookings: (res, fn) => {
    dispatch(getBookingData(res, fn));
  },
});
const mapStateToProps = state => ({
  userData: state.users.userData,
  userHeader: state.users.userHeader,
  authorization: state.users.authorization,
  userColumns: state.users.userColumns,
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
UsersTable.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getUsers: PropTypes.func.isRequired,
  userHeader: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  userColumns: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
};
