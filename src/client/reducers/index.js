import { combineReducers } from 'redux';

// import all reducers here
import moodReducer from './reducers'

const reducers = combineReducers({
    // if we had other reducers, they would go here
    mood: moodReducer
});

export default reducers;

