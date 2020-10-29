import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import orange from '@material-ui/core/colors/orange'


const Preguntas = ({formData, setForm, navigation} ) => {

    const {pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6 } = formData;
    const[errUno, setErrUno] = React.useState('')
    const[errDos, setErrDos] = React.useState('')
    const[errTres, setErrTres] = React.useState('')
    const[errCuatro, setErrCuatro] = React.useState('')
    const[errCinco, setErrCinco] = React.useState('')
    const[errSeis, setErrSeis] = React.useState('')
    const [requireFields, setRequireFields] = React.useState('')
    const [error,setError] = React.useState(true)

    const loadData = ()=>{

        let countError = 0
        let emptyFields = 0
            if(error){
                if(pregunta1 === ''){
                    emptyFields ++
                    
                }
                else if(pregunta1.split(' ').length < 3 || pregunta1.split(' ')[2] === ''){
                    
                    countError++
                    setErrUno('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrUno('')
                }
                if(pregunta2 === ''){
                    emptyFields++
                    
                }
                else if(pregunta2.split(' ').length < 3 || pregunta2.split(' ')[2] === ''){
                    countError++
                    setErrDos('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrDos('')
                }
                if(pregunta3 === ''){
                    emptyFields++
                    
                }
                else if(pregunta3.split(' ').length < 3 || pregunta3.split(' ')[2] === ''){
                    countError++
                    setErrTres('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrTres('')
                }
                if(pregunta4 === ''){
                    emptyFields++
                    
                }
                else if(pregunta4.split(' ').length < 3 || pregunta4.split(' ')[2] === ''){
                    countError++
                    setErrCuatro('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrCuatro('')
                }
                if(pregunta5 === ''){
                    emptyFields++
                    
                }
                else if(pregunta5.split(' ').length < 3 || pregunta5.split(' ')[2] === ''){
                    countError++
                    setErrCinco('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrCinco('')
                }
                if(pregunta6 === ''){
                    emptyFields++
                    
                }
                else if(pregunta6.split(' ').length < 3 || pregunta6.split(' ')[2] === ''){
                    countError++
                    setErrSeis('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrSeis('')
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
           {
               errUno?
               <p className='text-danger'>{errUno}</p>
               :
               <span></span>
           }
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
           {
               errDos?
               <p className='text-danger'>{errDos}</p>
               :
               <span></span>
           }
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
           {
               errTres?
               <p className='text-danger'>{errTres}</p>
               :
               <span></span>
           }
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
           {
               errCuatro?
               <p className='text-danger'>{errCuatro}</p>
               :
               <span></span>
           }
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
           {
               errCinco?
               <p className='text-danger'>{errCinco}</p>
               :
               <span></span>
           }
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
           {
               errSeis?
               <p className='text-danger'>{errSeis}</p>
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

export default Preguntas;