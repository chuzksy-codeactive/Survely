import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import axios from 'axios';


import App from './components/App';
import reducers from './reducers/index';

window.axios = axios;
const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);