import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Swal from 'sweetalert2';
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
    .then(() => {
      history.push("/");
    })
    .catch(function(error) {
       return error;
      });
    
  };

  const history = useHistory();
  return (
    <div>      
      <Container>
       <h4>Loguearte</h4> 
      <form id="formlogin">
          <div className="form-group col-md" id="contelogin2">
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
          <div className="form-group col-md " id="contelogin4">
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
        <br />
        <br />
        <h4>Con Gmail</h4>                
        <div><SignIn/></div>
        </Container>
    </div>
  );
};

export default SignInmail;
