import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import SignIn from "./SignIn"

const SignInmail = () => {
  const firebase = useFirebase();

  const initialState = {
    email: "",
    password: ""
  };

  const [usuario, setUsuario] = React.useState(initialState);
  const updateField = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const signInWithmail = () => {
    
    firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    
  };

  const history = useHistory();
  return (
    <div>
      <h1>Loguearte</h1>
      <form id="formlogin">
          <div className="form-group col-md-12" id="contelogin2">
            <div className="input-group mb-3 id" id="contelogin3">
              <input
                type="text"
                required
                name="email"
                onChange={updateField}
                className="form-control"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
                type="password"
                required
                name="password"                
                onChange={updateField}
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
      
          </div>
        </form>
        

        <input type="submit" className="btn btn-outline-dark" onClick={signInWithmail} value='Iniciar Sesión'/>
       
        <h1>Loguearte con Gmail</h1>
        <div><SignIn/></div>
     
    </div>
  );
};

export default SignInmail;
