// import { render } from 'react-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { TablePagination } from 'react-pagination-table';
import { getUserData } from '../../redux/actions';
import './Table.css';

// const fetch = require('node-fetch');


class Table extends React.Component {
  componentDidMount() {
    fetch('/viewRegisteredUsers', {
      headers: {
        authorization: this.props.authorization,
      },
    }).then(response => response.json()).then((responseObj) => {
      this.props.getUsers(responseObj);
    });
  }
  render() {
    return (
      <div>
        <TablePagination
          title="Users"
          headers={this.props.header}
          data={this.props.data}
          columns="firstName.lastName.email.role.phoneNumber.Suspended"
          perPageItemCount={5}
          totalCount={this.props.data.length}
          arrayOption={[['size', 'all', ' ']]}
        />
      </div>
    );
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

