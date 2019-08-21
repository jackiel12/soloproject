import * as types from './actionTypes.js'


export const changeMood = (mood) => ({
    type: types.CHANGE_MOOD,
    payload: mood
});

export const createEntry = (text) => {
    return (dispatch) => {
        fetch('/post', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({text})
        })
        .then(data => {
            console.log(data)
            dispatch({type: types.CREATE_ENTRY, payload: data}, data)
        })
        .catch(err => console.log(err))
    }
}



