import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Table from '../Table';
import { getUserData, getBookingData } from '../../redux/actions';
import './TableContainer.css';


class TableContainer extends React.Component {
  componentDidMount() {
    console.log(window.localStorage.getItem('token'));
    fetch('/viewRegisteredUsers', {
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    }).then(response => response.json()).then((responseObj) => {
      this.props.getUsers(responseObj);
    });
    fetch('/adminViewBookings', {
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    }).then(response => response.json()).then((responseObj) => {
      this.props.getBookings(responseObj);
    });
  }

  render() {
    return (
      <div className="TableContainer">
        <Switch>
          <Route
            exact
            path="/adminMain/users"
            render={() => (
              <Table
                header={this.props.userHeader}
                data={this.props.userData}
                columns={this.props.userColumns}
                itemsPerPage={5}
              />
        )}
          />
          <Route
            path="/adminMain/bookings"
            render={() => (
              <Table
                header={this.props.bookingHeader}
                data={this.props.bookingData}
                columns={this.props.bookingColumns}
                itemsPerPage={5}
              />
        )}
          />
        </Switch>
      </div>
    );
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
  bookingData: state.bookings.bookingData,
  bookingHeader: state.bookings.bookingHeader,
  bookingColumns: state.bookings.bookingColumns,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableContainer));
TableContainer.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getUsers: PropTypes.func.isRequired,
  userHeader: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  userColumns: PropTypes.string.isRequired,
  bookingData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getBookings: PropTypes.func.isRequired,
  bookingHeader: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  bookingColumns: PropTypes.string.isRequired,
};

