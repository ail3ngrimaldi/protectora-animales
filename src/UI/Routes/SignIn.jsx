import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const firebase = useFirebase();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/");
      });
  };

  const history = useHistory();
  return (
    <div>

      <button
        onClick={(event) => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
       Login con Google
      </button>
    </div>
  );
};

export default SignIn;