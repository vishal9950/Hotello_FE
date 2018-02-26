import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import ActionBar from './Components/ActionBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './components/Table/Table';
import { getUserData } from '../src/redux/actions';
import './App.css';

class App extends React.Component {
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
App.propTypes = {
  authorization: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getUsers: PropTypes.func.isRequired,
  header: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
