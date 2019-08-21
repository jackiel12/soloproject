import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  //read access
  // provide pertinent state here
  const {isLoggedIn, user} = state.mood;
  console.log('store from login', {isLoggedIn, user})
  return{isLoggedIn, user};
}

const mapDispatchToProps = (dispatch) => ({
    //write access
    // create functions that will dispatch action creators
        isLoggedIn: (username) => dispatch(actions.isLoggedIn(username)),
        createUser: (username) => dispatch(actions.createUser(username))

});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCreate = this.handleCreate.bind(this);

    }
    handleChange(event) {
      console.log('change', this.state)
      this.setState({value: event.target.value});
    } 
    handleLogin(event) {
      //should interact with backend here and on submit, should update the database (entry)
      console.log('logged in', this.state)
      this.props.isLoggedIn(this.state);
      
    }
    handleCreate(event) {
      //should interact with backend here and on submit, should update the database (entry)
      console.log('created', this.state)
      this.props.createUser(this.state);
    }
    render() {
      return (
            <div className="Login">
                <div>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value={this.state.value} onChange={this.handleChange}/>
                </div>

              <div>
              <label for="pass">Password:</label>
              <input type="password" id="pass" name="password"/>
              </div>
              <button onClick={this.handleLogin}>Login</button>
              <button onClick={this.handleCreate}>Create</button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
