import * as types from '../actions/actionTypes';


const initialState = {
    mood: null,
    // color: colorize[mood] || grey
}

const moodReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MOOD:
            return {

            }
        default:
          return state;
        }
}

// make the combined reducers available for import
export default moodReducer;