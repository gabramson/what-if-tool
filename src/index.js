import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as reducers from './store/reducers';
import {fetchInitialState} from './store/tournament/actions'
import {fetchTeams} from './store/teams/actions'

const store = createStore(combineReducers(reducers), {}, applyMiddleware(thunk));

store.dispatch(fetchTeams());
store.dispatch(fetchInitialState());

ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
    document.getElementById('root')
);
