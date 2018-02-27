import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
    document.getElementById('root')
);
