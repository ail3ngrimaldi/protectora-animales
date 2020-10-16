import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory, Link } from "react-router-dom";

const SignOut = () => {
  const firebase = useFirebase();

  const signoutWithGoogle = () => {
    firebase.auth().signOut().then(() => {
      history.push("/");
    }).catch(function(error) {
        // An error happened.
      });
  };

  const history = useHistory();
  return (
    
      <Link 
        to='/'
        className="dropdown-item"
        onClick={(event) => {
          event.preventDefault();
          signoutWithGoogle();
        }}
      >
       Logout
      </Link>
    
  );
};

export default SignOut;
