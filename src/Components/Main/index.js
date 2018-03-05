import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div className="w3-main" style={{ marginLeft: '200px' }}>
      <Switch>
        <Route exact path="/manageUsers" render={() => <h1>manage users</h1>} />
        <Route path="/manageBookings" render={() => <h1>manage bookings</h1>} />
      </Switch>
    </div>
  );
}

export default Main;
