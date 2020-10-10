"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _projectReducer = _interopRequireDefault(require("./projectReducer"));

var _redux = require("redux");

var _reduxFirestore = require("redux-firestore");

var _reactReduxFirebase = require("react-redux-firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer["default"],
  project: _projectReducer["default"],
  firestore: _reduxFirestore.firestoreReducer,
  firebase: _reactReduxFirebase.firebaseReducer
});
var _default = rootReducer; // the key name will be the data property on the state object

exports["default"] = _default;