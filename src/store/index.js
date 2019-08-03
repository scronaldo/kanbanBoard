import {createStore} from 'redux';
import rootReducer from "../reducers/index"


const store = createStore(rootReducer,  /* preloadedState, */
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
if(process.env.NODE_ENV !== 'production') {
   window.store = store;
 }
//  store.getState();

export default store;