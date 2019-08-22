import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


const mapStateToProps = (state) => {
  const { username, color } = state.mood;
  return { username, color };
};

// entry container should be a large input that onchange should update database on backend (fetch to backend?)
const mapDispatchToProps = (dispatch) => ({
  // write access
  // create functions that will dispatch action creators
  createEntry: (text) => dispatch(actions.createEntry(text)),
});


class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', date: (new Date().toString()).slice(4, 15) };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, username: this.props.username, color: this.props.color });
  }

  handleSubmit(event) {
    // should interact with backend here and on submit, should update the database (entry)
    this.props.createEntry(this.state);
  }

  render() {
    // console.log('entry container-', 'state', this.state);
    return (
      <div>
        <label>
          {this.state.date}
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
