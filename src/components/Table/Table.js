import PropTypes from 'prop-types';
import React from 'react';
import { TablePagination } from 'react-pagination-table';
import './Table.css';


class Table extends React.Component {
  componentDidMount() {
    fetch(this.props.route, {
      headers: {
        authorization: this.props.authorization,
      },
    }).then(response => response.json()).then((responseObj) => {
      this.props.getData(responseObj);
    });
  }
  render() {
    const dataLength = this.props.data.length;
    return (
      <div>
        {dataLength ? <TablePagination
          title="Users"
          headers={this.props.header}
          data={this.props.data}
          columns="firstName.lastName.email.role.phoneNumber.suspended.edit.delete.suspend"
          perPageItemCount={4}
          totalCount={dataLength}
          arrayOption={[['size', 'all', ' ']]}
        /> : null}
      </div>
    );
  }
}

export default Table;
Table.propTypes = {
  authorization: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getData: PropTypes.func.isRequired,
  header: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  route: PropTypes.string.isRequired,
};

