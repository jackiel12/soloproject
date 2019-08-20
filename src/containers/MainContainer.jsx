import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './RRContainer';
import Mood from './MoodContainer';

//maincontainer should render sidebar on side, moodring on top; 
class MainContainer extends Component {
    //should interact with the backend to pull from json file/api to generate random motivational quotes
    render() {
        return (
            <div>
                <Mood/>
                <Sidebar/>
            </div>
        )
    }
}

export default MainContainer;