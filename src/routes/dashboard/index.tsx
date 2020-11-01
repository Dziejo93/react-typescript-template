import React from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from 'src/components/dashboard';

export const DashboardRoutes = () => {
  return (
    <>
      <Route exact path="/xd" component={Dashboard} />
    </>
  );
};
