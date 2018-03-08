import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import AdminMainPage from './Components/AdminMainPage';
import AdminLoginPage from './Components/AdminLoginPage';


import './App.css';


class App extends React.Component {
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

=======
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
>>>>>>> 8648ceb8c40ef70aafc48f8ab04350cb4acc1b7a

export default App;
