import * as types from './actionTypes';

export const createUser = (credentials) => {
  console.log('creating user');
  return (dispatch) => {
    fetch('/api/createuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credentials }),
    })
      .then((data) => {
        dispatch({ type: types.CREATE_USER, payload: credentials });
      })
      .catch((err) => console.log(err));
    // or if my data was not posted/shoudl i catch it with redirect to create login again?
  };
};


export const isLoggedIn = (credentials) => (dispatch) => {
  console.log('logging in action:', credentials);
  fetch('/api/loggedin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credentials }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: types.LOGGED_IN, payload: data });
    })
    .catch((err) => console.log(err));
};

export const changeMood = (mood) => ({
  type: types.CHANGE_MOOD,
  payload: mood,
});

export const createEntry = (state, username, color) => (dispatch) => {
  console.log('action creator that dispatches-', 'state:', state);
//   fetch('/api/database', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       text: state.text, date: state.date, username, color,
//     }),
//   })
//     .then(() => {
//       dispatch({
//         type: types.CREATE_ENTRY,
//         payload: {
//           text: state.text, date: state.date, username, color,
//         },
//       });
//     })
//     .catch((err) => console.log(err));
};
