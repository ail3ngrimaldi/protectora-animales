import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const PreguntasTres = ({formData, setForm, navigation} ) => {

    const {pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18 } = formData;

    const[errTrece, setErrTrece] = React.useState('')
    const[errCatorce, setErrCatorce] = React.useState('')
    const[errQuince, setErrQuince] = React.useState('')
    const[errDieciseis, setErrDieciseis] = React.useState('')
    const[errDiecisiete, setErrDiecisiete] = React.useState('')
    const[errDieciocho, setErrDieciocho] = React.useState('')
    const [requireFields, setRequireFields] = React.useState('')
    const [error,setError] = React.useState(true)

    const loadData = ()=>{

        let countError = 0
        let emptyFields = 0
            if(error){
                if(pregunta13 === ''){
                    emptyFields ++
                    
                }
                else if(pregunta13.split(' ').length < 3 || pregunta13.split(' ')[2] === ''){
                    
                    countError++
                    setErrTrece('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrTrece('')
                }
                if(pregunta14 === ''){
                    emptyFields++
                    
                }
                else if(pregunta14.split(' ').length < 3 || pregunta14.split(' ')[2] === ''){
                    countError++
                    setErrCatorce('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrCatorce('')
                }
                if(pregunta15 === ''){
                    emptyFields++
                    
                }
                else if(pregunta15.split(' ').length < 3 || pregunta15.split(' ')[2] === ''){
                    countError++
                    setErrQuince('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrQuince('')
                }
                if(pregunta16 === ''){
                    emptyFields++
                    
                }
                else if(pregunta16.split(' ').length < 3 || pregunta16.split(' ')[2] === ''){
                    countError++
                    setErrDieciseis('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrDieciseis('')
                }
                if(pregunta17 === ''){
                    emptyFields++
                    
                }
                else if(pregunta17.split(' ').length < 3 || pregunta17.split(' ')[2] === ''){
                    countError++
                    setErrDiecisiete('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrDiecisiete('')
                }
                if(pregunta18 === ''){
                    emptyFields++
                    
                }
                else if(pregunta18.split(' ').length < 3 || pregunta18.split(' ')[2] === ''){
                    countError++
                    setErrDieciocho('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrDieciocho('')
                }
                if(emptyFields !== 0){
                    setRequireFields('Debe rellenar todos los campos requeridos!')
                }else{
                    setRequireFields('')
                }
                if(emptyFields === 0 && countError === 0){
                    setError(false)
                    navigation.next()
                }
            
            }
            
            
    }

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
           {
               errTrece?
               <p className='text-danger'>{errTrece}</p>
               :
               <span></span>
           }
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
           {
               errCatorce?
               <p className='text-danger'>{errCatorce}</p>
               :
               <span></span>
           }
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
           {
               errQuince?
               <p className='text-danger'>{errQuince}</p>
               :
               <span></span>
           }
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
           {
               errDieciseis?
               <p className='text-danger'>{errDieciseis}</p>
               :
               <span></span>
           }
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
           {
               errDiecisiete?
               <p className='text-danger'>{errDiecisiete}</p>
               :
               <span></span>
           }
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
            {
               errDieciocho?
               <p className='text-danger'>{errDieciocho}</p>
               :
               <span></span>
           }
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
           onClick={() => loadData()}
           >
            Siguiente
            </Button>

           </div>
           <br/>
            <p className='text-danger'>{requireFields}</p>
        </Container>
    )
}

export default PreguntasTres;