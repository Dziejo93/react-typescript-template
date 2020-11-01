import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { DefaultLayout } from 'src/components/layouts';

import { Routes } from './routes';

export function App() {
  return (
    <DefaultLayout>
      <Routes />
    </DefaultLayout>
  );
}
