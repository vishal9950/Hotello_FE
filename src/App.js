import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminMainPage from './Components/AdminMainPage';
import AdminLoginPage from './Components/AdminLoginPage';
import RedirectTologin from './Components/RedirectTologin';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={RedirectTologin} />
          <Route path="/login" component={AdminLoginPage} />
          <Route path="/adminMain" component={AdminMainPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
