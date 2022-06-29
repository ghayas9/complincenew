import React from 'react';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import store from './state/Store';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <Provider store={store}> <App /></Provider>,
  document.getElementById('root')
);