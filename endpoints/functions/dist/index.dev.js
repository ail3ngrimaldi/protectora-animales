"use strict";

var functions = require('firebase-functions');

var admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var createNotification = function createNotification(notification) {
  return admin.firestore().collection('notifications').add(notification).then(function (doc) {
    return console.log('notification added', doc);
  });
};

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(function (doc) {
  var project = doc.data();
  var notification = {
    content: 'Added a new project',
    user: "".concat(project.authorFirstName, " ").concat(project.authorLastName),
    time: admin.firestore.FieldValue.serverTimestamp()
  };
  return createNotification(notification);
});
exports.userJoined = functions.auth.user().onCreate(function (user) {
  return admin.firestore().collection('users').doc(user.uid).get().then(function (doc) {
    var newUser = doc.data();
    var notification = {
      content: 'Joined the party',
      user: "".concat(newUser.firstName, " ").concat(newUser.lastName),
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });
});