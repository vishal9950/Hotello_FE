import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './AdminMainPage.css';
// import ActionBar from '../ActionBar';

class AdminMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableType: 'users',
      // sidebarStyle: 'block',
      isLoggedIn: !(window.localStorage.getItem('token') === 'null'),
    };
  }
changeTableType=(type) => {
  this.setState({
    tableType: type,
  });
}
  // changeSidebarStyle = (newStyle) => {
  //   this.setState({
  //     sidebarStyle: newStyle,
  //   });
  // }
render() {
  // console.log('admin:::::::;', window.localStorage.getItem('token'), this.state.isLoggedIn);
  if (this.state.isLoggedIn) {
    return (
      <div className="admin-main-page">
        <Header />
        <div className="admin-body">
          <Sidebar changeTableType={type => this.changeTableType(type)} />
          {/* <ActionBar changeSidebarStyle={this.changeSidebarStyle} /> */}
          <Main tableType={this.state.tableType} />
        </div>
        <Footer />
      </div>
    );
  }

  return <Redirect to="/login" />;
}
}
AdminMainPage.defaultProps = {
};
AdminMainPage.propTypes = {
};
export default AdminMainPage;
