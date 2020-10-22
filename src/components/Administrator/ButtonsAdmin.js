import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonsAdmin () {
    return(
        <div className="container text-center h-100 bg-light d-flex justify-content-center align-items-center">
        {/* // <div className="container bg-light"> */}
            <div className="col-md-6 w-50 p-3 center-block">
                <Link to="/admin/usuarios">
                    <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Usuarios</button>
                </Link>
                <Link to="/admin/mascotas">
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Mascotas</button>
                </Link>
                <Link to="/admin/adopciones">
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Adopciones</button>
                </Link>
                <Link to="/admin/voluntarios">
                <button type="button" className="btn-block btn-outline-info p-2 mt-3 rounded">Voluntarios</button>
                </Link>
                </div>
            </div>
    );
}