import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



// TODO: DIVE DEEPER INTO R-P
// https://github.com/rt2zz/redux-persist#basic-usage
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
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