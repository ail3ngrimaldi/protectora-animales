import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './Reducers/index';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
// import firebase from './config/firebaseConfig'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [
    thunk.withExtraArgument({
        getFirestore, getFirebase
    })
]
const store = createStore(mainReducer, composeEnhancers(
    applyMiddleware(...middleWare)))


export default store;