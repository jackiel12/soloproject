import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  // write access
  // create functions that will dispatch action creators
  isLoggedIn: (credentials) => dispatch(actions.isLoggedIn(credentials)),
  createUser: (credentials) => dispatch(actions.createUser(credentials)),

});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    // should interact with backend here and on submit, should update the database (entry)
    this.props.isLoggedIn(this.state);
  }

  handleCreate(event) {
    // should interact with backend here and on submit, should update the database (entry)
    this.props.createUser(this.state);
  }

  render() {
    return (
      <div className="Login">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleUsername} />
        </div>

        <div>
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" name="password" value={this.state.password} onChange={this.handlePassword} />
        </div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleCreate}>Create</button>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Login);
