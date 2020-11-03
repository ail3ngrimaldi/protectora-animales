import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Address = (props) => {
    const { formData, setForm, navigation } = props
    const { direccion, celular, email, redesSociales } = formData;
    const [requireFields, setRequireFields] = React.useState('')
    const [errDireccion, setErrDireccion] = React.useState('')
    const [errCelular, setErrCelular] = React.useState('')
    const [errEmail, setErrEmail] = React.useState('')
    const [errRedesSociales, setErrRedesSociales] = React.useState('')
    // const [showError, setShowError] = React.useState([])
    const [error, setError] = React.useState(true)

    const loadData = () => {
        const expreg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        let arrRedSocial = ['facebook', 'instagram', 'twiter', 'tiktok']
        //let errorMessages = [];
        let countError = 0
        let emptyFields = 0
        if (error) {
            if (direccion === '') {
                emptyFields++

            }
            else if (direccion.length < 6) {
                setErrDireccion('Debe ingresar una dirección valida!')
                countError++

            }
            else {
                setErrDireccion('')
            }
            if (celular === '') {
                emptyFields++

            }
            else if (celular.length < 10) {
                setErrCelular('Debe ingresar un numero de telefono valido')
                countError++

            }
            else {
                setErrCelular('')
            }
            if (email === '') {
                emptyFields++

            }
            else if (!expreg.test(email)) {
                setErrEmail('Debes ingresar un email valido')
                countError++

            }
            else {
                setErrEmail('')
            }
            if (redesSociales === '') {
                emptyFields++

            }
            else if (arrRedSocial.indexOf(redesSociales.toLowerCase()) === -1) {
                setErrRedesSociales('La red social ingresada no es valida')
                countError++

            }
            else {
                setErrRedesSociales('')
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
            <h3>Datos de Contacto</h3>
            <TextField
                label='Dirección'
                name='direccion'
                value={direccion}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errDireccion ?

                    <p className='text-danger'>{errDireccion}</p>

                    :
                    <span></span>
            }
            <TextField
                label='Celular'
                name='celular'
                value={celular}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errCelular ?

                    <p className='text-danger'>{errCelular}</p>

                    :
                    <span></span>
            }
            <TextField
                label='Email'
                name='email'
                value={email}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errEmail ?

                    <p className='text-danger'>{errEmail}</p>

                    :
                    <span></span>
            }
            <TextField
                label='Redes Sociales'
                name='redesSociales'
                value={redesSociales}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />
            {
                errRedesSociales ?

                    <p className='text-danger'>{errRedesSociales}</p>

                    :
                    <span></span>
            }
            <div className='mt-4'>
                <Button
                    color='secondary'
                    variant='contained'
                    className='mr-4'
                    onClick={() => navigation.previous()}
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

            <p className='text-danger'>{requireFields}</p>

        </Container>
    )
}

export default Address