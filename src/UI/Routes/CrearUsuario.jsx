import React from "react";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CrearUsuario = () => {
  const firebase = useFirebase();
  const firestore = useFirestore();
  // const { uid } = useSelector((state) => state.firebase.auth);

  const initialState = {
    email: "",
    password: "",
    initials: "",
    firstName: "",
    lastName: "",
    age: "",
    birthDate: "",
    location: "",
    address: ""
  };

  const [usuario, setUsuario] = React.useState(initialState);
  const updateField = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const createEmail = () => {
    
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
    .then(res => {
        return firestore.collection('users').doc(res.user.uid).set({
            firstName: usuario.firstName,
            lastName: usuario.lastName,
            age: usuario.age,
            birthdate: usuario.birthDate,
            location: usuario.location,
            address: usuario.address
        })
    }) 
    .then(() => {
      history.push("/")
    })
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
      <h1>Crear un Usuario</h1>
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
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
                type="text"
                required
                name="firstName"                
                onChange={updateField}
                className="form-control"
                placeholder="Nombre"
              />
            </div>
      
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
                type="text"
                required
                name="lastName"                
                onChange={updateField}
                className="form-control"
                placeholder="Apellido"
              />
            </div>
      
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
                type="number"
                required
                name="age"                
                onChange={updateField}
                className="form-control"
                placeholder="Edad"
              />
            </div>
      
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
            <h3>Fecha de nacimiento</h3>
              <input
                type="date"
                required
                name="birthDate"                
                onChange={updateField}
                className="form-control"
              />
            </div>
      
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
                type="text"
                required
                name="location"                
                onChange={updateField}
                className="form-control"
                placeholder="Localidad"
              />
            </div>
      
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
                type="text"
                required
                name="address"                
                onChange={updateField}
                className="form-control"
                placeholder="Dirección"
              />
            </div>
      
          </div>
        </form>

        <input type="submit" className="btn btn-outline-dark" onClick={(e) => {
          e.preventDefault(); createEmail(); 
        }} value='Iniciar Sesión'/>
       
     
    </div>
  );
};

export default CrearUsuario;
