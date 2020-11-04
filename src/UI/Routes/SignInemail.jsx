import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import SignIn from "./SignIn"

const SignInmail = () => {
  const firebase = useFirebase();

  const initialState = {
    email: "",
    password: ""
  };
  
  const history = useHistory();
  const [usuario, setUsuario] = React.useState(initialState);
  // const [error, setError] = React.useState(true)
  const [errorMail, setErrorMail] = React.useState('')
  const [errorPassword, setErrorPassword] = React.useState('')
  const [requireFields, setRequireFields] = React.useState('')
  const expreg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  const [errorLogin, setErrorLogin] = React.useState('')
  const updateField = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const loadData = async () => {

    let countError = 0
    let emptyFields = 0
    if(usuario.email === ''){
        
      emptyFields ++
      
      
    }else if(!expreg.test(usuario.email)){
      
        countError ++;
        setErrorMail('Debe ingresar un email Valido!')
        
        
      
    }else{
      setErrorMail('')
     
    }
    if(usuario.password === ''){
      emptyFields ++
    }else  if(usuario.password.length < 6)
     {
        countError ++;
        setErrorPassword('Las contraseña debe contener al menos 6 carateres')
        
        
      
    }else{
      setErrorPassword('')
     
    }
    if(emptyFields !== 0){
      setRequireFields('Es obligatorio completar todos los campos')
      
    }else{
      setRequireFields('')
    }
    
    if(countError === 0 && emptyFields === 0){
      setRequireFields('Es obligatorio completar todos los campos')
    }
  }

  const signInWithmail = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(() => {
        history.push("/");
      })
      .catch(function(err) {
          console.log(err);
          setErrorLogin('El email o contraseña ingresada no se hallan registrados')
        });

    } catch (err) {
       await loadData()
    }
  };


  return (
    <div>      
      <Container>
        <div className="text-center ">
      <form id="formlogin" className="form-signin justify-content-center">
      <img className="mb-4" src="https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.0-9/84985666_2934435266609344_8840466609970610176_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=5cEbvo-tyT8AX-FQXoq&_nc_ht=scontent.fmdz5-1.fna&oh=4f8adb17ac81b1be40945c4399e6ad2f&oe=5FB3E968" alt="" width="172" height="172"/>
      <div className="form-row">
    <div className="col-md-6 mb-3">
              <input
                id="inputEmail"
                type="email"
                required
                name="email"
                onChange={updateField}
                className="form-control"
                placeholder="E-mail"
                autoFocus="autofocus"
              />
              </div>
              
              <div className="col-md-6 mb-3">
              <input
              id="inputPassword"
                type="password"
                required
                name="password"                
                onChange={updateField}
                className="form-control"
                placeholder="Contraseña"
              />
              </div>
              {
                errorMail ?
                <p className='text-justify text-danger'>{errorMail}</p>
                :
                <span></span>
              }
              {
                errorPassword ?
                <p className='text-justify text-danger'>{errorPassword}</p>
                :
                <span></span>
              }
              {
                errorLogin ?
                <p className='text-justify text-danger'>{errorLogin}</p>
                :
                <span></span>
              }
              {
                requireFields ?
                <p className='text-justify text-danger'>{requireFields}</p>
                :
                <span></span>
              }
              </div>
              
        </form>
          <div className="form-signin ">
            <input type="submit" className="btn btn-lg btn-dark btn-block" onClick={async ()=> await signInWithmail() } value='Ingresa con tu cuenta'/>  
          </div> 

          <div className="form-group">       
            <div><SignIn/></div>
            <div className="form-signin">
              <NavLink to='/crearusuario'><button className="btn btn-lg btn-info btn-block">¿No tenes cuenta? <span>Registrarse</span></button></NavLink>
            </div>
          </div>

          <div className="form-password">       
            <div className="form-signin">                   
              <NavLink to='/resetpassword'><button className="btn btn-lg btn-light btn-block"><span>¿Olvidaste tu contraseña?</span></button></NavLink>
            </div>
          </div>
        </div>
        </Container>
    </div>
  );
};

export default SignInmail;
