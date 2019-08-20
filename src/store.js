import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './client/reducers/index';


const store = createStore(
    //function that creates our store; it takes in param (reducers) which is all of our reducer functions 
    //we can opt to include a preload/initla state param but we've included it in our reducer fx (that is already passed in ^)
    reducers,
    composeWithDevTools()
  );
  
  export default store;

// export default store;