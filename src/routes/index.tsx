import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'src/components/dashboard';
import { Login } from 'src/components/login';
import { SignUp } from 'src/components/signup';
import { PageNotFound } from 'src/pages/404';
import { ApplicationState } from 'src/store/reducers';

export const Routes = () => {
  const isAuthorised = useSelector((state: ApplicationState) => state.auth.isLoggedIn);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (isAuthorised) {
              return <Redirect to="/dashboard" />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {isAuthorised && <Route exact path="/dashboard" component={Dashboard} />}
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
