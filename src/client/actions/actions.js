import * as types from './actionTypes.js'

export const createUser = (username) => {
    return (dispatch) => {
        fetch('/loggedin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username})
        })
        .then (data => {
            console.log(data)
            dispatch({type: types.CREATE_USER, payload: username})
        })
        .catch(err => console.log(err))
        //or if my data was not posted/shoudl i catch it with redirect to create login again?
    }    
}

export const isLoggedIn = (username) => {
    return (dispatch) => {
        fetch('/home', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username})
        })
        .then (data => {
            console.log(data)
            dispatch({type: types.LOGGED_IN, payload: username})
        })
        .catch(err => console.log(err))
        //or if my data was not posted/shoudl i catch it with redirect to create login again?
    }    
}

export const changeMood = (mood) => ({
    type: types.CHANGE_MOOD,
    payload: mood
});

export const createEntry = (text) => {
    return (dispatch) => {
        console.log('fetching')
        fetch('/api/database', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({text})
        })
        .then(data => {
            console.log(data)
            dispatch({type: types.CREATE_ENTRY, payload: text})
        })
        .catch(err => console.log(err))
    }
}



