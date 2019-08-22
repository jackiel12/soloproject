import * as types from '../actions/actionTypes';


const initialState = {
  date: null,
  username: '',
  isLoggedIn: false,
  mood: null,
  color: 'grey',
};

// const moods = ['happy', 'sad', 'alert', 'mad', 'stressed'];

const colorize = {
  happy: 'yellow',
  sad: 'blue',
  alert: 'orange',
  mad: 'red',
  stressed: 'purple',
};

const moodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        username: action.payload.username,
      };
    case types.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.loggedIn,
        username: action.payload.username,
        color: action.payload.color,
        date: action.payload.date,
      };
    case types.CHANGE_MOOD:
      return {
        ...state,
        mood: action.payload,
        color: colorize[action] || 'grey',
      };
    case types.CREATE_ENTRY:
      return {
        ...state,
        username: action.payload.username,
        color: action.payload.color,
      };
    default:
      return state;
  }
};

// make the combined reducers available for import
export default moodReducer;
