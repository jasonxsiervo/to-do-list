import tasksReducer from './tasks';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    tasks: tasksReducer,
    isLogged: loggedReducer

})

export default allReducers;