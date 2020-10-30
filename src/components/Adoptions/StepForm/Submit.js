import React from 'react';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

const Submit = () => {
    return (
        <Container maxWidth='sm' className='mt-4'>
            <h3 className='mt-4 mb-4'>
                Gracias por postularte.
                <br />
                ¡Pronto nos pondremos en contacto!
            </h3>
            <Link to="/" className="btn btn-danger">VOLVER</Link>

        </Container>
    )
}

export default Submit;