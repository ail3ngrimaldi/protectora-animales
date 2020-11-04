import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const Names = (props) => {
    const { formData, setForm, navigation } = props
    const history = useHistory();
    const [requireFields, setRequireFields] = React.useState('')
    const [errNombreCompleto, setErrNombreCompleto] = React.useState('')
    const [errEdad, setErrEdad] = React.useState('')
    const [errProfesion, setErrProfesion] = React.useState('')
    const [error, setError] = React.useState(true)
    const [resaltar, setResaltar] = React.useState('')
    console.log(resaltar)
    // const { id } = match.params

    const pet = props.location.state


    const { nombreCompleto, edad, profesion } = formData;

    const loadData = () => {
        // let errorMessages = [];
        let countError = 0
        let emptyFields = 0
        if (error) {
            if (nombreCompleto === '') {
                emptyFields++
                setResaltar('error')

            }
            else if (nombreCompleto.split(' ').length < 2 || nombreCompleto.split(' ')[1] === '') {
                setErrNombreCompleto('Debes ingresar al menos un nombre y apellido')
                countError++

            }
            else {
                setErrNombreCompleto('')
            }
            if (edad === '') {
                emptyFields++

            }
            else if (isNaN(edad)) {
                setErrEdad('La edad debe ser un valor numerico')
                countError++

            } else if (parseInt(edad) < 18) {
                setErrEdad('Debes ser mayor de edad para poder adoptar una mascota')
                countError++

            }
            else {
                setErrEdad('')
            }
            if (profesion === '') {
                emptyFields++

            }
            else if (profesion.length < 5) {
                setErrProfesion('Debes ingresar una profesión valida')
                countError++

            }
            else {
                setErrProfesion('')
            }

            if (emptyFields !== 0) {
                setRequireFields('Debe rellenar todos los campos requeridos!')
            } else {
                setRequireFields('')
            }
            if (emptyFields === 0 && countError === 0) {
                setError(false)
                navigation.next()
            }

        }

    }

    return (
        <Container maxWidth='xs' style={{ backgroundColor: 'white' }} >
            <h3>Datos de la Mascota</h3>
            <h4>Nombre: {pet.name} <br />
            Tipo: {pet.kind} </h4>
            <h3>Datos del Interesado</h3>
            <TextField

                label='Nombre Completo'
                name='nombreCompleto'
                value={nombreCompleto}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errNombreCompleto ?

                    <p className='text-danger'>{errNombreCompleto}</p>

                    :
                    <span></span>
            }
            <TextField
                label='Edad'
                name='edad'
                value={edad}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errEdad ?

                    <p className='text-danger'>{errEdad}</p>

                    :
                    <span></span>
            }
            <TextField
                label='Profesión / Ocupación'
                name='profesion'
                value={profesion}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errProfesion ?

                    <p className='text-danger'>{errProfesion}</p>

                    :
                    <span></span>
            }
            <div className='mt-4'>
                <Button
                    color='secondary'
                    variant='contained'
                    className='mr-4'
                    onClick={() => history.push(`/pet/${pet.name}`)}
                >
                    Anterior
           </Button>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() =>

                        loadData()


                    }
                >
                    Siguiente
            </Button>
            </div>

            <p className='text-danger'>{requireFields}</p>
        </Container>
    )
}

export default Names;