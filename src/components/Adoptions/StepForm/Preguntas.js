import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import orange from '@material-ui/core/colors/orange'


const Preguntas = ({formData, setForm, navigation} ) => {

    const {pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6 } = formData;

    return (
        <Container maxWidth='md'style={{backgroundColor: 'white'}} >
            <h3>Preguntas</h3>
            <TextField
            label = '¿Por qué le interesa este animal en particular?'
            name= 'pregunta1'
            value = {pregunta1}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline 
            rows='3'
            className='pt-3'
            
           />
           <TextField
            label = '¿Qué función desempeñaría en su hogar (compañía, guardia, etc). Especificar lo más posible a fin de evaluar según el carácter del perro o gato elegido.'
            name= 'pregunta2'
            value = {pregunta2}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline
            rows='3'
            className='pt-3 mr-4 '
           />
           <TextField
            label =  '¿La casa en donde vive es de su propiedad? Si es inquilino, ¿el propietario le permite tener una mascota?Si vive en propiedad horizontal, ¿el reglamento del consorcio permite la tenencia de mascotas?'
            name= 'pregunta3'
            value = {pregunta3}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline
            rows='3'
            className='pt-3'
           />
           <TextField
            label = '¿La casa tiene patio, jardín, balcón? En caso de tener patio o jardín, ¿está tapialado o alambrado?'
            name= 'pregunta4'
            value = {pregunta4}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline
            rows='3'
            className='pt-3'
           />
           <TextField
            label='¿Al cuidado de quién quedaría el animal cuando vaya de vacaciones?'
            name= 'pregunta5'
            value = {pregunta5}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline
            rows='3'
            className='pt-3'
           />
           <TextField
            label='¿Cuántas horas por día estaría solo el animal?'
            name= 'pregunta6'
            value = {pregunta6}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline
            rows='3'
            className='pt-3'
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

export default Preguntas;