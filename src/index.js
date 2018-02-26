import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import gameContainer from './containers/gameContainer'
import './index.css';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), [1, 2, 0]);

ReactDOM.render(
   <Provider store={store}>
    <gameContainer gameId={1} />
   </Provider>,
    document.getElementById('root')
);
