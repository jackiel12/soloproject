import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';


const store = createStore(
    //function that creates our store; it takes in param (reducers) which is all of our reducer functions 
    //we can opt to include a preload/initla state param but we've included it in our reducer fx (that is already passed in ^)
    reducers,
    //import middleware to store - structure is that middleware goes inside 
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;