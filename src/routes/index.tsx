import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'src/components/dashboard';
import { Login } from 'src/components/login';
import { SignUp } from 'src/components/signup';

export const Routes = () => {
  const isAuthorised = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (isAuthorised ? <Redirect to="/dashboard" /> : <Redirect to="/login" />)} />
        {isAuthorised && <Route exact path="/dashboard" component={Dashboard} />}
        {/*<AuthorizationRoutes />*/}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        {/*<DashboardRoutes />*/}
      </Switch>
    </Router>
  );
};
