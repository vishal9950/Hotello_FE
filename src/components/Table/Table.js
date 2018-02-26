// import { render } from 'react-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { TablePagination } from 'react-pagination-table';
import { getUserData } from '../../redux/actions';
import './Table.css';

// const fetch = require('node-fetch');


class Table extends React.Component {
  constructor(props) {
    super(props);
    fetch('/viewRegisteredUsers', {
      headers: {
        authorization: this.props.authorization,
      },
    }).then(response => response.json()).then((responseObj) => {
      this.props.getUsers(responseObj);
    });
  }
  render() {
    const dataLength = this.props.data.length;
    console.log(dataLength);
    if (dataLength !== 0) {
      return (
        <div>
          <TablePagination
            title="Users"
            headers={this.props.header}
            data={this.props.data}
            columns="firstName.lastName.email.role.phoneNumber.suspended"
            perPageItemCount={3}
            totalCount={dataLength}
            arrayOption={[['size', 'all', ' ']]}
          />
        </div>
      );
    }
    return null;
  }
}
const mapDispatchToProps = dispatch => ({
  getUsers: (responseArray) => {
    dispatch(getUserData(responseArray));
  },
});
const mapStateToProps = state => ({
  data: state.users.data,
  header: state.users.header,
  authorization: state.users.authorization,
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
Table.propTypes = {
  authorization: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getUsers: PropTypes.func.isRequired,
  header: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

