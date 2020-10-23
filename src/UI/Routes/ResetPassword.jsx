import React,{ useEffect } from "react";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { db } from '../../index'

const ResetPassword = () => {
	const firebase = useFirebase();
	const firestore = useFirestore();
	const [pass, setPass] = React.useState({});
	const [userList, setUserList] = React.useState([]);
	var modal = false;


	const updateField = (e) => {
		setPass({
		  [e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if(userList.some(user => user.email === pass.email)){
			// firebase.auth().sendPasswordResetEmail(pass.email)---------------- DESCOMENTAR AL FINAL
			// .then(result => {------------------------------------------------- DESCOMENTAR AL FINAL
			console.log('EL MAIL EXISTE') //------------------------------------- BORRAR 
			modal = false;
			// })---------------------------------------------------------------- DESCOMENTAR AL FINAL
			// .catch(err => console.Error(`Ocurrió un error: ` + err))---------- DESCOMENTAR AL FINAL
		} else {
			console.log('EL MAIL NO EXISTE') //---------------------------------- BORRAR 
			modal = true;
		}
		//userList.includes(pass.email).......................Esto está porque queria saber como se puede hacer un .includes() a un JSON
	}

	useEffect(() => {
		const fetchUsers = async () => {
			const userDB = await db.collection("users").get();
			setUserList(
				userDB.docs.map((doc) => {
					return doc.data();
				})
			);
		};
		fetchUsers();
	}, []);

  return(
  	<div>
	  	<form onSubmit={handleSubmit}>
			<input type="email" name="email" placeholder="Correo electrónico" onChange={updateField}/>
			<input type="submit" value="submit"/>
	    </form>
	    { modal ? <div>MODAL</div> : <div>CARGANDO</div> } (esta mierda se tiene que actualizar en tiempo real)
    </div>
  )
}

export default ResetPassword;