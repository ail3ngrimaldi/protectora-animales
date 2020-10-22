import React, {useState, useEffect} from "react";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from 'react-redux'
import firebase from 'firebase/app'
import {db} from '../../index'


const EditProfile = (props) => {
  const {auth, profile} = props
  
  // const { uid } = useSelector((state) => state.firebase.auth);

  const initialState = {
    email: auth.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    age: profile.age,
    birthdate: profile.birthdate,
    location: profile.location,
    address: profile.address,
    isAdmin: profile.isAdmin
  };

  

  const [usuario, setUsuario] = React.useState(initialState);
  const updateField = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }; 
  

  const firestore = useFirestore();
  var user = firebase.auth().currentUser;
  const getUser = async () => {
    firestore.collection("users").doc(user.uid).set({         
})
  };

  useEffect(() => {
    
    getUser();
  }, [])
  
  const createEmail = () => {
    var user = firebase.auth().currentUser;
    var userDocRef = firestore.collection('users').doc(user.uid);
    userDocRef.set({
      firstName: usuario.firstName,
      lastName: usuario.lastName,
      age: usuario.age,
      birthdate: usuario.birthdate,
      location: usuario.location,
      address: usuario.address,      
      initials: usuario.firstName + " " + usuario.lastName,
      isAdmin: usuario.isAdmin,
      email:usuario.email
      
    
});
    console.log(usuario.email)
    user.updateEmail(usuario.email).then(result => {
        result.firestore.collection("users").doc(result.user.uid).update({
        firstName: usuario.firstName,
      lastName: usuario.lastName,
      age: usuario.age,
      birthdate: usuario.birthdate,
      location: usuario.location,
      address: usuario.address,      
      initials: usuario.firstName + usuario.lastName,
      isAdmin: profile.isAdmin,
      email: usuario.email
        
    })
    result.sendEmailVerification().catch(error =>{
      console.error(error)
     /*  Materialize.toast(error.message, 4000) */
    })
    .then(function() {
        console.log("Document successfully updated!");
    });
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  } 

  const history = useHistory();
  return (
    <div>
      <h1>Editar mi Perfil</h1>
      <form id="formlogin">
          <div className="form-group col-md-12" id="contelogin2">
            <div className="input-group mb-3 id" id="contelogin3">            
              <input
                type="text"
                required
                name="email"
                onChange={updateField}
                value={auth.email}
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
                value={profile.firstName}
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
                value={profile.lastName}
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
                value={profile.age}
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
                name="birthdate"                
                onChange={updateField}
                value={profile.birthdate}
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
                value={profile.location}
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
                value={profile.address}
                className="form-control"
                placeholder="Dirección"
              />
            </div>
      
          </div>

          <div className="form-group col-md-12 " id="contelogin4">
            <div className="input-group mb-3" id="contelogin5">
              <input
              style= {{display: "none"}}
                type="text"
                required
                name="isAdmin"                
                onChange={updateField}
                value={profile.isAdmin}
                className="form-control"
                readOnly="true"
                placeholder="Es Admin"
              />
            </div>
      
          </div>
        </form>

        <input type="submit" className="btn btn-outline-dark" onClick={(e) => {
          e.preventDefault(); createEmail(); history.push("/")
        }} value='Guardar Cambios'/>
       
     
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(EditProfile)

