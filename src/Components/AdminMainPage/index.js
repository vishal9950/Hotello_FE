import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAdminUser } from '../../redux/actions';
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
      link: 1,
      // sidebarStyle: 'block',
      isLoggedIn: !(window.localStorage.getItem('token') === null),
    };
  }
  componentWillMount() {
    // window.localStorage.getItem('token', token);
    fetch('/adminDetails', {
      method: 'GET',
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    }).then(user => user.json()).then((data) => {
      console.log('admin data', data);
      this.props.updateAdminUser(data);
    });
  }
changeTableType=(type) => {
  this.setState({
    tableType: type,
  });
}
changeSelectedLink=(value) => {
  this.setState({
    link: value,
  });
}

  // changeSidebarStyle = (newStyle) => {
  //   this.setState({
  //     sidebarStyle: newStyle,
  //   });
  // }
render() {
  console.log('admin:::::::;', window.localStorage.getItem('token'), this.state.isLoggedIn);
  if (this.state.isLoggedIn) {
    return (
      <div className="admin-main-page">
        <Header />
        <div className="admin-body">
          <Sidebar changeTableType={type => this.changeTableType(type)} link={this.state.link} />
          {/* <ActionBar changeSidebarStyle={this.changeSidebarStyle} /> */}
          <Main tableType={this.state.tableType} changeSelectedLink={value => this.changeSelectedLink(value)} />
        </div>
        <Footer />
      </div>
    );
  }

  return <Redirect to="/login" />;
}
}
const mapDispatchToProps = dispatch => ({
  updateAdminUser: (data) => {
    dispatch(updateAdminUser(data));
  },

});

AdminMainPage.propTypes = {
  updateAdminUser: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(AdminMainPage);
