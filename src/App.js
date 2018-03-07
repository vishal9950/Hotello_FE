import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminMainPage from './Components/AdminMainPage';
import AdminLoginPage from './Components/AdminLoginPage';


<<<<<<< HEAD
  changeSidebarStyle = (newStyle) => {
    this.setState({
      sidebarStyle: newStyle,
    });
  }
=======
import './App.css';

>>>>>>> develop

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


export default App;
