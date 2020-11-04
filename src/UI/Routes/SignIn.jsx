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
    <div className="form-signin">

      <button
      className="btn btn-lg btn-danger btn-block"
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