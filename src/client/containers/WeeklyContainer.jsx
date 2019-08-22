/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  // read access
  // provide pertinent state here
  const { username, weeklyData } = state.mood;
  return { username, weeklyData };
};

const mapDispatchToProps = (dispatch) => ({
  // read access
  // provide pertinent state here
  showWeek: (username) => dispatch(actions.showWeek(username)),
  handleDelete: (info) => dispatch(actions.handleDelete(info)),
});

class Weekly extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showWeek(this.props.username);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  //   handleEdit(event) {
  //     // should interact with backend here and on submit, should update the database (entry)
  //     this.props.createEntry(this.state);
  //   }

  handleDelete(info) {
    // should interact with backend here and on submit, should update the database (entry)
    this.props.handleDelete(info, this.props.username);
  }

  render() {
    const weeklyPosts = this.props.weeklyData ? this.props.weeklyData.map((post, index) => (
      <div className="post" key={post} index={index} style={{ backgroundColor: post[1] }}>
        {post[0]}
        {/* <button type="button" onClick={this.handleEdit}>edit</button> */}
        <button type="button" onClick={() => this.handleDelete(post)}>delete</button>
      </div>
    )) : <h4>Loading...</h4>;
    return (
      <div className="WeeklyPosts">
        {weeklyPosts}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
