import {combineReducers} from 'redux';

import poster from './posterReducer'

export default combineReducers({
	poster: poster,
});