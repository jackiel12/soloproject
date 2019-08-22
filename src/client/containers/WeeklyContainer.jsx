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

});


class Weekly extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showWeek(this.props.username);
  }

  render() {
    console.log('weeklyData:', this.props.weeklyData);
    const weeklyPosts = this.props.weeklyData ? this.props.weeklyData.map((post) => (
      <div className="post" key={post} style={{ backgroundColor: post[1] }}>{post[0]}</div>
    )) : <h4>Loading...</h4>;
    return (
      <div className="WeeklyPosts">
        {/* <h2>working on:</h2> */}
        {weeklyPosts}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
