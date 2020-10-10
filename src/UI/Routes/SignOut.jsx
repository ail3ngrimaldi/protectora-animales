import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignOut = () => {
  const firebase = useFirebase();

  const signoutWithGoogle = () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  };

  const history = useHistory();
  return (
    <div>
      <h1>Logout</h1>

      <button
        onClick={(event) => {
          event.preventDefault();
          signoutWithGoogle();
        }}
      >
       Logout with Google
      </button>
    </div>
  );
};

export default SignOut;
