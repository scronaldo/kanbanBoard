import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';



const store = createStore(rootReducer,  applyMiddleware(thunk));


if(process.env.NODE_ENV !== 'production') {
   window.store = store;
 }
//  store.getState();

export default store;