import React, { Component } from 'react';



const mapStateToProps = store => ({
    //read access
    // provide pertinent state here

})

const mapDispatchToProps = (dispatch) => ({
  //write access
  // create functions that will dispatch action creators
});

class Mood extends Component {
    constructor(props) {
        super(props);
    }
    //should trigger an action to dispatch reducer for state change
    render() {
        //should return a div with buttons (mood faces that should change the state)
        const moods = ['happy', 'sad', 'alert', 'mad', 'stressed'];
        const renderedMoods = moods.map((mood, index) => {
            return <button key={mood}>{mood}</button>
        })
        return (
           <div className='MoodRing'>
            {renderedMoods}
           </div> 
        )
    }
}


export default Mood;