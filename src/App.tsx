import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { DefaultLayout } from 'src/components/layouts';

import { Routes } from './routes';

export function App() {
  return (
    <DefaultLayout>
      <Routes />
      <ToastContainer position="top-right" autoClose={5000} closeOnClick pauseOnHover />
    </DefaultLayout>
  );
}
