import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'




// const mapStateToProps = state => {
//     //read access
//     // provide pertinent state here
//     const color = {state}
//     return color
//   }

const mapDispatchToProps = (dispatch) => ({
  //write access
  // create functions that will dispatch action creators
    changeMood: (mood) => dispatch(actions.changeMood(mood))
});

class Mood extends Component {
    constructor(props) {
        super(props);
    }
    //should trigger an action to dispatch reducer for state change
    render() {
      console.log(this.props.color)
        //should return a div with buttons (mood faces that should change the state)
        const moods = ['happy', 'sad', 'alert', 'mad', 'stressed'];
        const renderedMoods = moods.map((mood, index) => {
            return <button key={mood} onClick={() => {
                return this.props.changeMood(mood)
            }}>{mood}</button>
        })
        return (
        <div className='MoodRing'>
            {renderedMoods}
        </div> 
        )
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(Mood);
export default connect( null, mapDispatchToProps)(Mood);
