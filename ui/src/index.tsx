import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { rootReducer, initialState } from './store'

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer, initialState)


ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
