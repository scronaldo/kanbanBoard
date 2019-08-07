import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



//if you get confused, below is just redux-persist basic integration logic for local storage persistance
// https://github.com/rt2zz/redux-persist#basic-usage

// config for persistReducer
const persistConfig = {
  key: "root",
  storage
};

//returns an enhanced NEW reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
  // creating a standart redux store with enhanced reducer
  let store = createStore(persistedReducer, applyMiddleware(thunk));

  // returns persistor object based on store
  let persistor = persistStore(store);
  // destructuring variables
  return { store, persistor };
};





// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from "../reducers/index";
// import thunk from 'redux-thunk';



// const store = createStore(rootReducer,  applyMiddleware(thunk));


// if(process.env.NODE_ENV !== 'production') {
//    window.store = store;
//  }
// //  store.getState();

// export default store;