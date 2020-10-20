import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { arrayMascotas } from '../../Constants/arrayMascotas';


const Names = ({match, formData, setForm, navigation} ) => {
    
    // const { match } = props
    const { id } = match.params
    const mascota = arrayMascotas.filter(a => {
        return a.id == id
    })[0]

    console.log({formData})

    const {nombreCompleto, edad, profesion } = formData;

    return (
       <Container maxWidth='xs' style={{backgroundColor: 'white'}} >
            <h3>Datos de la Mascota</h3>
           <TextField
            label = 'Nombre Mascota'
            name= 'nombreMascota'
            id='mascota'
            value = {mascota.Nombre}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
           <TextField
            label = 'Tipo Mascota'
            name= 'tipoMascota'
            value = {mascota.Tipo}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
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