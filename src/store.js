import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers'

const mid = applyMiddleware(promise(), thunk, logger());//bardzo wazne sa te wywolania, jesli przekaze
//tutja np logger zamiast logger() to ostatecznie lanuch nie wykona sie prawidlowo i nie wykona
//sie ostatnia funkcja, czyli reducer!!

const store = createStore(reducers, mid);


export default store;

