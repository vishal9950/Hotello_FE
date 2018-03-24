import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { TablePagination } from 'react-pagination-table';
import { getUserData, getBookingData } from '../../redux/actions';
import './Table.css';


class BookingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // type: '',
      // userDataLength: 0,
      bookingDataLength: 0,
    };
  }
  componentWillMount() {
    this.props.changeSelectedLink(2);
    // console.log(window.localStorage.getItem('token'));
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
    fetch('/adminViewBookings', {
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    }).then(response => response.json()).then((responseObj) => {
      console.log('BOOKING DATA FROM DB IS: ', responseObj);
      this.props.getBookings(responseObj);
    }).then(() => {
      this.setState({
        // type: 'booking',
        bookingDataLength: this.props.bookingData.length,
      });
    });
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
    //   // const dataLength = this.props.userData.length;
    //   return (
    //     <div>
    //       {this.state.userDataLength ? <TablePagination
    //         headers={this.props.userHeader}
    //         data={this.props.userData}
    //         columns={this.props.userColumns}
    //         perPageItemCount={5}
    //         totalCount={this.state.userDataLength}
    //         arrayOption={[['size', 'all', ' ']]}
    //       /> : null}
    //     </div>
    //   );
    // } else if (this.state.type === 'booking') {
    // const dataLength = this.props.bookingData.length;
    return (
      <div className="BookingTable">
        {this.state.bookingDataLength ? <TablePagination
          headers={this.props.bookingHeader}
          data={this.props.bookingData}
          columns={this.props.bookingColumns}
          perPageItemCount={5}
          totalCount={this.state.bookingDataLength}
          arrayOption={[['size', 'all', ' ']]}
        /> : null}
      </div>
    );
  }

  // return null;
  // }
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
  bookingData: state.bookings.bookingData,
  bookingHeader: state.bookings.bookingHeader,
  bookingColumns: state.bookings.bookingColumns,
});
export default connect(mapStateToProps, mapDispatchToProps)(BookingTable);
BookingTable.propTypes = {
  bookingData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getBookings: PropTypes.func.isRequired,
  bookingHeader: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  bookingColumns: PropTypes.string.isRequired,
};
