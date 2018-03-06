import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import ActionBar from '../ActionBar';

class AdminMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarStyle: 'block',
    };
  }

      changeStyle = (newStyle) => {
        this.setState({
          sidebarStyle: newStyle,
        });
      }

      render() {
        return (
          <div>
            <Header />
            <div style={{ marginTop: '70px' }}>
              <Sidebar sidebarStyle={this.state.sidebarStyle} changeStyle={this.changeStyle} />
              <ActionBar changeStyle={this.changeStyle} />
              <Main />
            </div>
          </div>
        );
      }
}
AdminMainPage.defaultProps = {
};
AdminMainPage.propTypes = {
};
export default AdminMainPage;
