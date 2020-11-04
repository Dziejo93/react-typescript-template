import './index.css';
import 'src/lib/i18n';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ErrorsContainer } from 'src/components/errorsContainer';
import store from 'src/store';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import theme from './assets/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading..</div>}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ErrorsContainer>
            <App />
          </ErrorsContainer>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
