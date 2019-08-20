import * as types from './actionTypes.js'


export const changeMood = (mood) => ({
    type: types.CHANGE_MOOD,
    payload: mood
});