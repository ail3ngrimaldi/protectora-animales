import React from "react";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

const Error = ({classError, classInfo,showError,requiredFields}) => {

  return(
    <div >
      <div className={classError}>
        {
          showError.length ?
            showError.map(err=>{
              return <p>{err}</p>
            })
          :
            <p></p>
        }
      </div>
      <p className={classInfo}>{requiredFields}</p>
    </div>
  )
}

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
  const history = useHistory();
  const [usuario, setUsuario] = React.useState(initialState);
  const [error, setError] = React.useState(true)
  const [showError,setShowError] = React.useState([])
  const [requiredFields, setRequiredFields] = React.useState('')
  const [classError, setClassError] = React.useState('')
  const [classInfo, setClassInfo] = React.useState('')
  const [mailExistente, setMailExistente] = React.useState('')
  const updateField = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  
  
  const createEmail = () => {
    const expreg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if(error){
      let errorMessages = []
      let countError = 0
      let emptyFields = 0
      if(usuario.email === ''){
        
        emptyFields ++
        
        
      }else if(!expreg.test(usuario.email)){
        
          countError ++;
          errorMessages.push('Debe ingresar un email Valido!')
          setShowError(errorMessages)
          
        
      }else{
        errorMessages.push('')
        setShowError(errorMessages)
      }
      if(usuario.password === ''){
        emptyFields ++
      }else  if(usuario.password.length < 6)
       {
          countError ++;
          errorMessages.push('Las contraseña debe contener al menos 6 carateres')
          setShowError(errorMessages)
          
        
      }else{
        errorMessages.push('')
        setShowError(errorMessages)
      }
      if(usuario.firstName === ''){
        emptyFields ++
        
      }else if(usuario.firstName.length < 2)
        {
          countError ++;
          errorMessages.push('Los Nombres deben contener al menos 2 carateres')
          setShowError(errorMessages)
          
        
      }else{
        errorMessages.push('')
        setShowError(errorMessages)
      }
      if(usuario.lastName === ''){
        emptyFields ++
        
      }else if(usuario.lastName.length < 2)
       {
          countError ++;
          errorMessages.push('Los Apellidos deben contener al menos 2 carateres')
          setShowError(errorMessages)
          
        
      }else{
        errorMessages.push('')
        setShowError(errorMessages)
      }
      
      if(usuario.age === ''){
        emptyFields++
       
      }else if(isNaN(usuario.age)){
          countError ++;
          errorMessages.push('La edad debe ser un valor numéricos')
          setShowError(errorMessages)
            
      }
      else if(usuario.age < 18){
        countError ++;
        errorMessages.push('Debe ser mayor de edad para registrarse')
        setShowError(errorMessages)
           
      }
      else{
        errorMessages.push('')
        setShowError(errorMessages)
      }
      if(usuario.birthdate === ''){
        emptyFields++
       
      }
      if(usuario.location === ''){
        emptyFields ++
       
      }else if(usuario.location.length < 5 || usuario.location.length > 100){
          countError ++;
          errorMessages.push('Ha ingresado una localidad o ciudad invalida!')
          setShowError(errorMessages)
            
      }else{
        errorMessages.push('')
        setShowError(errorMessages)
      }
      if(usuario.address === ''){
        emptyFields++
       
      }else if(usuario.address.length < 5 || usuario.address.length > 100){
          countError ++;
          errorMessages.push('Ha ingesado una dirección invalida!')
          setShowError(errorMessages)
            
      }else{
        errorMessages.push('')
        setShowError(errorMessages)
      }

      if(emptyFields !== 0){
        setRequiredFields('Es obligatorio completar todos los campos')
        setClassInfo('text-justify alert alert-info')
      }else{
        setRequiredFields('')
      }
      if(countError !== 0){
        setClassError('text-justify alert alert-danger')
        
      }
      if(countError === 0 && emptyFields === 0){
        setError(false)
      }
    }
    else{

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
                    initials: usuario.firstName +" " + usuario.lastName,                  
                    email: usuario.email
        })
        
        result.user.sendEmailVerification(configuracion).catch(error =>{
          console.error(error)
        /*  Materialize.toast(error.message, 4000) */
        })
        history.push("/")
      })
      .catch(error => {
        console.error(error)
      /*   Materialize.tost(error.message, 4000) */
       setError(true)
       if('The email address is already in use by another account'){
         setMailExistente('La dirección de correo electrónico ya está siendo utilizada por otra cuenta.')
       }else{
        setMailExistente('No se ha podido realizar su registro. Verifique que los datos ingresados sean correctos.')
       }
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
    
    
    }
    
    
   };

  
  return (
    <div className="text-center">
      
      <h1>Crear un Usuario</h1>
      <form id="formlogin" className="form-signin justify-content-center">
        <div className="form-row">
        <div className="form-group col-md-6">
              <input
                type="text"
                required
                name="email"
                onChange={updateField}
                className="form-control"
                placeholder="E-mail"
                autoFocus="autofocus"
              />
              
              </div>
              <div className="form-group col-md-6">
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
              <div className="form-row">
        <div className="form-group col-md-4">
              <input
                type="text"
                required
                name="firstName"                
                onChange={updateField}
                className="form-control"
                placeholder="Nombre"
              />
              
              </div>
               <div className="form-group col-md-4">
              <input
                type="text"
                required
                name="lastName"                
                onChange={updateField}
                className="form-control"
                placeholder="Apellido"
              />
              
              </div>
               <div className="form-group col-md-4">
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
            <p>Fecha de nacimiento</p>
            <div className="form-row">
          <div className="form-group col-md-12 ">
              <input
                type="date"
                required
                name="birthdate"                
                onChange={updateField}
                className="form-control"
              />
              
            </div>
            </div>
            <div className="form-row">
          <div className="form-group col-md-6">
              <input
                type="text"
                required
                name="location"                
                onChange={updateField}
                className="form-control"
                placeholder="Localidad"
              />
              
              </div>
              <div className="form-group col-md-6">
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
              {
                mailExistente ?
                <p className='text-justify text-danger'>{mailExistente}</p>
                :
                <span></span>
              }
              <Error classError={classError} classInfo={classInfo} showError={showError} requiredFields={requiredFields}/>
              <input type="submit" className="btn btn-dark" onClick={(e) => {
                e.preventDefault(); createEmail(); 
              }} value='Registrarse'/>
              <br/>
            
        </form>

       
       
     
    </div>
  );
};

export default CrearUsuario;
