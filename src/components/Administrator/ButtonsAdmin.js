import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ButtonsAdmin(props) {
    const [validate, setValidate] = useState()

    useEffect(() => {
        setValidate(props.bool)
    }, [props.bool])

    return (
        <div className="container text-center h-100 bg-light d-flex justify-content-center align-items-center">
            <div className="col-md-6 w-50 p-3 center-block">
                <Link to="/Admin/Usuarios">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Usuarios</button>
                </Link>
                <Link to="/Admin/Mascotas">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Mascotas</button>
                </Link>
                <Link to="/Admin/Adopciones">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Adopciones</button>
                </Link>
                <Link to="/Admin/Voluntarios">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Voluntarios</button>
                </Link>
                {validate
                    ? <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded" onClick={() => { props.handle(); setValidate(false) }}>Habilitar Cartel</button>
                    : <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded" onClick={() => { props.handle(); setValidate(true) }}>Deshabilitar Cartel</button>
                }
                <Link to="/">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Volver</button>
                </Link>
            </div>
        </div>
    );
}