import React from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from 'src/components/dashboard';

export const AuthorizationRoutes = () => (
  <>
    <Route exact path="/Login" component={Dashboard} />
    <Route exact path="/Register" component={Dashboard} />
  </>
);
