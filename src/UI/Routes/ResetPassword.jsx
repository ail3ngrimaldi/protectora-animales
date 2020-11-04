import React,{ useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { db } from '../../index'

const ResetPassword = () => {
	const firebase = useFirebase();
	// const firestore = useFirestore();
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
			firebase.auth().sendPasswordResetEmail(pass.email)
			.then(() => {
			alert('Te hemos enviado un correo electronico') //------------------------------------- BORRAR 
			modal = false;
		})
		.catch(err => console.Error(`Ocurrió un error: ` + err))
		} else {
			alert('Este email no esta registrado') //---------------------------------- BORRAR 
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
		  <h3 className="display-6 font-weight-light justify-content py-4 ml-5">RECUPERA TU CUENTA</h3>
		  <div className="passdiv">
		  <h6> Ingresa tu correo electrónico para buscar tu cuenta.</h6>
			<input type="email" name="email" placeholder="Correo electrónico" onChange={updateField}/>
			<input type="submit" value="submit"/>
		  </div>
	    </form>
	    { modal ? <div>MODAL</div> : <div></div> }
    </div>
  )
}

export default ResetPassword;