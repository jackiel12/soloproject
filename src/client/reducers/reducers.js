import * as types from '../actions/actionTypes';


const initialState = {
    user: null,
    password: '',
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
            let user = action.payload.value;
            return {
              ...state,
              user
            }
        case types.CREATE_PW:
          let password = action.payload.value;
          return {
            ...state,
            user
          }   
        case types.LOGGED_IN:
            user = action.payload.value;
            let isLoggedIn = true;
            return {
              ...state,
              isLoggedIn
            }
        case types.CHANGE_MOOD:
          let mood = action.payload;
          let color =  colorize[mood] || 'grey'
          
          return {
          ...state,
          mood,
          color
          }
          case types.CREATE_ENTRY: 
          console.log('creating entry dispatched')
          return {
          ...state
          }
        default:
          return state;
        }
}

// make the combined reducers available for import
export default moodReducer;