import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const PreguntasTres = ({formData, setForm, navigation} ) => {

    const {pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18 } = formData;

    return (
        <Container maxWidth='md' style={{backgroundColor: 'white'}}  >
            <h3>Preguntas</h3>
            <TextField
            label = '(Si el animalito es cachorro) ¿Está de acuerdo con esterilizarlo a los 6 meses de edad? En caso de respuesta negativa, especificar el motivo:'
            name= 'pregunta13'
            value = {pregunta13}
            onChange={setForm}
            margin='normal'
            variant ='outlined'
            autoComplete='off'
            fullWidth
            multiline 
            rows='3'
            className='p-auto'
           />
           <TextField
            label = '¿Tiene recursos económicos para mantenerlo, aplicarle las vacunas anuales correspondientes y afrontar cualquier eventual inconveniente relativo a la salud del animal?'
            name= 'pregunta14'
            value = {pregunta14}
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
            label =  '¿Qué motivo haría que no pudiera hacerse más cargo del animal? En el caso de que por X razón, no pudiera hacerse más cargo de la mascota en algún determinado momento, ¿qué haría?'
            name= 'pregunta15'
            value = {pregunta15}
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
            name= 'pregunta16'
            value = {pregunta16}
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
            label='Realizamos una entrevista previa a la adopción y seguimientos posteriores, ¿Está dispuesto a recibir una visita nuestra, con el objetivo de conocer la familia y el futuro posible hogar del animal?'
            name= 'pregunta17'
            value = {pregunta17}
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
            label='La adopción es para TODA la vida del animal, ¿Ud. es consciente de la responsabilidad que esto significa?'
            name= 'pregunta18'
            value = {pregunta18}
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

export default PreguntasTres;