import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import './Style.css'

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
    <div class="form-signin">

      <button
      class="btn btn-lg btn-danger btn-block"
        onClick={(event) => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
       Ingresar con Google
      </button>
    </div>
  );
};

export default SignIn;