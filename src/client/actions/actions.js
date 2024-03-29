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

export const createEntry = (state) => (dispatch) => {
  console.log('action creator that dispatches-', 'state:', state);
  fetch('/api/database', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      entry: state.value, date: state.date, username: state.username, color: state.color,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('ACTION DATA AFTER FETCH/POSTED:', data);
      dispatch({
        type: types.CREATE_ENTRY,
        payload: { data },
      });
    })
    .catch((err) => console.log(err));
};

export const showWeek = (username) => (dispatch) => {
  console.log('fetching weekly here-');
  fetch('/api/weekly', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  })
    .then((response) => response.json())
    .then((data) => {
      const newData = data.map((obj) => Object.values(obj));
      console.log('new data', newData);
      dispatch({
        type: types.SHOW_WEEK,
        payload: { newData },
      });
    })
    .catch((err) => console.log(err));
};

export const handleDelete = (info, username) => (dispatch) => {
  console.log('info in handleDelete: ', info);
  fetch('/api/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ info }),
  })
    .then((response) => response.json())
    .then(() => {
      // can call two fetches;
      fetch('/api/weekly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      })
        .then((response) => response.json())
        .then((delData) => {
          const newData = delData.map((obj) => Object.values(obj));
          console.log('new data', newData);
          dispatch({
            type: types.SHOW_WEEK,
            payload: { newData },
          });
        });
    })
    .catch((err) => console.log(err));
};
