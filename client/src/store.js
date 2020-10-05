import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './Components/Reducers/index';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import firebase from './Components/config/firebaseConfig'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [
    thunk.withExtraArgument({
        getFirestore, getFirebase
    })
]
const store = createStore(mainReducer, composeEnhancers(
    applyMiddleware(...middleWare), reduxFirestore(firebase)))


export default store;