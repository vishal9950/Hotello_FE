import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="w3-main" style={{ marginLeft: '200px' }}>
        <Switch>
          <Route
            exact
            path="/manageUsers"
            render={() => <h1>manage users</h1>}
          />
          <Route path="/manageBookings" render={() => <h1>manage bookings</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Main;
