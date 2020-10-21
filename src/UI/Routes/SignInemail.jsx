import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Swal from 'sweetalert2';
import SignIn from "./SignIn"
import './Style.css'

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
        <div className="text-center">
        <img class="mb-4" src="https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.0-9/84985666_2934435266609344_8840466609970610176_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=5cEbvo-tyT8AX-FQXoq&_nc_ht=scontent.fmdz5-1.fna&oh=4f8adb17ac81b1be40945c4399e6ad2f&oe=5FB3E968" alt="" width="172" height="172"/>
       <h4>Ingresar</h4> 
      <form id="formlogin" class="form-signin">
            <label for="inputEmail" class="sr-only">Dirección de Correo</label>
              <input
              id="inputEmail"
                type="text"
                required
                name="email"
                onChange={updateField}
                className="form-control"
                placeholder="E-mail"
              />
            <label for="inputPassword" class="sr-only">Contraseña</label>
              <input
              id="inputPassword"
                type="password"
                required
                name="password"                
                onChange={updateField}
                className="form-control"
                placeholder="Contraseña"
              />
              
        </form>
        <div class="form-signin">
        <input type="submit" className="btn btn-lg btn-dark btn-block" onClick={signInWithmail} value='Ingresar'/>  
        </div>            
        <div><SignIn/></div>
        </div>
        </Container>
    </div>
  );
};

export default SignInmail;
