import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), {tournament: [1, 2, 3, 4, 0, 0, 0]}, applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
    document.getElementById('root')
);
