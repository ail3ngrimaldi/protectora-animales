import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// NO SE
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

// AppRouter
import App from './App';

// Configuracion React-Redux
import { createStore } from 'redux'
import rootReducer from './Redux/store/reducers/rootReducer'
import { Provider } from 'react-redux'

// Configuracion Firebase-React-Redux
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import * as serviceWorker from "./serviceWorker";

// Index CSS
import './index.css';

  const firebaseConfig = {
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

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);
const rrfProps = {
   firebase,	
   config: rrfConfig,
   dispatch: store.dispatch,
   createFirestoreInstance,
};	
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
    serviceWorker.unregister();
