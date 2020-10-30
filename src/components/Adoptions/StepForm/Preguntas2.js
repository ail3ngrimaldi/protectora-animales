import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const PreguntasDos = ({formData, setForm, navigation} ) => {

    const {pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12 } = formData;
    
    const[errSiete, setErrSiete] = React.useState('')
    const[errOcho, setErrOcho] = React.useState('')
    const[errNueve, setErrNueve] = React.useState('')
    const[errDiez, setErrDiez] = React.useState('')
    const[errOnce, setErrOnce] = React.useState('')
    const[errDoce, setErrDoce] = React.useState('')
    const [requireFields, setRequireFields] = React.useState('')
    const [error,setError] = React.useState(true)

    const loadData = ()=>{

        let countError = 0
        let emptyFields = 0
            if(error){
                if(pregunta7 === ''){
                    emptyFields ++
                    
                }
                else if(pregunta7.split(' ').length < 3 || pregunta7.split(' ')[2] === ''){
                    
                    countError++
                    setErrSiete('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrSiete('')
                }
                if(pregunta8 === ''){
                    emptyFields++
                    
                }
                else if(pregunta8.split(' ').length < 3 || pregunta8.split(' ')[2] === ''){
                    countError++
                    setErrOcho('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrOcho('')
                }
                if(pregunta9 === ''){
                    emptyFields++
                    
                }
                else if(pregunta9.split(' ').length < 3 || pregunta9.split(' ')[2] === ''){
                    countError++
                    setErrNueve('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrNueve('')
                }
                if(pregunta10 === ''){
                    emptyFields++
                    
                }
                else if(pregunta10.split(' ').length < 3 || pregunta10.split(' ')[2] === ''){
                    countError++
                    setErrDiez('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrDiez('')
                }
                if(pregunta11 === ''){
                    emptyFields++
                    
                }
                else if(pregunta11.split(' ').length < 3 || pregunta11.split(' ')[2] === ''){
                    countError++
                    setErrOnce('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrOnce('')
                }
                if(pregunta12 === ''){
                    emptyFields++
                    
                }
                else if(pregunta12.split(' ').length < 3 || pregunta12.split(' ')[2] === ''){
                    countError++
                    setErrDoce('La respuesta ser una frase compuesta por al menos 3 palabras!')
                }
                else{
                    setErrDoce('')
                }
                if(emptyFields !== 0){
                    setRequireFields('La respuesta ser una frase compuesta por al menos 3 palabras!')
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
           {
               errSiete?
               <p className='text-danger'>{errSiete}</p>
               :
               <span></span>
           }
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
           {
               errOcho?
               <p className='text-danger'>{errOcho}</p>
               :
               <span></span>
           }
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
           {
               errNueve?
               <p className='text-danger'>{errNueve}</p>
               :
               <span></span>
           }
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
           {
               errDiez?
               <p className='text-danger'>{errDiez}</p>
               :
               <span></span>
           }
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
           {
               errOnce?
               <p className='text-danger'>{errOnce}</p>
               :
               <span></span>
           }
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
           {
               errDoce?
               <p className='text-danger'>{errDoce}</p>
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

export default PreguntasDos;