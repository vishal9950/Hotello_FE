import PropTypes from 'prop-types';
import React from 'react';
import { TablePagination } from 'react-pagination-table';
import './Table.css';


class Table extends React.Component {
  render() {
    const dataLength = this.props.data.length;
    return (
      <div>
        {dataLength ? <TablePagination
          headers={this.props.header}
          data={this.props.data}
          columns={this.props.columns}
          perPageItemCount={this.props.itemsPerPage}
          totalCount={this.props.data.length}
          arrayOption={[['size', 'all', ' ']]}
        /> : null}
      </div>
    );
  }
}

export default Table;
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  header: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  columns: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

