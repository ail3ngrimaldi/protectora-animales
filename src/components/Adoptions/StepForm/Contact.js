import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Address = (props ) => {
    // console.log(navigation.previous())
    const {formData, setForm, navigation} = props
    console.log(props, "propssssss contac")
    const {direccion, celular, email, redesSociales } = formData;

    return (
        <Container maxWidth='xs' style={{backgroundColor: 'white'}} >
            <h3>Datos de Contacto</h3>
            <TextField
            label = 'Dirección'
            name= 'direccion'
            value = {direccion}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
           <TextField
            label = 'Celular'
            name= 'celular'
            value = {celular}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
           <TextField
            label = 'Email'
            name= 'email'
            value = {email}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
           />
           <TextField
            label = 'Redes Sociales'
            name= 'redesSociales'
            value = {redesSociales}
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

export default Address;