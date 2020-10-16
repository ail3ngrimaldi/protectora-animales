import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserProfile = (props) => {
    const {auth, profile} = props
    //console.log(auth)
    console.log(profile)
    //const name = profile.hasOwnProperty('displayName') ? profile.displayName : profile.firstName + ' '+profile.lastName
    return(
        <div>
            <h1>Mi Perfil</h1>
            {
                profile.hasOwnProperty('displayName') ?
                <p>{profile.displayName}</p>
                :
                <div>
                    <p>Nombre: {profile.firstName}</p>
                    <p>Apellido: {profile.lastName}</p>
                    <p>Edad: {profile.age}</p>
                    <p>Fecha de Nacimiento: {profile.birthdate}</p>
                    <p>Localidad: {profile.location}</p>
                    <p>Direccion: {profile.address}</p>
                    <Link to='/EditarPerfil'><button >Modificar Perfil</button></Link>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(UserProfile)