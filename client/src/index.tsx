import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { appStore } from './redux/store';

ReactDOM.render(
  <Provider store={appStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
