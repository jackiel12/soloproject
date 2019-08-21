//import from npm (json)
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from "react-router";

import App from './App';
import store from './store';
import './styles.css'



render(<App/>, document.getElementById('root'));
