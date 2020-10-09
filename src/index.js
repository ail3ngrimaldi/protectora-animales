import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// NO SE
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// AppRouter
import App from './App';

// Configuracion React-Redux
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

// Configuracion Firebase-React-Redux
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import registerServiceWorker from './registerServiceWorker';

// Index CSS
import './index.css';

const config = {
  apiKey: "AIzaSyAt59iskNq8lNrlngI_waNKdgi8t2cKgDU",
  authDomain: "protectoraanimales-9c9db.firebaseapp.com",
  databaseURL: "https://protectoraanimales-9c9db.firebaseio.com",
  projectId: "protectoraanimales-9c9db",
  storageBucket: "protectoraanimales-9c9db.appspot.com",
  messagingSenderId: "1086332164987",
  appId: "1:1086332164987:web:b2d086178b65c85b793bde"
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

firebase.initializeApp(config);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);
const rrfProps = {
   firebase,	
   config: rrfConfig,
   dispatch: store.dispatch,
   createFirestoreInstance
};



// const store = firebase.firestore()

// export default () => {
//   return createStore(
//     rootReducer,
//     initialState,
//     compose(
// 	    // applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
// 	    reactReduxFirebase(fbConfig, {rrfConfig /*, useFirestoreForProfile: true, attachAuthIsReady: true*/})
// 	)
// )}




// store.firebaseAuthIsReady.then(() => {
	
	  ReactDOM.render(
	  	<React.StrictMode>
		  	<Provider store={store}>
			  	<ReactReduxFirebaseProvider {...rrfProps}>
				  	<BrowserRouter>
				  		<App />
				  	</BrowserRouter>
			  	</ReactReduxFirebaseProvider>
		  	</Provider>
	  	</React.StrictMode>, 
	  document.getElementById('root'));
	  registerServiceWorker();
	
// });