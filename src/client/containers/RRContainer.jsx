/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Mantra from './MantraContainer';
import Entry from './EntryContainer';
import Login from './LoginContainer';


// react router container should render side bar that renders its own component from  main


const mapStateToProps = (state) => {
  // read access
  // provide pertinent state here
  const { isLoggedIn, color } = state.mood;
  return { isLoggedIn, color };
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routes = [
      {
        path: '/login',
        main: () => (this.props.isLoggedIn ? <Redirect to="/home" /> : (
          <div className="LoginDisplays">
            <h2>Login</h2>
            <Login />
          </div>
        )),
      },
      {
        path: '/home',
        main: () => (this.props.isLoggedIn ? (
          <div className="routerDisplays">
            <h2>Home</h2>
            <Mantra />
          </div>
        ) : (
          <div className="LoginDisplays">
            <h2>Not Logged In! Login here:</h2>
            <Login />
          </div>
        )),
      },
      {
        path: '/newentry',
        main: () => (this.props.isLoggedIn ? (
          <div className="JournalDisplays">
            <h2>Journal</h2>
            <Entry />
          </div>
        ) : (
          <div className="LoginDisplays">
            <h2>Not Logged In! Login here:</h2>
            <Login />
          </div>
        )),
      },
      {
        path: '/weeklyposts',
        main: () => (this.props.isLoggedIn ? (<h2>Weekly</h2>) : (
          <div className="LoginDisplays">
            <h2>Not Logged In! Login here:</h2>
            <Login />
          </div>
        )),
      },
    ];

    return (
      <Router>
        <div className="SideMenu">
          <div>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/newEntry">Journal</Link></li>
              <li><Link to="/weeklyposts">Weekly</Link></li>
            </ul>

          </div>
          {
                 routes.map((route, index) => <Route key={index} path={route.path} component={route.main} />)
                    }
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps)(Sidebar);
