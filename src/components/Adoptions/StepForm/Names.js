import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { arrayMascotas } from '../../Constants/arrayMascotas';


const Names = (props ) => {
    const {match, formData, setForm, navigation} = props
  
    /* const { match } = props */
    const { id } = match.params
  
    const pet = props.location.state
    

    const {nombreCompleto, edad, profesion } = formData;
    
    return (
       <Container maxWidth='xs' style={{backgroundColor: 'white'}} >
            <h3>Datos de la Mascota</h3>
            <h4>Nombre: {pet.name} <br />
            Tipo: {pet.kind} </h4>
           <h3>Datos del Interesado</h3>
           <TextField
            label = 'Nombre Completo'
            name= 'nombreCompleto'
            value = {nombreCompleto}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
           <TextField
            label = 'Edad'
            name= 'edad'
            value = {edad}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
           <TextField
            label = 'Profesión / Ocupación'
            name= 'profesion'
            value = {profesion}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
          
           <div className='mt-4'>
           <Button
           color='secondary'
           variant='contained'
           className='mr-4'
           onClick={()=> navigation.previous()}
           >
               Anterior
           </Button>
           <Button 
           variant='contained' 
           color='primary' 
           onClick={() => navigation.next()}
           >
            Siguiente
            </Button>
            </div>
            
       </Container>
    )
}

export default Names;