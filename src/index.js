import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware , combineReducers} from 'redux';
import './index.css';
import App from './containers/App';
import thunkMiddleware from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
import {createLogger } from 'redux-logger';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer   , applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
                <Provider store={store}>    
                    <App/>
                </Provider>, document.getElementById('root'));
serviceWorker.register();