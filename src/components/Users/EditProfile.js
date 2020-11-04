import React, { useEffect } from "react";
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
import { connect } from 'react-redux'
// import firebase from 'firebase/app'
const firebase = require('firebase/app')
// import { db } from '../../index'
// import { FormatAlignJustify } from "@material-ui/icons";


const EditProfile = (props) => {
  const { auth, profile } = props
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

  useEffect(() => {
    const getUser = async () => {
      firestore.collection("users").doc(user.uid).set({
      })
    };
    getUser();
  }, [user, firestore])

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
      isAdmin: usuario.isAdmin || false,
      email: usuario.email


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
      result.sendEmailVerification().catch(error => {
        console.error(error)
        /*  Materialize.toast(error.message, 4000) */
      })
        .then(function () {
          console.log("Document successfully updated!");
        });
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  const history = useHistory();
  return (
    <div>
      <h1>Editar mi Perfil</h1>
      <form id="formlogin" onSubmit={(e) => {
        e.preventDefault(); createEmail(); history.push("/")
      }}  >
        <div className="form-group col-md-12" id="contelogin2">
          <div className="input-group mb-3 id" id="contelogin3">
            <input
              type="text"
              name="email"
              onChange={updateField}
              value={auth.email}
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              type="password"
              name="password"
              onChange={updateField}

              className="form-control"
              placeholder="Contraseña"
              required
            />
          </div>

        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              type="text"
              name="firstName"
              onChange={updateField}
              value={profile.firstName}
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>

        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              type="text"
              name="lastName"
              onChange={updateField}
              value={profile.lastName}
              className="form-control"
              placeholder="Apellido"
              required
            />
          </div>

        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              type="number"
              name="age"
              onChange={updateField}
              value={profile.age}
              className="form-control"
              placeholder="Edad"
              required
            />
          </div>

        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <h3>Fecha de nacimiento</h3>
            <input
              type="date"
              name="birthdate"
              onChange={updateField}
              value={profile.birthdate}
              className="form-control"
              required
            />
          </div>

        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              type="text"
              name="location"
              onChange={updateField}
              value={profile.location}
              className="form-control"
              placeholder="Localidad"
              required
            />
          </div>

        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              type="text"
              name="address"
              onChange={updateField}
              value={profile.address}
              className="form-control"
              placeholder="Dirección"
              required
            />
          </div>

        </div>

        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              style={{ display: "none" }}
              type="text"
              name="isAdmin"
              onChange={updateField}
              value={profile.isAdmin}
              className="form-control"
              readOnly="true"
              placeholder="Es Admin"
              required
            />
          </div>

        </div>

        <input type="submit" className="btn btn-outline-dark col-md-12" value='Guardar Cambios' />
      </form>


    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(EditProfile)

