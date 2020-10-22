import React, {useState, useEffect} from "react";
import { useFirestore } from "react-redux-firebase";
import { connect } from 'react-redux'

const EditProfile = (props) => { 
  const [usuario, setUsuario] = useState({});   
  const firestore = useFirestore();

  useEffect(() => {
    setUsuario(props.user);
  }, [props.user])
  
  const yesAdmin = () => {    
    var userDocRef = firestore.collection('users').doc(usuario.uid); 
    userDocRef.set({
      ...usuario,
      isAdmin: true 
    });      
  } 

  const notAdmin = () => {    
    var userDocRef = firestore.collection('users').doc(usuario.uid); 
    userDocRef.set({
      ...usuario,
      isAdmin: false 
    });      
  } 

  const checkAdmin = (e) => {
     if(usuario.isAdmin === false) {
        yesAdmin();
        e.target.value = "Quitar Admin";
     } 
     else {
        notAdmin();
        e.target.value = "Hacer Admin";
     }
  }

  return (
    <div>
        <input type="submit" className="btn btn-outline-dark" onClick={checkAdmin} value={usuario.isAdmin ? "Quitar Admin" : "Hacer Admin"}/>     
    </div>
  );
};

const mapStateToProps = (state) => {  
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(EditProfile)


