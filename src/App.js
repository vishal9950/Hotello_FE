import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import ActionBar from './Components/ActionBar';

import AdminMainPage from './Components/AdminMainPage';
import AdminLoginPage from './Components/AdminLoginPage';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Components/Table/Table';
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
        <Switch>
          <Route exact path="/login" component={AdminLoginPage} />
          <Route path="/adminMain" component={AdminMainPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
