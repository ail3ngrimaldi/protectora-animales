import React from "react";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import './Style.css'
// import { useSelector } from "react-redux";

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
    birthdate: "",
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
    .then(result => {
      result.user.updateProfile({
        displayName : usuario.firstName
      })

      const configuracion = {
        url : 'http://localhost:3000'
      }

      firestore.collection('users').doc(result.user.uid).set({
                  firstName: usuario.firstName,
                  lastName: usuario.lastName,
                  age: usuario.age,
                  birthdate: usuario.birthdate,
                  location: usuario.location,
                  address: usuario.address,
                  isAdmin: false,
                  initials: usuario.firstName[0] + usuario.lastName[0]
      })

      result.user.sendEmailVerification(configuracion).catch(error =>{
        console.error(error)
       /*  Materialize.toast(error.message, 4000) */
      })

    })
    .catch(error => {
      console.error(error)
    /*   Materialize.tost(error.message, 4000) */
    });
   
    
  //   .then(authData => {// You are forgetting this reference.
  //     authData.user.sendEmailVerification();
  // }, function(error) {
  //     // An error happened.
  // }) 


  //   .then (res =>  {
  //           firestore.collection('users').doc(res.user.uid).set({
  //           firstName: usuario.firstName,
  //           lastName: usuario.lastName,
  //           age: usuario.age,
  //           birthdate: usuario.birthDate,
  //           location: usuario.location,
  //           address: usuario.address
  //       })
  //   },  function(error) {
  //     // An error happened.
  // }) 
  //   /* .then(() => {
  //     history.push("/")
  //   }) */
  //   .catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ...
  //     });
    
   };

  const history = useHistory();
  return (
    <div className="text-center">
      <h1>Crear un Usuario</h1>
      <form id="formlogin" class="form-signin">
          <div className="form-group col-md-12" id="contelogin2">
            <div className="input-group id" id="contelogin3">
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
            <div className="input-group" id="contelogin5">
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
            <div className="input-group" id="contelogin5">
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
            <div className="input-group" id="contelogin5">
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
            <div className="input-group" id="contelogin5">
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
            <div className="input-group" id="contelogin5">
            <h3>Fecha de nacimiento</h3>
              <input
                type="date"
                required
                name="birthdate"                
                onChange={updateField}
                className="form-control"
              />
            </div>
      
          </div>
          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group" id="contelogin5">
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
            <div className="input-group" id="contelogin5">
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

        <div className="form-signin">
        <input type="submit" className="btn btn-lg btn-dark btn-block" onClick={(e) => {
          e.preventDefault(); createEmail(); history.push("/")
        }} value='Ingresar'/>
       </div>
     
    </div>
  );
};

export default CrearUsuario;
