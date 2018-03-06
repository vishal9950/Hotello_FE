import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminProfile from './Components/AdminProfile';
import Header from './Components/Header';
import ActionBar from './Components/ActionBar';

const App = () => (
  <div>
    <Header /><ActionBar />
    <Switch>
      <Route exact path="/adminProfile" component={AdminProfile} />
    </Switch>
  </div>
);

export default App;
