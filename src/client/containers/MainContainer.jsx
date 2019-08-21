import React, { Component } from 'react';
import {connect} from 'react-redux';
import Sidebar from './RRContainer';
import MoodContainer from './MoodContainer';

//maincontainer should render sidebar on side, moodring on top; 

const mapStateToProps = state => {
    //read access
    // provide pertinent state here
    const {color} = state.mood;
    return {color};
  }

class MainContainer extends Component {
    //should interact with the backend to pull from json file/api to generate random motivational quotes
    constructor(props) {
        super(props)
    }
    render() {
        console.log('main,', this.props.color)
        return (
            <div style={{backgroundColor: this.props.color}}>
                <MoodContainer color={this.props.color} />
                <Sidebar/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MainContainer);
