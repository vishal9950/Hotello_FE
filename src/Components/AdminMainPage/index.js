import React from 'react';
import { Redirect } from 'react-router-dom';
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
      isLoggedIn: !(window.localStorage.getItem('token') === 'null'),
      page: 0,
    };
  }

      changeStyle = (newStyle) => {
        this.setState({
          sidebarStyle: newStyle,
        });
      }

      changePage = (value) => {
        this.setState({ page: value });
      }

      render() {
        console.log('admin:::::::;', window.localStorage.getItem('token'), this.state.isLoggedIn);
        if (this.state.isLoggedIn) {
          if (this.state.page === 0) {
            return (
              <div>
                <Header />
                <div style={{ marginTop: '70px' }}>
                  <Sidebar sidebarStyle={this.state.sidebarStyle} changeStyle={this.changeStyle} />
                  <ActionBar changeStyle={this.changeStyle} />
                  <Main changePage={this.changePage} />
                </div>
              </div>
            );
          } else if (this.state.page === 1) {
            return (
              <div>
                <Header />
                <div style={{ marginTop: '70px' }}>
                  <Sidebar sidebarStyle={this.state.sidebarStyle} changeStyle={this.changeStyle} />
                  <ActionBar changeStyle={this.changeStyle} />
                </div>
              </div>
            );
          }
        }

        return <Redirect to="/login" />;
      }
}
AdminMainPage.defaultProps = {
};
AdminMainPage.propTypes = {
};
export default AdminMainPage;
