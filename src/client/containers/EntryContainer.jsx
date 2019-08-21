import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';


//entry container should be a large input that onchange should update database on backend (fetch to backend?)
const mapDispatchToProps = (dispatch) => ({
  //write access
  // create functions that will dispatch action creators
  createEntry: (text) => dispatch(actions.createEntry(text))
});

class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {value: '', date: new Date().toString()}
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      console.log('change', this.state)
      this.setState({value: event.target.value});
    } 
    handleSubmit(event) {
      //should interact with backend here and on submit, should update the database (entry)
      console.log('submit', this.state)
      this.props.createEntry(this.state);
    }
    
    render() {
      return (
          <div>
            <label>
              {this.state.date}
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" onClick={this.handleSubmit} />
            {/* should submit into database here */}
          </div>
      )
    }
}

export default connect(null, mapDispatchToProps)(Entry);
