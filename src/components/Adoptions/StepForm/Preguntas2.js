import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const PreguntasDos = ({formData, setForm, navigation} ) => {

    const {pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12 } = formData;

    return (
        <Container maxWidth='md'style={{backgroundColor: 'white'}}  >
            <h3>Preguntas</h3>
            <TextField
            label = '(En caso de querer adoptar un perro)¿Cuántas veces lo sacarían al día? ¿Quién se encargaría de hacerlo?'
            name= 'pregunta7'
            value = {pregunta7}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline 
            rows='3'
            
           />
           <TextField
            label = '¿Dónde estaría el animal durante el día? ¿Dónde dormiría?'
            name= 'pregunta8'
            value = {pregunta8}
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
            label =  '¿Cuántas personas viven en la casa y qué edades tienen?'
            name= 'pregunta9'
            value = {pregunta9}
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
            label = '¿Están de acuerdo TODOS los integrantes del grupo familiar con adoptar una mascota?'
            name= 'pregunta10'
            value = {pregunta10}
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
            label='¿Tiene otras mascotas? En caso de respuesta afirmativa: especificar especie y edad, especificar si están esterilizados ¿Tiene espacio/ recursos/ tiempo para tener otro?¿Qué veterinario atiende a sus mascotas?'
            name= 'pregunta11'
            value = {pregunta11}
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
            label='¿Ya ha tenido mascotas? ¿De qué murieron?'
            name= 'pregunta12'
            value = {pregunta12}
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
               Back
           </Button>
           <Button 
           variant='contained' 
           color='primary' 
           onClick={() => navigation.next()}
           >
            Next
            </Button>

           </div>
         
        </Container>
    )
}

export default PreguntasDos;