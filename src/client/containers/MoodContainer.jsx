/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


const mapDispatchToProps = (dispatch) => ({
  // write access
  // create functions that will dispatch action creators
  changeMood: (mood) => dispatch(actions.changeMood(mood)),
});

class Mood extends Component {
  constructor(props) {
    super(props);
  }

  // should trigger an action to dispatch reducer for state change
  render() {
    // should return a div with buttons (mood faces that should change the state)
    const moods = ['happy', 'sad', 'alert', 'mad', 'stressed'];
    const renderedMoods = moods.map((mood, index) => (
      <button
        type="button"
        key={mood}
        onClick={() => this.props.changeMood(mood)}
      >
        {mood}
      </button>
    ));
    return (
      <div className="MoodRing">
        {renderedMoods}
      </div>
    );
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(Mood);
export default connect(null, mapDispatchToProps)(Mood);
