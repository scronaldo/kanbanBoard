import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import Store from './store';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { persistor, store } = Store();
// console.log(perstistor);
ReactDOM.render(
<Provider store={store}>
  {/* redux-persist wrapper */}
  <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
 </Provider>, document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


