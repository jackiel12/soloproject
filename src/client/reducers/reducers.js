import * as types from '../actions/actionTypes';


const initialState = {
    isLoggedIn: false,
    mood: null,
    color: 'grey'
}

// const moods = ['happy', 'sad', 'alert', 'mad', 'stressed'];

const colorize = {
  happy: 'yellow',
  sad: 'blue',
  alert: 'orange',
  mad: 'red',
  stressed: 'purple'
}

const moodReducer = (state=initialState, action) => {

    switch(action.type) {
        case types.CREATE_USER:
            //logic here;
            return {

          }
        case types.LOGGED_IN:
          //logic here;
          return {

          }
        case types.CHANGE_MOOD:
          let mood = action.payload;
          let color =  colorize[mood] || 'grey'
          return {
          ...state,
          mood,
          color
          }
        default:
          return state;
        }
}

// make the combined reducers available for import
export default moodReducer;