import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Store} from "./redux/reducer/index"


ReactDOM.render(
  <Provider store={Store()}>
  <BrowserRouter>
    <App />
  </BrowserRouter></Provider>,
  
  document.getElementById('root')
  
);
serviceWorker.unregister();
