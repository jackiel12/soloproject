/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './containers/MainContainer';
import store from './store.js';


// app renders entire app (via main)
class App extends Component {
  render() {
    return (
    // keep in mind that you must wrap your main divs inside a provider div (imported in) and to pass down store
      <Provider store={store} style={{ backgroundColor: 'green' }}>
        {/* <h1>checking</h1> */}
        <Main className="Main" />
      </Provider>
    );
  }
}

export default App;
